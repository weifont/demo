(function ($) {

  $('.collection-editor').each(function () {
    var $editor = $(this);

    var sortable = new Sortable(this.querySelector('.collection-list'), {
      animation: 150,
      draggable: "li",
      ghostClass: "sortable-ghost",
      disabled: true
    });

    var $titleButtons = $editor.find('.title button');
    var $reorderButton = $titleButtons.filter('.reorder-button');
    var $addButton = $titleButtons.filter('.reorder-button');

    $reorderButton.click(function () {
      if ($reorderButton.hasClass('active')) {
        $reorderButton.removeClass('active');
        $editor.removeClass('reordering');
        sortable.option("disabled", true);
      }
      else {
        $reorderButton.addClass('active');
        $editor.addClass('reordering');
        sortable.option("disabled", false);
      }
    });

    var enableEditing = function ($item) {
      $editor.addClass('editing');
      $item.addClass('editing-item');
    };
    var disableEditing = function ($item) {
      $editor.removeClass('editing');
      $item.removeClass('editing-item');
    };

    $editor.find('.rename-button').click(function() {
      var $item = $(this).closest('li');
      enableEditing($item);
    });

    $editor.find('.delete-button').click(function() {
      var $item = $(this).closest('li');
      $item.remove();
    });

    $editor.find('.ok-button').click(function() {
      var $item = $(this).closest('li');
      $item.find('.name').text($item.find('.name-editor').val());
      disableEditing($item);
    });

    $editor.find('.cancel-button').click(function() {
      var $item = $(this).closest('li');
      $item.find('.name').text($item.find('.name-editor').val());
      disableEditing($item);
    });

  });

})(jQuery);
