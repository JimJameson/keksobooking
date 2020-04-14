'use strict';

(() => {
    window.setFilterSettings = function () {
        let ads = window.data.getAds(),
            adsCopy = window.data.getAdsCopy();
        let filterElement = document.querySelector('.map__filters-container');
        let prices = {
                'middle': {
                    from: 10000,
                    to: 50000
                },
                'low': {
                    from: 0,
                    to: 10000
                },
                'high': {
                    from: 50000,
                    to: Infinity
                }
            },
            filterValues = {
                'type': 'any',
                'price': 'any',
                'rooms': 'any',
                'guests': 'any',
                'features': []
            };

        filterElement.addEventListener('change', (evt) => {
            if (evt.target.classList.contains('map__filter')) {
                filterValues[evt.target.name.replace('housing-', '')] = evt.target.value;
            } else if (evt.target.name === 'features') {
                if (evt.target.checked) {
                    filterValues.features.push(evt.target.value);
                } else {
                    let index = filterValues.features.indexOf(evt.target.value);
                    filterValues.features.splice(index, 1);
                }
            }
        });

        filterElement.addEventListener('change', window.debounce(() => {
            adsCopy = ads.filter((elem) => {
                let result = true;
                if (filterValues.type != 'any') {
                    result = elem.offer.type === filterValues.type;
                }
                if (result && filterValues.price != 'any') {
                    let priceMin = prices[filterValues.price].from,
                        priceMax = prices[filterValues.price].to;
                    result = elem.offer.price > priceMin && elem.offer.price < priceMax;
                }
                if (result && filterValues.rooms != 'any') {
                    result = elem.offer.rooms.toString() === filterValues.rooms;
                }
                if (result && filterValues.guests != 'any') {
                    result = elem.offer.guests.toString() === filterValues.guests;
                }
                if (result) {
                    for (let i = 0; i < filterValues.features.length; i++) {
                        const e = filterValues.features[i];
                        if (elem.offer.features.indexOf(e) === -1) {
                            result = false;
                            break;
                        } else {
                            result = true;
                        }
                    }
                }
                return result;
            });
            window.data.setAdsCopy(adsCopy);
            window.addMapPins(adsCopy);
        }));
    };

})();