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
      catalogFilter.classList.remove('open');
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

//const frmFilter = document.querySelectorAll('.check__input');
//const btnApply = document.querySelector('.button--apply');
//const btnDiscard = document.querySelector('.button--discard');
//const rooms = document.querySelectorAll('.room');
//let costFrom = document.getElementById('priceFrom');
//let costTo = document.getElementById('priceTo');
//const catalogFilter = document.querySelector('.catalog__filter');
//const btnFilter = document.querySelector('.select__filter');
//const filterClose = document.querySelector('.filter__close');


//btnFilter.addEventListener('click', () => {
//   catalogFilter.classList.add('open');
//   bodyCat.classList.add('lock');
//});

//filterClose.addEventListener('click', function (e) {
//   e.preventDefault();
//   catalogFilter.classList.remove('open');
//   bodyCat.classList.remove('lock');
//});

//function showDiapazon() {
//   rooms.forEach((room) => {
//      let price = Number(room.querySelector('.current-price').textContent);
//      let from = parseInt(costFrom.value);
//      let to = parseInt(costTo.value);
//      if (price < from || price > to) {
//         room.classList.add('hidden');
//      }
//   })
//}


//function filterOf(category, items) {
//   items.forEach((item) => {
//      let squareRoom = item.querySelector('.current-square').textContent;
//      let equipmentRoom = item.dataset.filter;
//      if (category === squareRoom || category === equipmentRoom) {
//         item.classList.add('hidden');
//      }
//   });
//}

//function filterOn() {
//   rooms.forEach((room) => {
//      room.classList.remove('hidden');
//   })
//}


//function useFilter() {
//   frmFilter.forEach((check) => {
//      if (check.checked == false) {
//         const currentCategory = check.dataset.filter;
//         filterOf(currentCategory, rooms);
//      }
//   });
//}



//btnApply.addEventListener('click', function (e) {
//   e.preventDefault();
//   filterOn();
//   showDiapazon();
//   useFilter();
//   catalogFilter.classList.remove('open');
//   bodyCat.classList.remove('lock');
//})
//btnDiscard.addEventListener('click', function (e) {
//   e.preventDefault();
//   frmFilter.forEach((check) => {
//      check.checked = true;
//   });
//   costFrom.value = '100';
//   costTo.value = '600';

//})

////Select sorting =================================
//const select = document.forms.slct.square;
//select.onchange = function() {
//if (select.value == 'squareDown' || select.value == 'priceDown') {
//   rooms.forEach((room) => {
//      let priceRoom = room.querySelector('.current-price').textContent;
//      room.style.order = -priceRoom;
      
//   });
//} else {
//   rooms.forEach((room) => {
//      let priceRoom = room.querySelector('.current-price').textContent;
//      room.style.order = priceRoom;
      
//   })
//}
//}
// Slider pictures in Superlux room

//const btnPreviews = document.querySelectorAll('.button btn__slider');
//const pictures = document.querySelectorAll('.card-room__slider');

//function hide () {
//   pictures.forEach((picture)  => {
//      picture.classList.add('hidden');
//   })
//}

//btnPreviews.forEach((btn) => {
//   btn.addEventListener('click', function(e) {
//      e.preventDefault();
//      hide();
//      console.log('hello');
//      let index = btnPreviews.indexOf(btn) + 1;
//      pictures[index].classList.remove('hidden');

//   })
//})
