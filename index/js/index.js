$(document).ready(function () {
  //ヘッダー、フッター読み込み
  loadHeader();
  loadFooter();
});

$(window).on('beforeinstallprompt', function(event) {
  // インストールプロンプトの表示を遅らせる
  event.preventDefault();

  // 遅延したイベントをグローバル変数に保存
  deferredPrompt = event.originalEvent;

  // 画面ロード時にインストールプロンプトを表示
  deferredPrompt.prompt();

  // ユーザーの選択結果を待機
  deferredPrompt.userChoice.then(function(choiceResult) {
    if (choiceResult.outcome === 'accepted') {
      console.log('ユーザーがアプリのインストールを許可しました。');
    } else {
      console.log('ユーザーがアプリのインストールを拒否しました。');
    }

    // deferredPromptをnullに設定
    deferredPrompt = null;
  });
});

