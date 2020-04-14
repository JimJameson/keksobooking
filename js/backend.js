'use strict';
document.addEventListener('DOMContentLoaded', () => {
    (() => {
        function onRequest(onSuccess, onError, method, url, data) {
            let promise = new Promise((resolve, reject) => {

                let xhr = new XMLHttpRequest();
                xhr.responseType = 'json';
                xhr.open(method, url);
                xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                xhr.addEventListener('readystatechange', () => {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            resolve(xhr.response);
                        } else {
                            reject(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
                        }
                    }
                });

                xhr.send(data);
            });

            promise.then(onSuccess)
                .catch(onError);

        }

        function onError(errorMessage) { // Вывод ошибки в случае проблем с подключением к серверу
            let errorElement = document.getElementById('error');
            if (errorElement) {
                errorElement.remove();
            }
            let node = document.createElement('div');
            node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red';
            node.style.position = 'absolute';
            node.style.left = 0;
            node.style.right = 0;
            node.style.fontSize = '30px';
            node.id = 'error';
            node.textContent = errorMessage;

            document.body.insertAdjacentElement('afterbegin', node);
        }


        window.backend = {
            download: function (onSuccess) {
                onRequest(onSuccess, onError, 'GET', 'data.json', undefined);
            },
            upload: function (data, onSuccess) {
                onRequest(onSuccess, onError, 'POST', 'save.php', data);
            }
        };
    })();
});