function injectedMethod (tab, method, callback) {
    chrome.tabs.executeScript(tab.id, { file: 'inject.js' }, function(){
        chrome.tabs.sendMessage(tab.id, { method: method }, callback);
    });
}

function swap (tab) {
    injectedMethod(tab, 'swap', function (response) {
        return true;
    });
}

chrome.browserAction.onClicked.addListener(swap);
