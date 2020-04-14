'use strict';

document.addEventListener('DOMContentLoaded', () => {
    (() => {
        let fileChooser = document.querySelector('#images'),
            block = document.querySelector('.form__place-photos'),
            currentElement;
        fileChooser.addEventListener('change', () => {
            for (let i = 0; i < fileChooser.files.length; i++) {
                const file = fileChooser.files[i];
                let previewBlock = document.createElement('div');

                previewBlock.classList.add('form__place-photo');
                previewBlock.id = 'form__place-photo-' + i;
                let preview = document.createElement('img');
                preview.width = 200;
                preview.height = 200;
                preview.draggable = true;
                preview.classList.add('form__place-img');
                previewBlock.appendChild(preview);
                block.appendChild(previewBlock);
                window.imgUpload(file, preview);

            }

            for (let i = 0; i < block.children.length; i++) {
                const elem = block.children[i];
                elem.children[0].addEventListener('dragstart', function () {
                    currentElement = this;
                    setTimeout(() => {
                        this.classList.add('hidden');
                    }, 0);
    
                });

                elem.children[0].addEventListener('dragend', function () {
                    setTimeout(() => {
                        this.classList.remove('hidden');
                    }, 0);
                });

                elem.addEventListener('dragenter', function (evt) {
                    let oldBlock = currentElement.parentElement;
                    this.appendChild(currentElement);
                    oldBlock.appendChild(this.children[0]);
                    if (this.id != currentElement.parentElement.id) {
                        console.log('ok');
                    }
                });

            }







            //     block.addEventListener('mouseover', (evt) => {
            //         if (evt.target.classList.contains('form__place-photo')) {
            //             evt.target.style.borderColor = 'black';
            //         }
            //     });
            //     block.addEventListener('mouseout', (evt) => {
            //         if (evt.target.classList.contains('form__place-photo')) {
            //             evt.target.style.borderColor = 'transparent';
            //         }
            //     });


            //     block.addEventListener('mousedown', (evt) => {
            //         evt.preventDefault();

            //         let startCoords = {
            //             x: evt.clientX,
            //             y: evt.clientY
            //         };

            //         function onMouseMove(moveEvt) {
            //             let photo = moveEvt.target;

            //             if (photo.tagName === 'IMG') {
            //                 moveEvt.preventDefault();
            //                 photo.style.position = 'absolute';


            //                 let shift = {
            //                     x: startCoords.x - moveEvt.clientX,
            //                     y: startCoords.y - moveEvt.clientY
            //                 };

            //                 startCoords = {
            //                     x: moveEvt.clientX,
            //                     y: moveEvt.clientY
            //                 };

            //                 photo.style.left = (photo.offsetLeft - shift.x) + 'px';
            //                 photo.style.top = (photo.offsetTop - shift.y) + 'px';    
            //                 if (photo.offsetLeft > block.offsetWidth || photo.offsetLeft < 0) {
            //                     photo.style.left = (photo.offsetLeft + shift.x) + 'px';
            //                     if (photo.offsetLeft > block.offsetWidth) {
            //                         photo.style.left = block.offsetWidth + 'px';
            //                     }
            //                 }
            //                 if (photo.offsetTop > block.offsetHeight || photo.offsetTop < 0) {
            //                     photo.style.top = (photo.offsetTop + shift.y) + 'px';  
            //                     if (photo.offsetTop > block.offsetHeight) {
            //                         photo.style.top = block.offsetHeight + 'px';
            //                     }
            //                 }
            //             } 
            //         }   
            //         function onMouseUp(upEvt) {
            //             upEvt.preventDefault();

            //             document.removeEventListener('mousemove', onMouseMove);
            //             document.removeEventListener('mouseup', onMouseUp);
            //         }

            //         document.addEventListener('mousemove', onMouseMove);
            //         document.addEventListener('mouseup', onMouseUp);
            //     });
        });



    })();
});