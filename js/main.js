
$(function(){
  $('.top-slider').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false 
        }
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          arrows: false, 
        }
      },
      
    ]
  });
});