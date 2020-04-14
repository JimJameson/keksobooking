'use strict';

document.addEventListener('DOMContentloaded', () => {
    (() => {
        // Валидация формы
    
        // formAvatar = form.querySelector('#avatar');
        // formAvatar.addEventListener('invalid', () => {
        //     if (formTitle.validity.valueMissing) {
        //         formTitle.setCustomValidity('Выберите аватарку!');
        //     } else {
        //         formTitle.setCustomValidity('');
        //     }
        // });
        let formTitle = document.querySelector('#title');
            formTitle.addEventListener('invalid', () => {
                if (formTitle.validity.valueMissing) {
                    formTitle.setCustomValidity('Обязательное поле');
                } else {
                    formTitle.setCustomValidity('');
                }
            });
    
        let formPrice = document.querySelector('#price');
        formPrice.addEventListener('invalid', () => {
            if (formPrice.validity.tooShort) {
                formPrice.setCustomValidity('Цена не должна быть отрицательной');
            } else if (formPrice.validity.tooLong) {
                formPrice.setCustomValidity('Цена не должна превышать 100000 рублей');
            } else if (formPrice.validity.valueMissing) {
                formPrice.setCustomValidity('Обязательное поле');
            } else {
                formPrice.setCustomValidity('');
            }
        });    
    })();
});