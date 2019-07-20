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

// slider script

const imges = ['img/car-repair-362150_640.jpg', 'img/jumper-cables-926308_640.jpg', 'img/auto-repair-1954636_640.jpg'];
const titles = ['Tunnig mechaniczny', 'Diagnostyka komputerowa i elektryka', 'Serwis układów hamulcowych'];
const descriptions = [`Oferujemy tunnig mechaniczny silników benzynowy oraz dieasel.Możemy przeprowadzić modyfikacje układu wydechowego ,dolotowego,zapłonu aż po modyfikacje składu mieszanki paliwo-powietrze ustawionych w komputerze zarządzającym wtryskiem.`, `Przeprowadzamy kompleksową diagnostykę komputerową ,likwidujemy błędy oprogramowania oraz usuwany komunikaty błędu sondy lambda i filtrów DPF.Oferujemy także kompleksowe serwis instalacji elektrycznych oraz prowadzimy punkt utylizacji zużytych akumulatorów.`, `Prowadzimy pełen serwis układów hamulcowy od wymiany klocków hamulcowy po modyfikacje i naprawy układu hamulcowego.Prowadzimy także sklep z częściami do układu hamulcowgo,u nas znajdziesz najelpsze częsci w najlepszych cenach.`];

const title = document.querySelector('.features .info h2');
const description = document.querySelector('.features .info p');
const img = document.querySelector('.features .info .imge');
const leftBtn = document.querySelector('.features .info .left');
const rightBtn = document.querySelector('.features .info .right');

let index = 0;
img.style.backgroundImage = `url(${imges[index]})`;
title.textContent = titles[index];
description.textContent = descriptions[index];

rightBtn.addEventListener('click', function () {
    index++
    if (index == imges.length) {
        index = 0;
    }

    img.style.backgroundImage = `url(${imges[index]})`;
    title.textContent = titles[index];
    description.textContent = descriptions[index];

});
leftBtn.addEventListener('click', function () {
    index--
    if (index < 0) {
        index = (imges.length - 1);
    }
    img.style.backgroundImage = `url(${imges[index]})`;
    title.textContent = titles[index];
    description.textContent = descriptions[index];

});