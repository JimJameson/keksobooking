'use strict';

document.addEventListener('DOMContentLoaded', () => {
    (() => {
        let numbersOfPhoto = [1, 2, 3, 4, 5, 6, 7, 8],
            titles = ['Большая уютная квартира',
                'Маленькая неуютная квартира',
                'Огромный прекрасный дворец',
                'Маленький ужасный дворец',
                'Красивый гостевой домик',
                'Некрасивый негостеприимный домик',
                'Уютное бунгало далеко от моря',
                'Неуютное бунгало по колено в воде'],
        types = ['palace', 'flat', 'house', 'bungalo'],
        checks = ['12:00', '13:00', '14:00'],
        features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
        photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg',
                    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
                    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
        

        let map = document.querySelector('.map');
                
        window.data = {
            generateObject: function(i) { // генерация объекта
                let obj = {
                    author: {
                        avatar: `img/avatars/user0${window.utils.generateProperty(numbersOfPhoto, false)}.png`
                    },
                    offer: {
                        id: i,
                        title: window.utils.generateProperty(titles, false),
                        adress: '',
                        price: window.utils.generateNumber(1000, 1000000),
                        type: window.utils.generateProperty(types, true),
                        rooms: window.utils.generateNumber(1, 5),
                        guests: window.utils.generateNumber(1, 10),
                        checkin: window.utils.generateProperty(checks, true),
                        checkout: window.utils.generateProperty(checks, true),
                        features: window.utils.generateArr(features, null),
                        description: '',
                        photos: window.utils.shuffleArr(photos)
                    },
                    location: {
                        x: window.utils.generateNumber(10, map.offsetWidth),
                        y: window.utils.generateNumber(130, 630)
                    }
                };
        
                obj.offer.adress = `${obj.location.x}, ${obj.location.y}`;
        
                return obj;
            },
        
            generateObjects: function () { // генерация объектов
                let ads = [];
                for (let i = 0; i < 8; i++) {
                    ads.push(window.data.generateObject(i));
                }
                return ads;
            }
                            
        };             
    })();
});
