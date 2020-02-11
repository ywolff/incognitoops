const timeOutsByTabId = {};

chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    if (tab.incognito) {
        chrome.storage.sync.get(['minutes', 'hours'], (result) => {
            miliseconds = 1000 * 60 * (60 * (result.hours || 0) + (result.minutes || 0));
            if (timeOutsByTabId[tabId]) {
                clearTimeout(timeOutsByTabId[tabId]);
            }
            timeOutsByTabId[tabId] = setTimeout(() => chrome.tabs.remove(tabId), miliseconds);
        });
    }
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({hours: 1, minutes: 0});
});
