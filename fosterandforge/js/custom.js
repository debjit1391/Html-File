$('.slimmenu').slimmenu(
{
    resizeWidth: '991',
    collapserTitle: '',
    animSpeed:'medium',
    indentChildren: true,
    childrenIndenter: '&raquo;'
});




$('.slider').owlCarousel({
    items:1,
    loop:true,
    lazyLoad:true,
    margin:0,
    dots:true,
    nav: false,
    navText:["<div class='nav-btn prev-slide'>Prev</div>","<div class='nav-btn next-slide'>Next</div>"],
    autoplay: true,
    autoplayTimeout:8000,
    autoplaySpeed : 3000,
    smartSpeed: 2000,
    
})
$('.slider2').owlCarousel({
    items:1,
    loop:true,
    lazyLoad:true,
    margin:0,
    dots:false,
    nav: true,
    navText:["<div class='fa fa-angle-left'></div>","<div class='fa fa-angle-right'></div>"],
    autoplay: true,
    autoplayTimeout:8000,
    autoplaySpeed : 3000,
    smartSpeed: 2000,
    
})

$('.slider1').owlCarousel({
    items:3,
    loop:true,
    lazyLoad:true,
    margin:35,
    animateOut: 'fadeOut',
    dots:false,
    nav: true,
    navText:["<div class='fa fa-angle-left'></div>","<div class='fa fa-angle-right'></div>"],
    autoplay: true,
    autoplayTimeout:8000,
    autoplaySpeed : 3000,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
    
})
$('.testi-slider').owlCarousel({
    items:3,
    loop:true,
    lazyLoad:true,
    margin:15,
    animateOut: 'fadeOut',
    dots:false,
    nav: true,
    navText:["<div class='nav-btn prev-slide'>Prev</div>","<div class='nav-btn next-slide'>Next</div>"],
    autoplay: true,
    autoplayTimeout:8000,
    autoplaySpeed : 3000,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 2
      },
      992: {
        items: 1
      },
      1200: {
        items: 3
      }
    }
    
})
$(document).ready(function(){
  $("a.scroll-btn").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({

        scrollTop: $(hash).offset().top -200

      }, 800, function(){

   

      });

    } 

  });

});

$(window).on('load', function () {
      $('.banner-lft .sp1').addClass('wow slideInHeight');
 });