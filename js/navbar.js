window.onscroll = function () {
  var dynbar = $("#dynbar");
  var arrow = $(".arrow");
  var st = $(window).scrollTop();
  var max = $('.parallax').height();

  dynbar.css({'opacity' : (st/max)});
  arrow.css({'opacity' : (1-st/max)});
}
