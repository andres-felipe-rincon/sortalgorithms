$("nav").click(function () {
  $(this).toggleClass("active");
});

$('.card').hover(function() {
  $(this).find('.description').stop().animate({
    height: "toggle",
    opacity: "toggle"
  }, 300);
});

$('.more-info').click(function(){
  $(".profile-card").toggleClass('flip');
  $('#arrow').remove();
});

$('#background').click(function(){
  $('.profile-card').removeClass('flip');
});
