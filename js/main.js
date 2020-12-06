'use strict';

// recommendation: run JS through Babel for IE11 support

(function() {
    svg4everybody();

    mobileHeaderHandler();
    mobileFooterHandler();
    initSlider();

    function initSlider() {
        const slider = tns({
            container: '.slideshow',
            items: 1,
            slideBy: 'page',
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            controls: false,
            nav: false, 
            mouseDrag: true,
            lazyload: true,
            autoplayButtonOutput: false,
        });
    }

    function mobileHeaderHandler() {
        const button = document.querySelector('.js-nav-toggle'),
              headerBottom = document.querySelector('.header-bottom');
              
        const clickHandler = e => {
            e.preventDefault();

            headerBottom.classList.toggle('is--visible');
            button.classList.toggle('is--active');
        }

        button.addEventListener('click', clickHandler);
    }

    function mobileFooterHandler() {
        const toggle = document.querySelectorAll('.expander__toggle');

        const clickHandler = e => {
            const parent = e.target.parentNode;

            parent.classList.toggle('is--visible');
        }

        toggle.forEach(el => el.addEventListener('click', clickHandler));
    }
})()