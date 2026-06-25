$(document).ready(function () {
      $('.slimmenu').slimmenu({
        resizeWidth: '991',
        collapserTitle: 'Menu',
        animSpeed: 'medium',
        easingEffect: null,
        indentChildren: false,
        childrenIndenter: '&nbsp;'
      });
    });





$(document).ready(function() {
  var owl = $('.testimonialSlider');
  owl.owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:15,
    dots:true,
    autoplay: true,
     autoplayTimeout: 5000,
     autoplaySpeed: 3000,
     smartSpeed: 2000,
     autoplayHoverPause:true,
    nav: false,
  })
})



$(document).ready(function() {
  var owl = $('.blogSlider');
  owl.owlCarousel({
    items:3,
    loop:false,
    margin:30,
    dots:false,
    autoplay: true,
   autoplayTimeout: 5000,
   autoplaySpeed: 3000,
   smartSpeed: 2000,
   autoplayHoverPause:true,
    nav: false,
  
    responsive:{
      0: {
         items: 1,
         margin:10,
          nav: false,
          dots:true,
      },
        600:{
            items:2,
             nav: false,
             dots:true,
        },
        1000:{
            items:3,
             nav: false,
             dots:false,
        }
    }
  })
})


window.onscroll = function() {myFunction()};

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }

 window.addEventListener("load", () => {
    gsap.to(".bannerCnt .bannerCntLft h1", {
      y: 0,
      opacity: 1,
      duration: 1.1,
      ease: "power4.out"
    });
    gsap.to(".innerBnrCnt h1", {
      y: 0,
      opacity: 1,
      duration: 1.1,
      ease: "power4.out"
    });
    gsap.to(".bannerCnt .btnList", {
      y: 0,
      opacity: 1,
      duration: 1.8,
      ease: "power4.out"
    });
    gsap.to(".bannerCnt p", {
      y: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power4.out"
    });
    gsap.to(".innerBnrCnt p", {
      y: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power4.out"
    });
  });



$(document).ready(function () {
  if ($(window).width() < 768) {
    $(".mobile-carousel").owlCarousel({
      items: 2,
      loop: true,
      margin: 10,
      dots: true,
      nav: false,
      autoplay: true,
       autoplayTimeout: 5000,
       autoplaySpeed: 3000,
       smartSpeed: 2000,
       autoplayHoverPause:true,
    });
  }
});

$(document).ready(function () {
  if ($(window).width() < 575) {
    $(".service-mobile-carousel").owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
      autoplay: true,
       autoplayTimeout: 5000,
       autoplaySpeed: 3000,
       smartSpeed: 2000,
       autoplayHoverPause:true,
    });
  }
});