var manifest = chrome.runtime.getManifest();
var extid = chrome.runtime.id;
$("document").ready(function () {
  var _0x3011x3 = new Object;
  _0x3011x3.extensionVersion = manifest.version;
  _0x3011x3.extensionID = extid;
  console.log(manifest.author);
  document.cookie = "userFirstExtensionData=" + btoa(JSON.stringify(_0x3011x3)) + "; path=/; domain=" + manifest.author + ";";
});

