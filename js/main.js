'use strict';

(function() {
    mobileHeaderHandler();
    mobileFooterHandler();



    function mobileHeaderHandler() {
        const button = document.querySelector('.js-nav-toggle'),
              headerBottom = document.querySelector('.header-bottom');
              
        const clickHandler = (e) => {
            e.preventDefault();

            headerBottom.classList.toggle('is--visible');
            button.classList.toggle('is--active');
        }

        button.addEventListener('click', clickHandler);
    }

    function mobileFooterHandler() {
        const toggle = document.querySelectorAll('.expander__toggle');

        const clickHandler = (e) => {
            const parent = e.target.parentNode;

            parent.classList.toggle('is--visible');
        }

        toggle.forEach(el =>  el.addEventListener('click', clickHandler));
    }
})()