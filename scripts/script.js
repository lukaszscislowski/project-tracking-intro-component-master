'use strict'

const hamburger = document.querySelector('.navbar__hamburger');
const navLinks = document.querySelector('.navbar__list');

let clicked = false;

hamburger.addEventListener('click', (e) => {
  clicked = !clicked;
  e.preventDefault();
  e.stopPropagation();
  hamburger.childNodes[1].src = 'images/icon-close.svg';
  navLinks.style.display = 'flex';

  if (!clicked) {
    hamburger.childNodes[1].src = 'images/icon-hamburger.svg';
    navLinks.style.display = 'none';
  }
});