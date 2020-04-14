'use strict';

document.addEventListener('DOMContentLoaded', () => {
    (() => {
        let map = document.querySelector('.map'),
            form = document.querySelector('.notice__form'),
            fieldsets = form.querySelectorAll('fieldset'),
            activeMode = false;

        window.formModes = {
            setInactiveMode: function() { // установка неактивности для fieldset полей формы    
                if (activeMode) {
                    fieldsets.forEach((element) => {
                        element.disabled = true;
                    });
                    map.classList.add('map--faded');
                    form.classList.add('notice__form--disabled');
                    activeMode = false;    
                }
            },
            setActiveMode: function(ads) { // установка активности для fieldset полей формы
                if (!activeMode) {
                    window.addMapPins(ads);
                    fieldsets.forEach((element) => {
                        element.disabled = false;
                    });
                    map.classList.remove('map--faded');
        
                    form.classList.remove('notice__form--disabled'); 
                    activeMode = true;   
                }
            }
        };
    })();
});