'use strict';

document.addEventListener('DOMContentLoaded', () => {
    (() => {
        const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
        
        window.imgUpload = function(file, preview) {
                let fileName = file.name.toLowerCase(),
                    matches = FILE_TYPES.some((it) => {
                        return fileName.endsWith(it);
                    });
                if (matches) {
                    let reader = new FileReader();
    
                    reader.addEventListener('load', () => {
                        preview.src = reader.result;
                    });
    
                    reader.readAsDataURL(file);
                }
            };   
    })();
});