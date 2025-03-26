//ヘッダー読み込み
function loadHeader() {
    $.ajax({
        url: "../html/header.html", // 修正
        dataType: "html",
        success: function(data) {
            $("body").prepend(data);
        },
        error: function() {
            console.error("ヘッダーの読み込みに失敗しました。");
        }
    });
}

//フッター読み込み
function loadFooter() {
    $.ajax({
        url: "../html/footer.html", // 修正
        dataType: "html",
        success: function(data) {
            $("body").append(data); // 修正
        },
        error: function() {
            console.error("フッターの読み込みに失敗しました。");
        }
    });
}
