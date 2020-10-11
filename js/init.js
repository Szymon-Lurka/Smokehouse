(function ($) {
  $(function () {

    $('.sidenav').sidenav();

  });
})(jQuery);
$(document).ready(function () {
  $('.carousel').carousel();
  $('.collapsible').collapsible();
  $('.modal').modal();
  $('.preloader-background').delay(1700).fadeOut('slow');
  $('.preloader-wrapper')
    .delay(1700)
    .fadeOut();
});