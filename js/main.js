$("nav").click(function () {
  $(this).toggleClass("active");
});

$('.card').hover(function() {
  $(this).find('.description').stop().animate({
    height: "toggle",
    opacity: "toggle"
  }, 300);
});
