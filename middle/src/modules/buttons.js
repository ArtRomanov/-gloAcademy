const buttonsEventListeners = () => {
    const clubsList = document.querySelector('.clubs-list'),
        clubUl = document.getElementById('clubs-list'),
        openPopUp = document.querySelector('.open-popup'),
        freeVisitForm = document.getElementById('free_visit_form'),
        popup = document.querySelectorAll('.popup'),
        callbackBtn = document.querySelectorAll('.callback-btn'),
        callbackForm = document.getElementById('callback_form'),
        giftBtn = document.querySelector('.fixed-gift'),
        gift = document.getElementById('gift');

    clubsList.addEventListener('click', () => {
        if (clubUl.style.display === 'none' || clubUl.style.display === '') {
            clubUl.style.display = 'block';
        } else {
            clubUl.style.display = 'none';
        }
    });

    openPopUp.addEventListener('click', () => {
        freeVisitForm.style.display = 'block';
    });

    if (giftBtn) {
        giftBtn.addEventListener('click', () => {
            giftBtn.style.display = 'none';
            gift.style.display = 'block';
        });
    }

    callbackBtn.forEach(item => {
        item.addEventListener('click', () => {
            callbackForm.style.display = 'block';
        });
    });


    popup.forEach(item => {
        item.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('close_icon')) {
                item.style.display = 'none';
            } else {
                target = target.closest('.form-content');
                if (!target) {
                    item.style.display = 'none';
                }
            }
        });
    });
};

export default buttonsEventListeners;
