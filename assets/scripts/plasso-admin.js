
/* Smooth Scrolling
---------------------------------------------------------------------------------------------------- */

jQuery(document).ready(function($) {
  $(document).on('click', '#plasso .scroll', function() {
    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 109
    });

    return false;
  });
});