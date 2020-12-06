'use strict';

(function() {
    mobileHeaderHandler();

    function mobileHeaderHandler() {
        const button = document.querySelector('.js-nav-toggle'),
              headerBottom = document.querySelector('.header-bottom');
              
        const clickHandler = (e) => {
            e.preventDefault();

            headerBottom.classList.toggle('visible');
            button.classList.toggle('active');
        }

        button.addEventListener('click', clickHandler);
    }
})()