const burger = () => {
    const topMenu = document.querySelector('.top-menu'),
    menuBtn = document.querySelector('.menu-button'),
    imgBtn = menuBtn.querySelector('img'),
    popUpMenu = document.querySelector('.popup-menu'),
    clubsBlock = document.getElementById('clubs'),
    wrapper = clubsBlock.querySelector('.wrapper'),
    arrow = document.getElementById('totop');
    const showMenu = () => {
        popUpMenu.style.display = 'flex';
    }
    const closeMenu = (event) => {
        let target = event.target;
        if (target.matches('a, img')) {
            popUpMenu.style.display = 'none';

        }
    };

    const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth,
            heightWindow = document.documentElement.scrollTop,
            posTop = wrapper.getBoundingClientRect().top;
        if (widthWindow < 768 && heightWindow > 200) {
            topMenu.classList.add('menu-fix');
        } else {
            topMenu.classList.remove('menu-fix');

        }
        if (posTop < window.innerHeight){
            arrow.style.display = 'block';
        } else {
            arrow.style.display = 'none';

        }
    };
    checkResponse();
    window.addEventListener('resize', checkResponse);
    window.addEventListener('scroll', checkResponse);
    imgBtn.addEventListener('click', showMenu);
    popUpMenu.addEventListener('click', closeMenu);
};

export default burger;
