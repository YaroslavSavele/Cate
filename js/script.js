$(document).ready(function () {
   $('.slider').slick({
      dots: true,
   });
});

$(document).ready(function () {
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
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');


const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

popupLinks.forEach((link) => {
   link.addEventListener('click', function () {
      popup.classList.add('open');
      bodyCat.classList.add('lock');
   });
});

popupClose.addEventListener('click', function (e) {
   e.preventDefault();
   popup.classList.remove('open');
   bodyCat.classList.remove('lock');
});

document.addEventListener('keydown', function (e) {
   if (e.code === 'Escape') {
      popup.classList.remove('open');
      bodyCat.classList.remove('lock');
      popup.classList.remove('open--after');
   }
});

btn.addEventListener('click', function (e) {
   e.preventDefault();
   popup.classList.remove('open');
   popup.classList.add('open--after');
});
btnSmall.addEventListener('click', function () {
   popup.classList.remove('open--after');
   bodyCat.classList.remove('lock');
});

burger.addEventListener('click', function () {
   nav.classList.add('is-open');
});
nav.addEventListener('click', function () {
   nav.classList.remove('is-open');
});

//Filter==================

const frmFilter = document.querySelectorAll('.check__input');
const btnApply = document.querySelector('.button--apply');
const btnDiscard = document.querySelector('.button--discard');
const rooms = document.querySelectorAll('.room');
let costFrom = document.getElementById('priceFrom');
let costTo = document.getElementById('priceTo');

function showDiapazon() {
   rooms.forEach((room) => {
      let price = Number(room.querySelector('.current-price').textContent);
      let from = parseInt(costFrom.value);
      let to = parseInt(costTo.value);
      if (price < from || price > to) {
         room.classList.add('hidden');
      }
   })
}


function filterOf(category, items) {
   items.forEach((item) => {
      let squareRoom = item.querySelector('.current-square').textContent;
      let equipmentRoom = item.dataset.filter;
      if (category === squareRoom || category === equipmentRoom) {
         item.classList.add('hidden');
      }
   });
}

function filterOn() {
   rooms.forEach((room) => {
      room.classList.remove('hidden');
   })
}


function useFilter() {
   frmFilter.forEach((check) => {
      if (check.checked == false) {
         const currentCategory = check.dataset.filter;
         filterOf(currentCategory, rooms);
      }
   });
}



btnApply.addEventListener('click', function (e) {
   e.preventDefault();
   filterOn();
   showDiapazon();
   useFilter();
})
btnDiscard.addEventListener('click', function (e) {
   e.preventDefault();
   frmFilter.forEach((check) => {
      check.checked = true;
   });
   costFrom.value = '100';
   costTo.value = '600';

})

