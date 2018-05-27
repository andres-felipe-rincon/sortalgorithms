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

function modify_qty(val) {
  var qty = document.getElementById('qty').value;
  var new_qty = parseInt(qty,10) + val;
  
  if (new_qty < 0) {
      new_qty = 0;
  }
  
  document.getElementById('qty').value = new_qty;
  return new_qty;
}
