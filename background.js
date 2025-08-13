chrome.webNavigation.onCommitted.addListener(function (details) {
    // Запрещает запуск скрипта во время загрузки других фреймов
    if (details.frameId == 0) {

        chrome.tabs.get(details.tabId, function(tab) {
            if (!tab || !tab.url) return;

            // Получает URL страницы
            let url = tab.url;

            // Удаляем протокол и www
            let parsedUrl = url.replace("https://", "")
                .replace("http://", "")
                .replace("www.", "");

            // Получаем только домен
            let domain = parsedUrl.slice(0, parsedUrl.indexOf('/') == -1 ? parsedUrl.length : parsedUrl.indexOf('/'))
                .slice(0, parsedUrl.indexOf('?') == -1 ? parsedUrl.length : parsedUrl.indexOf('?'));

            try {
                if (domain && domain === "yougame.biz") {
                    runLinkedinScript(details.tabId);
                }
            } catch (err) {
                console.error(err);
            }

        });
    }
});

function runLinkedinScript(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['ygadblocker.js']
    });
}