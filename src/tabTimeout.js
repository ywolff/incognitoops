TIME_OUT = 60 * 60 * 1000;

timeOutsByTabId = {};

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    if (tab.incognito) {
        console.log(tabId);
        if (timeOutsByTabId[tabId]) {
            clearTimeout(timeOutsByTabId[tabId]);
        }
        timeOutsByTabId[tabId] = setTimeout(() => chrome.tabs.remove(tabId), TIME_OUT);
    }
});

