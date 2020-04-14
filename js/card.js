'use strict';

document.addEventListener('DOMContentLoaded', () => {
    (() => {
        window.renderMapCard = function (obj, map) { // создание метки на карте
            let mapCardTemplate = document.querySelector('template')
                .content.querySelector('.map__card'),
                mapCard = mapCardTemplate.cloneNode(true),
                cardFragment = document.createDocumentFragment(),
                mapFiltersContainer = document.querySelector('.map__filters-container');

            function onCardEscPress(evt) {
                if (window.utils.getEscEvent()) {
                    closeCard();
                }
            }

            function closeCard() {
                map.removeChild(mapCard);
                document.removeEventListener('keydown', onCardEscPress);
            }

            function declineAmount(rooms, quests) { // генерация информации о количестве комнат и гостей
                let roomsResult = '',
                    questsResult = '';

                rooms = rooms % 10;
                if (rooms === 1) {
                    roomsResult = `${rooms} комната`;
                } else if (rooms > 1 && rooms < 5) {
                    roomsResult = `${rooms} комнаты`;
                } else {
                    roomsResult = `${rooms} комнат`;
                }
        
                quests = quests % 10;
                if (quests === 1) {
                    questsResult = `${quests} гостя`;
                } else {
                    questsResult = `${quests} гостей`;
                }
        
                return `${roomsResult} для ${questsResult}`;
            }
            
            mapCard.querySelector('.popup__avatar').src = obj.author.avatar;
            mapCard.querySelector('h3').textContent = obj.offer.title;
            mapCard.querySelector('small').textContent = obj.offer.adress;
            mapCard.querySelector('.popup__price')
                .innerHTML = `${obj.offer.price} &#x20bd;/ночь`;

            let typeValue = '';
            
            switch (obj.offer.type) {
                case 'flat':
                    typeValue = 'Квартира';
                    break;
                case 'bungalo':
                    typeValue = 'Бунгало';
                    break;
                case 'house':
                    typeValue = 'Дом';
                    break;
                case 'palace':
                    typeValue = 'Дворец';
                    break;
            }

            mapCard.querySelector('h4').textContent = typeValue;

            let paragraphs = mapCard.querySelectorAll('p');
            paragraphs[2].textContent = declineAmount(obj.offer.rooms, obj.offer.guests);
            paragraphs[3]
                .textContent = `Заезд после ${obj.offer.checkin}, выезд до ${obj.offer.checkout}`;
            
            let features = mapCard.querySelectorAll('.feature');
            features.forEach(element => {
                id = element.classList[1].split('--')[1];

                if (!obj.offer.features.includes(id)) {
                    element.style.display = 'none';
                }
            });

            paragraphs[4].textContent = obj.offer.description;

            let pictures = mapCard.querySelector('.popup__pictures');
            let pictureBlockTemplate = pictures.children[0];
            
            pictures.removeChild(pictureBlockTemplate);
            obj.offer.photos.forEach(photo => {
                let pictureBlock = pictureBlockTemplate.cloneNode(true);
                let picture = pictureBlock.querySelector('img');
                
                picture.src = photo;
                picture.style.width = '100px';
                pictures.appendChild(picture);
            });

            let closeBtn = mapCard.querySelector('.popup__close');


            closeBtn.addEventListener('click', () => {
                closeCard();
            });

            document.addEventListener('keydown', onCardEscPress);

            cardFragment.appendChild(mapCard);
            map.insertBefore(cardFragment, mapFiltersContainer);

        };

    })();
});