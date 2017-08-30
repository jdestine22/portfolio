$(document).ready(function(){

$("#aboutMe").on("click", function(){
  $('html , body').animate({
    scrollTop: $('#contactMe').offset().top
  }, 1250);

})

})
