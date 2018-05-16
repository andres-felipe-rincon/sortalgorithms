$("nav").click(function () {
  $(this).toggleClass("active");
});

$(window).load(function() {
  $('.card').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});