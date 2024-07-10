$(document).ready(function(){
  $('.reviews-slider').slick({
    arrows: true, 
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true;
    // autoplaySpeed: 3000;
    // pauseOnFocus: true;
    // pauseOnHover: true;
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      }
    ],

  });
});