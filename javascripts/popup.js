(function ($) {

  $(".popup-button").click(function() {
    $(document.body).addClass('show-popup');
    var popupName = $(this).data('popup-for');
    var $targetWindow = $(".popup-window").filter(function () {
      return $(this).data('popup-name') === popupName;
    });
    $targetWindow.css('display', 'flex');

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {//WTF.....
        $targetWindow.addClass('show');
      });
    });
  });

  $(".popup-close-button").click(function () {
    $(document.body).removeClass('show-popup');
    var $targetWindow = $(this).closest(".popup-window")
    $targetWindow.removeClass('show');
    $targetWindow.css('display', 'none');
  });
  
})(jQuery);
