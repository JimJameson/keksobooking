'use strict';

document.addEventListener('DOMContentLoaded', () => {
    (() => {
        function renderMapPin(obj) { // создание карточки метки
            let mapPinTemplate = document.querySelector('template')
                .content.querySelector('.map__pin'),
                mapPin = mapPinTemplate.cloneNode(true);
            
            mapPin.style.left = `${obj.location.x - mapPin.style.width / 2}px`;
            mapPin.style.top = `${obj.location.y - mapPin.style.height}px`;
            let mapPinImg = mapPin.querySelector('img');
            mapPinImg.src = obj.author.avatar;
            mapPinImg.alt = obj.offer.title;
            mapPin.id = obj.offer.id;
            return mapPin;
        }
        
        window.addMapPins = function(ads) {
            let mapPins = document.querySelector('.map__pins'),
                pinFragment = document.createDocumentFragment();

            window.data.generateObjects();
            ads.forEach(element => {
                pinFragment.appendChild(renderMapPin(element));
            });
            mapPins.appendChild(pinFragment);
        };
    })();
});