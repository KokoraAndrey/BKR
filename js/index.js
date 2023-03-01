const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
const body = document.body;

if (menu && burger) {
    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active');
        body.classList.toggle('lock');
    });

    menu.querySelectorAll('.header__link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            burger.classList.remove('active');
            body.classList.remove('lock');
        });
    });
}


//! Плавный скролл 
// const anchors = document.querySelectorAll('a[href*="#"]');

// anchors.forEach(anchor => {
//     anchor.addEventListener('click', event => {
//         event.preventDefault();

//         const blockID = anchor.getAttribute('href').substring(1);

//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start',
//         });
//     });
// });
