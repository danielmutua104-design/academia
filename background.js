// Clean, Deobfuscated & Mobile-Patched background.js
const SECRET_KEY = "SHUVO";

function decryptData(encryptedBase64) {
  const bytes = atob(encryptedBase64).split('').map(c => c.charCodeAt(0));
  const keyBytes = new TextEncoder().encode(SECRET_KEY);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] ^= keyBytes[i % keyBytes.length];
  }
  return JSON.parse(new TextDecoder().decode(new Uint8Array(bytes)));
}

function buildCookieHeader(cookies) {
  return (cookies || []).map(c => `${c.name}=${c.value}`).join(';');
}

function hashHost(host) {
  let h = 2166136261;
  for (let i = 0; i < host.length; i++) {
    h = Math.imul(31, h) + host.charCodeAt(i);
    h |= 0;
  }
  return h >>> 0;
}

function ruleIdsForHost(host) {
  const h = hashHost(host);
  const base = (h % 90000) + 1000;
  return [base * 2, base * 2 + 1];
}

// Inject cookies directly into browser cookie jar (critical for Mobile / Orion / Kiwi)
async function injectCookiesDirectly(targetUrl, cookies) {
  if (!chrome.cookies || !Array.isArray(cookies)) return;
  const parsedUrl = new URL(targetUrl);
  for (const c of cookies) {
    try {
      const cleanDomain = (c.domain || parsedUrl.hostname).replace(/^\./, '');
      const cookieDetails = {
        url: `https://${cleanDomain}${c.path || '/'}`,
        name: c.name,
        value: c.value,
        path: c.path || '/',
        secure: c.secure !== undefined ? c.secure : true,
        httpOnly: c.httpOnly !== undefined ? c.httpOnly : false,
        sameSite: 'no_restriction'
      };
      if (!c.hostOnly && c.domain) {
        cookieDetails.domain = c.domain;
      }
      await chrome.cookies.set(cookieDetails);
    } catch (e) {
      console.warn("Cookie set fallback warning:", c.name, e);
    }
  }
}

// Core Session Handler (works for both External Webpage Messages and Internal Content Script Bridge)
async function handleMessage(msg, sender, sendResponse) {
  if (!msg) return;

  if (msg.type === "PING") {
    sendResponse({
      available: true,
      version: chrome.runtime.getManifest().version
    });
    return;
  }

  if (msg.type === "SET_SESSION_DATA" && msg.encryptedData) {
    let sessionData;
    try {
      sessionData = decryptData(msg.encryptedData);
      if (msg.targetUrl) sessionData.url = msg.targetUrl;
    } catch (err) {
      sendResponse({ success: false, error: err.message });
      return;
    }

    const hostname = new URL(sessionData.url).hostname;
    const cookieHeader = buildCookieHeader(sessionData.cookies);
    const [ruleId1, ruleId2] = ruleIdsForHost(hostname);

    // 1. Set cookies directly in browser cookie store for mobile compatibility
    await injectCookiesDirectly(sessionData.url, sessionData.cookies);

    // 2. Also apply declarativeNetRequest rules if supported by browser
    if (chrome.declarativeNetRequest && chrome.declarativeNetRequest.updateDynamicRules) {
      const reqRule = {
        id: ruleId1,
        priority: 1,
        action: {
          type: "modifyHeaders",
          requestHeaders: [{ header: "Cookie", operation: "set", value: cookieHeader }]
        },
        condition: {
          urlFilter: `||${hostname}^`,
          resourceTypes: ["main_frame", "sub_frame", "xmlhttprequest", "script", "other"]
        }
      };
      const resRule = {
        id: ruleId2,
        priority: 1,
        action: {
          type: "modifyHeaders",
          responseHeaders: [{ header: "set-cookie", operation: "remove" }]
        },
        condition: {
          urlFilter: `||${hostname}^`,
          resourceTypes: ["main_frame", "sub_frame", "xmlhttprequest", "script", "other"]
        }
      };

      try {
        await chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: [ruleId1, ruleId2],
          addRules: [reqRule, resRule]
        });
      } catch (e) {
        console.warn("DNR rule update failed on mobile, relying on chrome.cookies:", e);
      }
    }

    chrome.tabs.create({ url: sessionData.url }, () => {
      sendResponse({ success: true });
    });
  }
}

// Listen to external website messages (Desktop / Android Chromium)
if (chrome.runtime.onMessageExternal) {
  chrome.runtime.onMessageExternal.addListener((msg, sender, sendResponse) => {
    handleMessage(msg, sender, sendResponse);
    return true;
  });
}

// Listen to internal extension messages (allows iOS Orion bridge via content script)
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg && (msg.type === "PING" || msg.type === "SET_SESSION_DATA")) {
    handleMessage(msg, sender, sendResponse);
    return true;
  }
  if (msg && msg.message === "GET_USER_INFO") {
    fetch("https://app.academiatechtools.com/api/user_info.php")
      .then(r => r.json())
      .then(data => sendResponse({ success: true, data }))
      .catch(err => sendResponse({ success: false, error: err.message }));
    return true;
  }
});

// Always mark license as valid in storage
if (chrome.storage && chrome.storage.local) {
  chrome.storage.local.set({ isLicensed: true });
}
