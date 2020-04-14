'use strict;'

document.addEventListener('DOMContentLoaded', () => {

    (() => {
        let map = document.querySelector('.map'),
            mapPinMain = map.querySelector('.map__pin--main');
        // Функции ---------------------------------------------------------------


        function displayAdCard(data, id) { // показать карточки объявлений
            data.forEach((element, index) => {
                if (index.toString() === id) {
                    window.renderMapCard(element, index, map);
                }
            });
        }

        function onSuccess(data) { // загрузка данных с сервера в случае успешного подключения
            window.data.setAds(data);
            window.data.setAdsCopy(data);
            map.addEventListener('click', (evt) => {

                if (evt.target.classList.contains('map__pin')) {
                    id = evt.target.id;
                } else if (evt.target.closest('.map__pin')) {
                    id = evt.target.closest('.map__pin').id;
                } else {
                    return;
                }
                currentMapCard = map.querySelector('.map__card');
                if (currentMapCard) {
                    map.removeChild(currentMapCard);
                }
                displayAdCard(window.data.getAdsCopy(), id);
            });
            mapPinMain.addEventListener('mousedown', (evt) => {
                window.formModes.setActiveMode(window.data.getAds());
                window.movePin(evt);
            });
            window.setFilterSettings();

        }

        // Модуль ------------------------------------------------------------------

        window.formModes.setInactiveMode();

        window.backend.download(onSuccess);
    })();
});