var Clicked = false;

$( document ).ready( function() {
  $('button').click(function(){
    if (Clicked == true){
      $("div.menu").animate({
        opacity: '0'
      });
      Clicked = false;
    }
    else {
      $("div.menu").animate({
        opacity: '1'
      });
      Clicked = true;
    }
  });
});
