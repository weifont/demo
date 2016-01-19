(function ($) {
  $('.tabbed').each(function () {
    var $tabbed = $(this);

    var $targets = $tabbed.find('.tab-content');
    var $tabItems = $tabbed.find('.tab-item');

    var selectContent = function (name) {  
      $targets.each(function () {
        var $this = $(this);
        if ($this.data('tab-name') === name) {
          $this.show();
        }
        else {
          $this.hide();
        }
      }); 
    };

    var onTabClick = function () {
      var $tabItem = $(this);

      if (!$tabItem.hasClass('tab-selected')) {
        $tabItems.removeClass('tab-selected');
        $tabItem.addClass('tab-selected');
        selectContent($tabItem.data('tab-for'));
      }
    };

    $tabItems.click(onTabClick);
    selectContent($tabItems.filter('.tab-selected').data('tab-for'));
  });
})(jQuery);
