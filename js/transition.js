$(window).scroll(function() {     
  var scroll = $(window).scrollTop();
  if (scroll > 1350) {
      $("#container").addClass("changeColor");
  }
  if (scroll > 1700 ) {
      $("#container").removeClass("changeColor");
  }
  if (scroll < 1350 ) {
    $("#container").removeClass("changeColor");
}
}); 

$(window).on("overlay",function(){
    $(".overlay").fadeOut("slow");
  });