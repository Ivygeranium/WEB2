$(window).on('scroll',function(e){
  var current = $(window).scrollTop();

  if (current >= 900){
    $('header').css('backgroundColor', '#EFB730');
  }
  else {
    $('header').css('backgroundColor', 'rgba(250, 150, 1, 0)');
  }
});
