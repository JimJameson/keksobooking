'use strict';

document.addEventListener('DOMContentLoaded', () => {
    (() => {
        const ESC_KEYCODE = 27,
            ENTER_KEYCODE = 13;
        
        window.utils = {
            getEscEvent: function(evt) {
                return evt.keyCode === ESC_KEYCODE ? true : false;
            },

            getEnterEvent: function(evt) {
                return evt.keyCode ===ENTER_KEYCODE ? true : false;
            },

            generateNumber: function(min, max) { //генерация случайного числа
                return Math.floor(Math.random() * (max - min) + min);
            },
        
            generateProperty: function(arr, repit) { // выбор случайного элемента из массива с последующим его удалением
                let index = Math.floor(Math.random() * arr.length);
                let value = repit ? arr[index] : arr.splice(index, 1)[0];
                return value;     
            },
        
            generateArr: function(arr) { //создание нового массива со случайно выбранными элементами
                let newArr = arr.slice();
                let arrLength = window.utils.generateNumber(0, 6);
                for (let i = 0; i < arrLength; i++) {
                    let index = window.utils.generateNumber(0, newArr.length-1);
                    newArr.splice(index, 1);          
                }
                return newArr;
            },
        
            shuffleArr: function(arr){ // перемешивание элементов в массиве
                let newArr = arr.slice();
        
                let j, temp;
                for(let i = newArr.length - 1; i > 0; i--){
                    j = Math.floor(Math.random()*(i + 1));
                    temp = newArr[j];
                    newArr[j] = newArr[i];
                    newArr[i] = temp;
                }
                return newArr;
            }
        };
    })();
});