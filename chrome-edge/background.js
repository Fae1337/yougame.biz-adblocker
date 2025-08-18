chrome.webNavigation.onCommitted.addListener(function (details) {
    chrome.tabs.get(details.tabId).then(function(tab) {
        if (!tab || !tab.url) return;
        let url = new URL(tab.url);
        let domain = url.hostname.replace(/^www\./, '');
        if (domain === "yougame.biz") {
            runLinkedinScript(details.tabId);
        }
    }).catch(console.error);
});

function runLinkedinScript(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['ygadblocker.js'],
    });
}
