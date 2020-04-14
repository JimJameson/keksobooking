'use strict';
(() => {
    const DEBOUNCE_INTERVAL = 1000;

    window.debounce = function (fun) {
        let lastTimeout = null;
 
        return function() {
            let args = arguments;
            let context = this;
            if (lastTimeout) {
                window.clearTimeout(lastTimeout);
            }
            lastTimeout = window.setTimeout(() => {
                fun.apply(context, args);
            }, DEBOUNCE_INTERVAL);
    
        };
    };
})();