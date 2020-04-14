'use strict';

document.addEventListener('DOMContentLoaded', () => {
    (() => {
        
        let ads = [],
            adsCopy = [];

        window.data = {
            getAds: function() {
                return ads;
            },
            setAds: function(arr) {
                ads = arr;
            },
            getAdsCopy: function() {
                return adsCopy;
            },
            setAdsCopy: function(arr) {
                adsCopy = arr;
            }
        };

    })();
});
