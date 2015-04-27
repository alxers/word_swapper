var injected = injected || (function(){

    // An object that will contain the "methods"
    // we can use from our event script.
    var methods = {};

    methods.swap = function() {

        replaceWord = function() {
            // Replace text.
            var hc = 6;
            var hs;
            var h;
            var k;
            var words = ['Happy','Sparkly','Glittery','Fun','Magical','Lovely','Cute','Charming','Amazing','Wonderful'];
            while(hc >= 1) {
                hs = document.getElementsByTagName('h' + hc);
                for (k = 0; k < hs.length; k++) {
                    h = hs[k];
                    h.innerHTML = words[Math.floor(Math.random()*words.length)] + ' ' + h.innerHTML;
                }
                hc-=1;
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
