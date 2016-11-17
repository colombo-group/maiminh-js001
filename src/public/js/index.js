var txt = '';
var lines;
$(document).ready(function () {
  /**
   * move element by mouse
   */
  $('#mark').sortable();
  $('.order').click(function () {
    /**
     * Order list.
     */
    $("#mark li").sort(asc_sort).appendTo('#mark');
    function asc_sort(a, b) {
      return ($(b).text()) < ($(a).text()) ? 1 : -1;
    }
  });

  $('.import').click(function () {
    /**
     * Import list
     */
    lines = $('textarea').val().split('\n');
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].trim() != '') {
        txt = '<li>' + lines[i] + '</li>';
        $('.display ul').append(txt);
      }
    }
    //empty textarea
    $('.textbox').val('');
  });
  $('.import-top').click(function () {
    /**
     * Import to top list
     */
    if (txt != '') {
      txt = '';
    }
    lines = $('textarea').val().split('\n');
    for (var i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim() != '') {
        txt = '<li>' + lines[i] + '</li>';
        $('.display ul').prepend(txt);
      }
    }
    //empty textarea
    $('.textbox').val('');
  });

  $('.delete').click(function () {
    /**
     * Remove last-child element
     */
    $("#mark li:last-child").remove();
  });
  $('.display #mark').on("click", "li", function () {
    /**
     * select once list
     */
    $(this).addClass('disappear');
  });
  $('.display #mark').on("dblclick", "li", function () {
    /**
     * remove class have recently selected
     */
    $(this).removeClass('disappear');
  });
  $('.export ').click(function () {
    /**
     * export all list to radio button.
     */
    //export list is selected
    $("#mark li.disappear").appendTo(".right-bottom form ul");
    $('<input type="radio" name="select" class="ll"/>').prependTo(".right-bottom form ul li.disappear");
    $(".right-bottom form ul li").removeClass("disappear");
    $(".right-bottom form ul li").addClass("sl");
  });
  $('.right-bottom .exported').on("click", "li.sl", function () {
    /**
     * remove lists are selected in list table
     */
    $(this).remove();
  });
  $('.export-all').click(function () {
    /**
     * Export all list and delete list table
     */
    $("#mark li").appendTo(".right-bottom form ul");
    $(".right-bottom form ul li").addClass("disappear");
    $('<input type="radio" name="select" class="ll"/>').prependTo(".right-bottom form ul li.disappear");
    $(".right-bottom form ul li").removeClass("disappear");
    $(".right-bottom form ul li").addClass("sl");
//    }
  });
    $('.delete-sl').click(function () {
    /**
     * Remove last-child element
     */
    $("#mark li.disappear").remove();
  });
});