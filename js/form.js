'use strict';

(() => {
    let form = document.querySelector('.notice__form');
   
    form.addEventListener('submit', (evt) => {
        window.backend.upload(new FormData(form), (response) => {
            form.reset();
        });
        evt.preventDefault();
    });
})();