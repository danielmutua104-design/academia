// block.js
(function() {
  const redirectUrl = "https://app.academiatechtools.com/";

  // List of URL patterns with wildcards
  const blockedPatterns = [
    "https://www.semrush.com/sso/logout*",
    "https://elements.envato.com/sign-out*",
    "https://app.leonardo.ai/settings/account-management*",
    "https://app.leonardo.ai/settings/teams*",
    "https://app.leonardo.ai/settings/profile*",
    "https://www.semrush.com/billing-admin*",
    "https://app.frase.io/app/dashboard/overview",
    "https://app.frase.io/app/dashboard/settings*",
    "https://app.frase.io/app/dashboard/documents",
    "https://app.fraser.io/logout",
    "https://app.frase.io/app/dashboard/documents/new-document/settings*",
    "https://app.frase.io/app/dashboard/documents/new-document/plan",
    "https://www.shutterstock.com/account/*",
    "https://freepik.com/profile/me",
    "https://www.freepik.com/profile/me",
    "https://www.keywordrevealer.com/auth/logout*",
    "https://www.keywordrevealer.com/auth/subscription*",
    "https://keywordtool.io/user*",
    "https://www.canva.com/account*",
    "https://account.elements.envato.com/*",
    "https://elements.envato.com/sign-out",
    "https://www.canva.com/logout*",
    "https://moz.com/subscriptions*",
    "https://moz.com/auth/account*",
    "https://moz.com/users/*",
    "https://moz.com/billing/*",
    "https://www.stockunlimited.com/account",
    "https://www.stockunlimited.com/card/list",
    "https://www.stockunlimited.com/download_history.php?act=viewall",
    "https://www.stockunlimited.com/favourite.php*",
    "https://www.stockunlimited.com/auth_action.php?action=logout",
    "https://www.stockunlimited.com/security.php",
    "https://www.stockunlimited.com/upgrade-plan.php",
    "https://www.storybase.com/logout*",
    "https://blakify.com/user/my_profile",
    "https://www.woorank.com/*/user/account*",
    "https://www.semrush.com/prices/",
    "https://www.semrush.com/accounts*",
    "https://www.udemy.com/user*",
    "https://www.udemy.com/user*",
    "https://account.grammarly.com/*",
    "https://app.neilpatel.com/*/settings*",
    "https://af.articleforge.com/users*",
    "https://prowritingaid.com/*/Account*",
    "https://supremseo.com/dash",
    "https://ahrefs.com/account*",
    "https://www.quetext.com/reports",
    "https://www.quetext.com/account/*",
    "https://www.quetext.com/reports-folder",
    "https://atechbd.net/",
    "https://www.spinrewriter.com/cp-account-settings",
    "https://www.spinrewriter.com/cp-gold-membership",
    "https://www.spinrewriter.com/cp-wordpress-license",
    "https://www.spinrewriter.com/cp-api",
    "https://members.azadseo.com/member",
    "https://*.brandoverflow.com/kw-generator/get",
    "https://*.brandoverflow.com/logout",
    "https://*.brandoverflow.com/locationbyid/*",
    "https://app.brandoverflow.com/profile",
    "https://app.brandoverflow.com/branding",
    "https://app.pageoptimizer.pro/#/useraccount/*",
    "https://nichesss.com/home/settings",
    "https://nichesss.com/home/upgrade/*",
    "https://app.wordhero.co/profile",
    "https://app.wordhero.co/billing",
    "https://app.surferseo.com/billing/*",
    "https://groupbuysseotools.com/*",
    "https://wave.video/account*",
    "https://members.azadseo.com/member",
    "https://members.azadseo.com/profile",
    "https://app.writesonic.com/settings/*",
    "https://lumen5.com/dashboard/account/#settings",
    "https://client.toolsdriver.com/*",
    "https://www.closerscopy.com/account/*",
    "https://studio.lovo.ai/profile",
    "https://www.netflix.com/SignOut?lnkctr=mL",
    "https://app.writecream.com/history",
    "https://app.writecream.com/new-password",
    "https://app.writecream.com/upgrade",
    "https://app.writecream.com/logout",
    "https://www.spyfu.com/account/*",
    "https://members.helium10.com/profile/*",
    "https://toolszm.com/member",
    "https://majestic.com/plans-pricing",
    "https://majestic.com/reports/bulk-backlink-checker",
    "https://access.vipseotools.com/member",
    "https://copymatic.ai/my-content/",
    "https://copymatic.ai/membership-account/",
    "https://copymatic.ai/api-access/",
    "https://www.creaitor.ai/creation/output",
    "https://www.vecteezy.com/account/*",
    "https://vecteezy.com/account/*",
    "https://www.vecteezy.com/members/seotoolbdweb37231/collections",
    "https://wai.wordai.com/bulk_rewrite",
    "https://app.seoshope.com/",
    "https://www.vecteezy.com/members/seotoolbdweb37231/likes",
    "https://www.vecteezy.com/members/seotoolbdweb37231/following",
    "https://writehuman.ai/myaccount/1717704813125x360625268881407550",
    "https://pngtree.com/user/*",
    "https://noxtools.com/secure/*",
    "https://findniche.com/user/user-info?tag=home",
    "https://findniche.com/user/logout",
    "https://app.marketmuse.com/digitavisioncom-castle-stream-62364/cklpb7xu2fgmq0a299qw4pnyj/settings*"
  ];

  // Convert a wildcard pattern to a RegExp.
  function patternToRegExp(pattern) {
    // Escape regex special characters, except *
    let escaped = pattern.replace(/[-[\]/{}()+?.\\^$|]/g, '\\$&');
    // Replace * with .*
    const regexString = '^' + escaped.replace(/\*/g, '.*') + '$';
    return new RegExp(regexString);
  }

  // Build an array of regex objects from blockedPatterns.
  const blockedRegexes = blockedPatterns.map(patternToRegExp);

  // Function to check the current URL and redirect if it matches any blocked regex.
  function checkAndRedirect() {
    const currentUrl = window.location.href;
    for (let regex of blockedRegexes) {
      if (regex.test(currentUrl)) {
        console.log("block.js: Redirecting from blocked URL:", currentUrl, "to", redirectUrl);
        window.location.replace(redirectUrl);
        return;
      }
    }
  }

  // Run the check as soon as possible.
  checkAndRedirect();

  // For SPA navigations: override pushState and replaceState.
  const originalPushState = history.pushState;
  history.pushState = function() {
    originalPushState.apply(history, arguments);
    setTimeout(checkAndRedirect, 0);
  };

  const originalReplaceState = history.replaceState;
  history.replaceState = function() {
    originalReplaceState.apply(history, arguments);
    setTimeout(checkAndRedirect, 0);
  };

  // Listen for popstate and hashchange events.
  window.addEventListener('popstate', () => setTimeout(checkAndRedirect, 0));
  window.addEventListener('hashchange', checkAndRedirect);

  // Intercept clicks on anchor tags leading to blocked URLs.
  document.addEventListener('click', function(e) {
    let target = e.target;
    while (target && target.tagName !== 'A') {
      target = target.parentElement;
    }
    if (target && target.href) {
      for (let regex of blockedRegexes) {
        if (regex.test(target.href)) {
          e.preventDefault();
          console.log("block.js: Intercepted click on blocked URL:", target.href);
          window.location.replace(redirectUrl);
          return;
        }
      }
    }
  }, true);

  // Fallback: Monitor URL changes periodically.
  let lastUrl = location.href;
  setInterval(() => {
    if (location.href !== lastUrl) {
      lastUrl = location.href;
      checkAndRedirect();
    }
  }, 500);
})();
