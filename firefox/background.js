browser.webNavigation.onCommitted.addListener(function (details) {
    browser.tabs.get(details.tabId).then(function(tab) {
        if (!tab || !tab.url) return;
        let url = new URL(tab.url);
        let domain = url.hostname.replace(/^www\./, '');
        if (domain === "yougame.biz") {
            RunAdblocker(details.tabId);
        }
    }).catch(console.error);
});

function RunAdblocker(tabId) {
    browser.scripting.executeScript({
        target: { tabId: tabId },
        files: ['ygadblocker.js'],
    });
}
