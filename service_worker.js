// キャッシュファイルの指定
var CACHE_NAME = 'pwa-sample-caches-v2';
var urlsToCache = [
    '/', // 修正
    'index.html', // 修正
    'common/html/header.html', // 修正
    'common/html/footer.html', // 修正
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});
