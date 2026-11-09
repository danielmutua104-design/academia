(() => {
  let blocked = false;

  function onDevToolsOpen() {
    if (blocked) return;
    blocked = true;

    // Option A: inject a fullscreen black overlay
    const overlay = document.createElement("div");
    overlay.id = "__dt_blackout__";
    Object.assign(overlay.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      background: "black",
      zIndex: "2147483647",
      pointerEvents: "none"
    });
    document.documentElement.appendChild(overlay);

    // Option B (uncomment if you’d rather force a blank page):
    // window.location.replace("about:blank");
  }

  function onDevToolsClose() {
    blocked = false;
    const o = document.getElementById("__dt_blackout__");
    if (o) o.remove();
  }

  let wasOpen = false;
  setInterval(() => {
    // heuristic: DevTools usually introduces a big outer–inner size delta
    const dx = window.outerWidth - window.innerWidth;
    const dy = window.outerHeight - window.innerHeight;
    const open = dx > 160 || dy > 160;

    if (open && !wasOpen)   onDevToolsOpen();
    if (!open && wasOpen)   onDevToolsClose();
    wasOpen = open;
  }, 300);
})();
