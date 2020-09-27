import buttonsEventListeners from './modules/buttons';
import sendForm from './modules/sendForm';
import sliderMain from './modules/sliderAuto';
import calcFunc from './modules/calc';
import SliderCarousel from './modules/sliderServices';
import sliderGalery from './modules/sliderGalery';

buttonsEventListeners();

sendForm();

sliderMain();

calcFunc();

sliderGalery();

const newOne = new SliderCarousel({
    main: '.super_wrapper',
    wrap: '.services-slider',
    prev: '#arrow-left',
    next: '#arrow-right',
    infinity: true,
    // настройки для аддаптивности
    responsive: [{
        breakpoint: 1280,
        slideToShow: 4
    },
    {
        breakpoint: 1024,
        slideToShow: 3
    },
    {
        breakpoint: 768,
        slideToShow: 2
    },
    {
        breakpoint: 576,
        slideToShow: 1
    }]
});
newOne.init();
