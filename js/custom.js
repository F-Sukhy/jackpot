$(function(){

  var backToTop = $('.back-to-top');

 // window scroll--
  $(window) .scroll(function(){
    var scrolling = $(this).scrollTop(); 

    if(scrolling > 600){
      backToTop.fadeIn();
    }
    else{
      backToTop.fadeOut();
    }

    if(scrolling > 200){
      $('.navbar').addClass('fixed-nav');
    }
    else{
      $('.navbar').removeClass('fixed-nav');
    }

  });



  backToTop.click(function(){
    $('html,body').animate({
      scrollTop:0,
    },1500);   


});

//====countdown==========

  $('#count').countdown('2022/01/01', function(event) {    
    
    $(this).html(event.strftime('<div><span>%H</span><span>Hours</span></div><div><span>%M</span><span>Mins</span></div><div><span>%S</span><span>Secs</span></div>'));
    
  });

});









//smooth scroll =================
$('.navbar .navbar-nav .nav-link').on('click', function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          html_body.animate({
              scrollTop: target.offset().top - 0
          }, 2000);
          return false;
      }
  }
});



// $(window).load(function(){
//   $('.preloader').delay(2000).fadeOut();
// });


