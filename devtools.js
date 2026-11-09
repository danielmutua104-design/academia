// this only runs when DevTools actually opens
chrome.runtime.sendMessage({ action: "devtools-opened" })
  .catch(() => {
    // SW might already be gone—just swallow the error
  });
