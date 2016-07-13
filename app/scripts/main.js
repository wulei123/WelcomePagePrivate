//console.log('\'Allo \'Allo!');
$(document).ready(function () {



  $('.moblie-menu').on('click',function () {
    $('.blurBG').css('display','block');
    $('.header').addClass('header-active');
    setTimeout(function () {
      $('.blurBG').addClass('blurBG-active');
    },2);


  })




$('.blurBG').on('click',function () {
  $('.blurBG').removeClass('blurBG-active');
  setTimeout(function () {
    $('.blurBG').css('display','none');
  },400);
  $('.header').removeClass('header-active');
})
})
