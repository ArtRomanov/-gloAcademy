import telMask from './telMask';


const sendFrom = () => {

    forms(document.getElementById('banner-form'));
    forms(document.getElementById('card_order'));
    forms(document.getElementById('footer_form'));
    forms(document.getElementById('form1'));
    forms(document.getElementById('form2'));
    const statusMessage = document.createElement('div');
    const preloadAnimation = document.createElement('div');
    const modalAnswer = document.getElementById('thanks'),
        modalContent = modalAnswer.querySelector('.form-content');
    // eslint-disable-next-line no-unused-vars
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...';

    function forms(item) {

        const inputsArr = [...item.elements].filter(item => item.tagName.toLowerCase() !== 'button' &&
        item.type !== 'button');

        inputsArr.forEach(item => {

            item.addEventListener('input', () => {

                if (item.name === 'phone') {
                    telMask(item);
                    item.value = item.value.replace(/[^0-9+]/, '');

                } else if (item.name === 'name') {

                    item.value = item.value.replace(/[^а-яё ]/gi, '');

                } else if (item.name === 'promo') {

                    item.value = item.value.replace(/[^а-яё0-9 ]/gi, '');

                }
            });

        });

        const validation = arr => {
            //Создаем объек для записей
            const inputObj = {};
            //Перебераем переданные инпуты
            arr.forEach((input, index) => {
                //Если задан плейсхолдер
                if (input.placeholder) {
                    //Проверяем содержание плейсхолдера
                    if (input.placeholder === `Ваш номер телефона...`) {
                        const checkPhone = () => {

                            //Удаляем слушатели, чтобы не дублировать клики
                            input.removeEventListener(`input`, checkPhone);
                            //Регулярное выражение для номера
                            // eslint-disable-next-line no-useless-escape
                            const regNum = /^(([0-9]|\+[0-9])[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{9}$/;
                            if (regNum.test(input.value)) {

                                input.classList.remove(`invalid`);
                                inputObj[index] = true;
                            } else {
                                input.classList.add(`invalid`);
                                //Запускаем проверку на изменение
                                input.addEventListener(`input`, checkPhone);
                                inputObj[index] = false;
                            }
                        };
                        checkPhone();
                    }
                    //Проверяем содержание плейсхолдера
                    if (input.placeholder === `Ваше имя...`) {
                        const checkName = () => {
                            //Удаляем слушатели, чтобы не дублировать клики
                            input.removeEventListener(`input`, checkName);
                            if (input.value !== ``) {
                                input.classList.remove(`invalid`);
                                inputObj[index] = true;
                            } else {
                                input.classList.add(`invalid`);
                                //Запускаем проверку на изменение
                                input.addEventListener(`input`, checkName);
                                inputObj[index] = true;
                            }
                        };
                        checkName();
                    }
                } else if (input.type) {
                    //Проверяем тип для определения чекбокса
                    if (input.type === `checkbox`) {
                        if (input.checked) {
                            inputObj[index] = true;
                        } else {
                            inputObj[index] = false;
                            const newAnimation = () => {
                                let counter = 0;
                                function animation() {
                                    if (counter > -8) {
                                        counter--;
                                        document.querySelector(`label[for=${input.id}]`).style.top = counter + 'px';
                                        requestAnimationFrame(animation);
                                    } else if (counter === -8) {
                                        document.querySelector(`label[for=${input.id}]`).style.top = '0px';
                                    }
                                }
                                animation();
                            };
                            newAnimation();
                        }
                    }
                    //Проверяем тип для радио кнопок
                    if (input.type === `radio`) {
                        if (inputObj[`radio`] !== true) {
                            if (input.checked) {
                                inputObj[`radio`] = true;
                            } else {
                                inputObj[`radio`] = false;
                                const newAnimation = () => {
                                    let counter = 0;
                                    function animation() {
                                        if (counter > -8) {
                                            counter--;
                                            document.querySelector(`label[for=${input.id}]`).style.top = counter + 'px';
                                            requestAnimationFrame(animation);
                                        } else if (counter === -8) {
                                            document.querySelector(`label[for=${input.id}]`).style.top = '0px';
                                        }
                                    }
                                    animation();
                                };
                                newAnimation();
                            }
                        }
                    }
                }
            });
            //Объект в массив
            const inputArr = Object.values(inputObj);
            //Ищем записи false
            if (inputArr.includes(false)) {
                return false;
            } else {
                return true;
            }

        };

        const postData = body => fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        // const findPopup = (el, cls) => {
        //     while ((el = el.parentElement) && !el.classList.contains(cls));
        //     return el.style.display = 'none';
        // };

        item.addEventListener('submit', event => {
            event.preventDefault();
            const inputs = item.querySelectorAll(`input`);
            if (validation(inputs)) {

                const target = event.target;
                item.childNodes.forEach(item => {
                    if (item.tagName !== 'H4' && item.tagName !== undefined && item.tagName !== 'DIV') {
                        item.style.display = 'none';
                    }
                });
                event.preventDefault();
                item.append(statusMessage);
                item.append(preloadAnimation);
                statusMessage.style.color = 'white';

                preloadAnimation.classList.add('spinner-grow', 'text-light');
                statusMessage.textContent = loadMessage;
                const formData = new FormData(item);
                const body = {};

                formData.forEach((val, key) => {
                    body[key] = val;
                });

                postData(body)
                    .then(response => {
                        if (response.status === 200) {
                            throw new Error('status network not 200');
                        }
                        modalAnswer.style.display = ' block';
                        modalContent.innerHTML = `<h4>Спасибо!</h4>
                        <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>
                        <button class="btn close-btn">OK</button>`;

                        preloadAnimation.classList.remove('spinner-grow');
                    })
                    .catch(error => {
                        preloadAnimation.classList.remove('spinner-grow');
                        modalAnswer.style.display = ' block';
                        modalContent.innerHTML = `<h4>Внимание!</h4> 
                        <p>Что-то пошло не так...<br> Повторите попытку позже.</p>
                        <button class="btn close-btn">OK</button>`;
                        console.error(error);
                    });

                inputsArr.forEach(item => {
                    item.value = '';
                });

                setTimeout(() => {
                    statusMessage.textContent = '';
                    // findPopup(item, 'popup');

                    item.childNodes.forEach(item => {
                        if (item.tagName !== 'H4' && item.tagName !== undefined && item.tagName !== 'DIV') {
                            item.style.display = 'block';
                        }
                    });

                    target.reset();
                    modalAnswer.style.display = 'none';
                }, 3000);

            }

        });




    }
};

export default sendFrom;
