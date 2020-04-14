'use strict';

document.addEventListener('DOMContentLoaded', () => {
    (() => {
        let map = document.querySelector('.map'),
            mapPinMain = map.querySelector('.map__pin--main'),
            formAdress = document.querySelector('#address');

        
        
        function setAdress() { // установка здачения адреса
            formAdress.value = `${Math.floor(mapPinMain.offsetLeft + 
                mapPinMain.offsetWidth / 2)}, ${Math.floor(mapPinMain.offsetTop + 
                mapPinMain.offsetHeight / 2)}`;    
        }
        
        window.movePin = function (evt) { // перемещение главного пина по карте
            if (map.classList.contains('map--faded')) {
                let pinAdress = {
                    x: Math.floor(mapPinMain.offsetLeft +
                        mapPinMain.offsetWidth / 2),
                    y: Math.floor(mapPinMain.offsetTop +
                        mapPinMain.offsetHeight + 19)
                };
                formAdress.value = `${pinAdress.x}, ${pinAdress.y}`;
            }
        
            evt.preventDefault();

            let startCoords = {
                x: evt.clientX,
                y: evt.clientY
            };

            function onMouseMove(moveEvt) {
                moveEvt.preventDefault();
                setAdress();

                let shift = {
                    x: startCoords.x - moveEvt.clientX,
                    y: startCoords.y - moveEvt.clientY
                };

                startCoords = {
                    x: moveEvt.clientX,
                    y: moveEvt.clientY
                };

                mapPinMain.style.left = (mapPinMain.offsetLeft - shift.x) + 'px';
                mapPinMain.style.top = (mapPinMain.offsetTop - shift.y) + 'px';    
                if (mapPinMain.offsetLeft > map.offsetWidth || mapPinMain.offsetLeft < 0) {
                    mapPinMain.style.left = (mapPinMain.offsetLeft + shift.x) + 'px';
                    if (mapPinMain.offsetLeft > map.offsetWidth) {
                        mapPinMain.style.left = map.offsetWidth + 'px';
                    }
                }
                if (mapPinMain.offsetTop > map.offsetHeight || mapPinMain.offsetTop < 0) {
                    mapPinMain.style.top = (mapPinMain.offsetTop + shift.y) + 'px';  
                    if (mapPinMain.offsetTop > map.offsetHeight) {
                        mapPinMain.style.top = map.offsetHeight + 'px';
                    }
  
                }

            }

            function onMouseUp(upEvt) {
                upEvt.preventDefault();

                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
                setAdress();
            }

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

        };
    })();
});