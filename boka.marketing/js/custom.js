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
  var owl = $('.gallerySlider');

  owl.owlCarousel({
    center: true,
    items: 2,
    loop: false,
    margin: 10,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 2, margin: 20 },
      600: { items: 2 },
      990: { items: 2 },
      1300: { items: 4 }
    }
  });

  $('.gallerySlider').on('click', '.owl-item', function () {
      var index = $(this).index();
      owl.trigger('to.owl.carousel', [index, 400, true]);
  });

});