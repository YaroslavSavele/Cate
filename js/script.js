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

const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

popupLinks.forEach((link) => {
   link.addEventListener('click', function() {
      popup.classList.add('open');
   });
});

popupClose.addEventListener('click', function (e) {
   e.preventDefault();
   popup.classList.remove('open');
});
