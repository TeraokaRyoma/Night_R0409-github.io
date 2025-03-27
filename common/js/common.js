//ヘッダー読み込み
function loadHeader() {
    $("#header-container").load("../html/header.html");
}

//フッター読み込み
function loadFooter() {
    $.ajax({
        url: "../html/footer.html", // 相対パスに変更
        dataType: "html",
        success: function(data) {
            $("body").append(data);
        },
        error: function() {
            console.error("フッターの読み込みに失敗しました。");
        }
    });
}
