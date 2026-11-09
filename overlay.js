(() => {
  let wasOpen = false;
  const THRESHOLD = 160; // adjust if needed

  setInterval(() => {
    const dx = window.outerWidth - window.innerWidth;
    const dy = window.outerHeight - window.innerHeight;
    const open = dx > THRESHOLD || dy > THRESHOLD;

    if (open && !wasOpen) {
      // DevTools just opened (docked)
      document.documentElement.style.visibility = "hidden";
    } else if (!open && wasOpen) {
      // DevTools just closed
      document.documentElement.style.visibility = "";
    }
    wasOpen = open;
  }, 200);
})();
