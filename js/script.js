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