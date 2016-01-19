(function ($) {
  $('.dropdown').each(function () {
    var $this = $(this);
    var $selectedText = $this.find('.selected');

    $this.find('li').click(function () {
      console.log($(this).children('.text').text());
      $selectedText.text($(this).children('.text').text());
    })
  })
})(jQuery);
