$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 170) {
      $('#MainNav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#MainNav').removeClass('scrolled-nav');
    } 
    
  }); 
  
});