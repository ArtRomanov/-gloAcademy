const calcFunc = () => {

    const priceTotal = document.getElementById('price-total'),
        form = document.getElementById('card_order'),
        cardTypes = form.querySelectorAll('input[name=card-price]'),
        checkboxes = form.querySelectorAll('input[name=club-name]'),
        promo = form.querySelector('input[placeholder="Промокод"]');
    const mozaikaPrice = ['1999', '9900', '13900', '19900'],
        schelkovoPrice = ['2999', '14990', '21990', '24990'];

    const arr = [];

    const selectClubPrices = target => {
        if (target.value === 'mozaika') {
            if (promo.value === 'ТЕЛО2020') {
                for (let i = 0; i < cardTypes.length; i++) {
                    cardTypes[i].value = Math.ceil(mozaikaPrice[i] * 0.7);
                    arr[i] = cardTypes[i].value;
                }
            } else {
                for (let i = 0; i < cardTypes.length; i++) {
                    cardTypes[i].value = mozaikaPrice[i];
                    arr[i] = cardTypes[i].value;
                }
            }

        }
        if (target.value === 'schelkovo') {
            if (promo.value === 'ТЕЛО2020') {
                for (let i = 0; i < cardTypes.length; i++) {
                    cardTypes[i].value = Math.ceil(schelkovoPrice[i] * 0.7);
                    arr[i] = cardTypes[i].value;
                }

            } else {
                for (let i = 0; i < cardTypes.length; i++) {
                    cardTypes[i].value = schelkovoPrice[i];
                    arr[i] = cardTypes[i].value;
                }
            }

        }
    };

    const showPrice = () => {
        cardTypes.forEach(item => {
            if (item.checked) {
                priceTotal.textContent = item.value;
            }
        });
    };



    form.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('input[name=card-price]') || target.closest('input[name=club-name]')) {
            selectClubPrices(target);
            showPrice(target);
        }
        promo.addEventListener('input', () => {
            if (promo.value === 'ТЕЛО2020') {
                checkboxes.forEach(item => {
                    if (item.checked) {
                        selectClubPrices(item);
                    }
                });
                cardTypes.forEach(item => {
                    if (item.checked) {
                        showPrice(item);
                    }
                });
            }
        });
    });

    checkboxes.forEach(item => {
        if (item.checked) {
            selectClubPrices(item);
        }
    });
    cardTypes.forEach(item => {
        if (item.checked) {
            showPrice(item);
        }
    });

};

export default calcFunc;
