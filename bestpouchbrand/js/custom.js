$('.slimmenu').slimmenu(
{
    resizeWidth: '991',
    collapserTitle: '',
    animSpeed:'medium',
    indentChildren: true,
    childrenIndenter: '&raquo;'
});




  $(document).ready(function() {
  var owl = $('.testimonial-slider');
  owl.owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:15,
    dots:false,
    autoplay: true,
   autoplayTimeout: 5000,
   autoplaySpeed: 3000,
   smartSpeed: 2000,
   autoplayHoverPause:true,
    nav: true,
    navText: ["<img src='images/left-nav.png'>","<img src='images/right-nav.png'>"],
    responsive:{
      0: {
         items: 1,
         margin:40,
      },
        600:{
            items:1
        }
    }
  })
})

// $(document).ready(function () {
//     var owl = $('.client-slider');
//     owl.owlCarousel({
//         items: 8,
//         loop: true,
//         margin: 30,
//         autoplay: true,
//         autoplayTimeout: 0,
//         autoplaySpeed: 3000,
//         autoplayHoverPause: false

//     });

// });
$(document).ready(function() {
  var owl = $('.client-slider');
  owl.owlCarousel({
    center: false,
    items:8,
    loop:true,
    margin:15,
    dots:false,
    autoplay: true,
   autoplayTimeout: 3000,
   autoplaySpeed: 3000,
   smartSpeed: 2000,
   autoplayHoverPause:true,
    nav: false,
    navText: ["<img src='images/left-nav.png'>","<img src='images/right-nav.png'>"],
    responsive:{
      0: {
         items: 2,
         margin:40,
      },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
  })
})




    $('.openNavc').on('click', function() {
      $('.contactmob-overlay').css("width", "100%");
  });
    $('#closeNavc').on('click', function() {
    $('#myNav').css("width", "0%");
    $('.contactmob-overlay').css("width", "0%");
});






  var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
