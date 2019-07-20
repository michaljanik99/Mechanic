// button menu script

const btn = document.querySelector('.button-nav i');
const menu = document.querySelector('nav');
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    document.querySelector('.button-nav').classList.toggle('active');

})

// menu hiden script
const windowWidth = window.outerWidth;
if (windowWidth >= 1280) {
    const navBar = document.querySelector('nav');
    let lastScrollPosition = 0;
    navBar.classList.add('active');
    window.onscroll = function () {
        let newScrollPosition = window.scrollY;
        if (newScrollPosition < lastScrollPosition) {
            navBar.classList.add('active');
        } else {
            navBar.classList.remove('active');
        }
        lastScrollPosition = newScrollPosition;
    }
}