$(document).ready(function() {
  loadHeader();
  loadFooter();

  $(window).on('beforeinstallprompt', function(event) {
    event.preventDefault();
    const deferredPrompt = event.originalEvent;

    deferredPrompt.prompt().then(() => {
      return deferredPrompt.userChoice;
    }).then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('ユーザーがアプリのインストールを許可しました。');
      } else {
        console.log('ユーザーがアプリのインストールを拒否しました。');
      }
    }).catch((error) => {
      console.error('インストールプロンプトでエラーが発生しました:', error);
    });
  });
});
