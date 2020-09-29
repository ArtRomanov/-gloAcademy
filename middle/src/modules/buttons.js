const buttonsEventListeners = () => {
    const clubUl = document.getElementById('clubs-list'),
        openPopUp = document.querySelector('.open-popup'),
        freeVisitForm = document.getElementById('free_visit_form'),
        popup = document.querySelectorAll('.popup'),
        callbackForm = document.getElementById('callback_form'),
        giftBtn = document.querySelector('.fixed-gift'),
        gift = document.getElementById('gift'),
        body = document.querySelector('body');

    body.addEventListener('click', event => {
        const target = event.target;
        const p = target.closest('#choose_club');
        const callbackPopup = target.closest('.callback-btn-popup');
        if (target.contains(p)) {
            if (clubUl.style.display === 'none' || clubUl.style.display === '') {
                clubUl.style.display = 'block';
            } else {
                clubUl.style.display = 'none';
            }
        } else {
            clubUl.style.display = 'none';
        }
        if (target.contains(callbackPopup)) {
            callbackForm.style.display = 'block';
        }
        if (giftBtn) {
            const test = giftBtn.querySelector('img');
            if (target.contains(test)) {
                giftBtn.style.display = 'none';
                gift.style.display = 'block';
            }

        }
        if (target.contains(openPopUp)) {
            freeVisitForm.style.display = 'block';
        }

    });


    popup.forEach(item => {
        item.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('close_icon') || target.classList.contains('close-btn')) {
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
