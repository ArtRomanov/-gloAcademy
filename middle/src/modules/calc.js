const calcFunc = () => {
    const priceTotal = document.getElementById('price-total'),
        form = document.getElementById('card_order'),
        presentPrices = form.querySelectorAll('label'),
        cardTypes = form.querySelectorAll('input[name=card-price]'),
        checkboxes = form.querySelectorAll('input[name=club-name]'),
        promo = form.querySelector('input[placeholder="Промокод"]');
    const mozaikaPrice = ['1999', '9900', '13900', '19900'],
        schelkovoPrice = ['2999', '14990', '21990', '24990'];

    const priceAdaptation = () => {
        if (cardTypes.length > 4) {
            for (let i = 0; i < cardTypes.length; i++) {
                cardTypes[i].value = presentPrices[i].textContent;
            }
        }
    };
    priceAdaptation();
    const selectClubPrices = target => {
        if (target.id === 'card_leto_mozaika') {
            if (promo.value === 'ТЕЛО2020') {
                for (let i = 0; i < cardTypes.length; i++) {
                    cardTypes[i].value = Math.ceil(mozaikaPrice[i] * 0.7);
                }
            } else {
                for (let i = 0; i < cardTypes.length; i++) {
                    cardTypes[i].value = mozaikaPrice[i];
                }
            }

        }
        if (target.id === 'card_leto_schelkovo') {
            if (promo.value === 'ТЕЛО2020') {
                for (let i = 0; i < cardTypes.length; i++) {
                    cardTypes[i].value = Math.ceil(schelkovoPrice[i] * 0.7);
                }

            } else {
                for (let i = 0; i < cardTypes.length; i++) {
                    cardTypes[i].value = schelkovoPrice[i];
                }
            }

        }
    };

    const showPrice = () => {
        cardTypes.forEach(item => {
            if (item.checked) {
                if (priceTotal) {
                    priceTotal.textContent = item.value;
                }
            }
        });
    };



    form.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('input[name=card-price]') || target.closest('input[name=club-name]')) {
            selectClubPrices(target);
            showPrice(target);
        }
        if (promo) {
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
        }
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
