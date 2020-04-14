'use strict';
document.addEventListener('DOMContentLoaded', () => {

    (() => {
        let fileChooser = document.querySelector('#avatar'),
            preview = document.querySelector('.notice__preview > img');
        
        fileChooser.addEventListener('change', () => {
            window.imgUpload(fileChooser.files[0], preview);
        });
    })();
});