'use strict';

document.addEventListener('DOMContentLoaded', () => {
    (() => {
        function renderMapPin(obj, index) { // создание карточки метки
            let mapPinTemplate = document.querySelector('template')
                .content.querySelector('.map__pin'),
                mapPin = mapPinTemplate.cloneNode(true);

            mapPin.style.left = `${obj.location.x - mapPin.style.width / 2}px`;
            mapPin.style.top = `${obj.location.y - mapPin.style.height}px`;
            let mapPinImg = mapPin.querySelector('img');
            mapPinImg.src = obj.author.avatar;
            mapPinImg.alt = obj.offer.title;
            mapPin.id = index;
            return mapPin;
        }

        window.addMapPins = function (ads) {
            let mapPins = document.querySelector('.map__pins'),
                pinFragment = document.createDocumentFragment(),
                mapPin = mapPins.querySelectorAll('.map__pin:not(.map__pin--main)');

            for (let i = 0; i < mapPin.length; i++) {
                const element = mapPin[i];
                mapPins.removeChild(element);                
            }

            ads.forEach((element, index) => {
                if (index < 5) {
                    pinFragment.appendChild(renderMapPin(element, index));
                }
            });
            mapPins.appendChild(pinFragment);
        };
    })();
});