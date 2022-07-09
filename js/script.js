$(function(){  
    $('.main_banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        arrows: true,
        fade: true,
        nextArrow: '<i class="fa-solid fa-circle-arrow-left next_arrow"></i>',
        prevArrow: '<i class="fa-solid fa-circle-arrow-right prev_arrow"></i>',
      });

      $('.main_service_part').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        arrows: true,
        vertical: true,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<i class="fa-solid fa-angle-up top_arrow"></i>',
        nextArrow: '<i class="fa-solid fa-angle-down bottom_arrow"></i>',

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              dots: false,
              vertical: true,
              centerMode: false,
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              autoplay: false,
              dots: false,
              vertical: true,
              centerMode: false,
            }
          },

          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              autoplay: true,
              dots: false,
              vertical: true,
              centerMode: false,
              autoplaySpeed: 2200,
            }
          },
        ]
      });

      $('.test_all_text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        vertical: true,
        asNavFor: '.test_all_img',

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
              autoplaySpeed: 2200,
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
              autoplaySpeed: 2200,
            }
          },

          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: true,
              autoplaySpeed: 2200,
            }
          },

        ]
      });

      $('.test_all_img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        vertical: true,
        prevArrow: '<i class="fa-solid fa-angle-up test_up"></i>',
        nextArrow: '<i class="fa-solid fa-angle-down test_down"></i>',
        centerMode: true,
        centerPadding: '0px',
        asNavFor: '.test_all_text',

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
              autoplaySpeed: 2200,
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
              autoplaySpeed: 2200,
            }
          },

          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: true,
              autoplaySpeed: 2200,
            }
          },
          
        ]
      });

      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
      
      $('.all_team_part').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplaySpeed: 2200,
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplaySpeed: 2200,
            }
          },

          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplaySpeed: 2200,
            }
          },

          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplaySpeed: 1500,
            }
          },

          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplaySpeed: 1500,
            }
          },

        ]
      });

      $('.pricing_part').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplaySpeed: 2200,
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplaySpeed: 2200,
            }
          },

          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplaySpeed: 2200,
            }
          },

          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              autoplaySpeed: 1500,
            }
          },

        ]
      });

      $('.counter_rotate').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: true,
              autoplaySpeed: 2200,
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: true,
              autoplaySpeed: 2500,
            }
          },

          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
              autoplaySpeed: 2000,
            }
          },

          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
              autoplaySpeed: 2000,
            }
          },

          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
              autoplaySpeed: 1500,
            }
          },

        ]
      });

      $('.partner_rotate').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,

        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: true,
              autoplay: false,
            }
          },

          {
            breakpoint: 768,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: true,
              autoplay: false,
            }
          },

          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: true,
              autoplay: true,
            }
          },

          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              vertical: false,
              autoplay: true,
            }
          },
        ]
      });

      $(".show").on("click", function(){
        $(".slider").css("right", "0px");
      })

      $(".hide").on("click", function(){
        $(".slider").css('right', '-100%');
      });

      new VenoBox({
        selector: '.my-image-links',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'swing',
    });

});


var navoff = $(".navbar").offset().top;

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > navoff){
    $(".navbar").addClass("menu_fixed");
  }

  else{
    $(".navbar").removeClass("menu_fixed");
  }
  
});