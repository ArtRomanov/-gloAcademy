const sendFrom = () => {
    forms(document.getElementById('banner-form'));
    forms(document.getElementById('card_order'));
    forms(document.getElementById('footer_form'));
    forms(document.getElementById('form1'));
    forms(document.getElementById('form2'));
    const statusMessage = document.createElement('div');
    const preloadAnimation = document.createElement('div');
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    function forms(item) {
        const inputsArr = [...item.elements].filter(item => item.tagName.toLowerCase() !== 'button' &&
        item.type !== 'button');

        inputsArr.forEach(item => {
            item.addEventListener('change', () => {

                if (item.name === 'phone') {
                    const regNum = /^\+?[78]([-()]*\d){10}$/;
                    if (regNum.test(item.value) === false) {
                        item.value = '';
                    }

                } else if (item.name === 'name') {

                    item.value = item.value.replace(/[^а-яё ]/gi, '');

                } else if (item.name === 'promo') {

                    item.value = item.value.replace(/[^а-яё0-9 ]/gi, '');

                }
            });
        });

        const postData = body => fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        function findPopup(el, cls) {
            while ((el = el.parentElement) && !el.classList.contains(cls));
            return el.style.display = 'none';
        }

        item.addEventListener('submit', event => {
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
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    preloadAnimation.classList.remove('spinner-grow');
                    statusMessage.textContent = successMessage;
                })
                .catch(error => {
                    preloadAnimation.classList.remove('spinner-grow');
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });

            inputsArr.forEach(item => {
                item.value = '';
            });
            setTimeout(() => {
                statusMessage.textContent = '';
                findPopup(item, 'popup');
                item.childNodes.forEach(item => {
                    if (item.tagName !== 'H4' && item.tagName !== undefined && item.tagName !== 'DIV') {
                        item.style.display = 'block';
                    }
                });
            }, 6000);

        });

    }
};

export default sendFrom;
