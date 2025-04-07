$(document).ready(function() {
  loadHeader();
  loadFooter();
});
let installPrompt = null;
const installButton = $("#install"); // jQueryオブジェクトとして要素を取得

$(window).on("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttr("hidden"); // jQueryのremoveAttrメソッドを使用
});
