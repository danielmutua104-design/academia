// redirect.js

var host = "https://academiatechtools.com";

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return { redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1] };
  },
  {
    urls: [
      "*://*.ahrefs.com/account/*",
      "*://*.ahrefs.com/user/logout*",
      "*://*.semrush.com/sso/*",
      "*://*.semrush.com/accounts/profile/account-info",
      // Include all other URLs from your list
      "*://*.members.seotoolsjunction.com/*",
      "*://toolszap.com/auth/member",
      "*://toolszap.com/auth/login",
      "*://toolszap.com/auth/signup",
      "*://toolszap.com/auth/profile"
    ],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
  },
  ["blocking"]
);
