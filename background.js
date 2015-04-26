function injectedMethod (tab, method, callback) {
    chrome.tabs.executeScript(tab.id, { file: 'inject.js' }, function(){
        chrome.tabs.sendMessage(tab.id, { method: method }, callback);
    });
}

function replace (tab) {
    injectedMethod(tab, 'replace', function (response) {
        return true;
    });
}

chrome.browserAction.onClicked.addListener(replace);
