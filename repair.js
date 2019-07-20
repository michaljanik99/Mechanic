// menu button script
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
// lists script
const btnm = document.querySelectorAll('.price .mech p');
btnm.forEach(p => p.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('active');
    if (this.firstElementChild.firstElementChild.classList.contains('fa-plus-circle')) {
        this.firstElementChild.firstElementChild.classList.remove('fa-plus-circle');
        this.firstElementChild.firstElementChild.classList.add('fa-minus-circle');

    } else if (this.firstElementChild.firstElementChild.classList.contains('fa-minus-circle')) {
        this.firstElementChild.firstElementChild.classList.remove('fa-minus-circle');
        this.firstElementChild.firstElementChild.classList.add('fa-plus-circle');

    }

}))