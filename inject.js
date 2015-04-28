var injected = injected || (function(){

    // An object that will contain the "methods"
    // we can use from our event script.
    var methods = {};

    methods.swap = function() {

        replaceWord = function() {
            // Replace text.
            var headerCount = 6;
            var headerElements;
            var headerEl;
            var words = ['Happy','Sparkly','Glittery','Fun','Magical','Lovely','Cute','Charming','Amazing','Wonderful'];
            while(headerCount >= 1) {
                headerElements = document.getElementsByTagName('h' + headerCount);
                for (var i = 0; i < headerElements.length; i++) {
                    headerEl = headerElements[i];
                    headerEl.innerHTML = words[Math.floor(Math.random() * words.length)] + ' ' + headerEl.innerHTML;
                }
                headerCount -= 1;
            }
        }

        replaceWord();

    };

    // This tells the script to listen for
    // messages from our extension.
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        var data = {};
        // If the method the extension has requested
        // exists, call it and assign its response
        // to data.
        if (methods.hasOwnProperty(request.method))
            data = methods[request.method]();
        // Send the response back to our extension.
        sendResponse({ data: data });
        return true;
    });

    return true;
})();
