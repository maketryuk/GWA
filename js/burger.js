$(function() {
  $('.burger').click(function() {
    $('.burger').toggleClass('burger--active');
    $('.nav').toggleClass('nav--active')
    $('body').toggleClass('lock');
  });
});