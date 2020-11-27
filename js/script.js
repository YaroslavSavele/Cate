$(document).ready(function(){
   $('.slider').slick({
      dots: true,
   });
});

$(document).ready(function(){
   $('.reviews__slider').slick({
      dots: true,
      slidesToShow: 3,
      centerMode: false,
      variableWidth: true,
   });
});

const popupLinks = document.querySelectorAll('.popup-link');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const bodyCat = document.querySelector('body');
const btn = document.querySelector('.popup__content .button');
const btnSmall = document.querySelector('.popup__after .button');


const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

popupLinks.forEach((link) => {
   link.addEventListener('click', function() {
      popup.classList.add('open');
      bodyCat.classList.add('lock');
   });
});

popupClose.addEventListener('click', function(e) {
   e.preventDefault();
   popup.classList.remove('open');
   bodyCat.classList.remove('lock');
});

btn.addEventListener('click', function(e) {
   e.preventDefault();
   popup.classList.remove('open');
   popup.classList.add('open--after');
});
btnSmall.addEventListener('click', function() {
   popup.classList.remove('open--after');
   bodyCat.classList.remove('lock');
});