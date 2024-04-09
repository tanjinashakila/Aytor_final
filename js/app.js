$(function(){
    // banner slider
    $('.bannerSlider').slick({
        arrows:false,
        dots: true,
        dotsClass:"bannerDots container"

    });
    $('.bannerSliderSm').slick({
        arrows:false,
    });

    // bootstrap tooltip

    const tooltipTriggerList = document.querySelectorAll(
        '[data-bs-toggle="tooltip"]'
      );
      const tooltipList = [...tooltipTriggerList].map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
      );
    //   product slider
    $(".productSlider").slick({
        slidesToShow: 4,
        prevArrow: ".leftArrow",
        nextArrow: ".rightArrow",
        responsive: [
         
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        
        ]
      });
// flash sale
$(".timer").countdown("2024/05/01", function (event) {
    
  $(".days").html(event.strftime("%D"));
  $(".hours").html(event.strftime("%H"));
  $(".mins").html(event.strftime("%M"));
  $(".secs").html(event.strftime("%S"));
});

// flash sale slider
$(".flashSaleSlider").slick({
  slidesToShow:2,
  arrows: false,
  dots: true,
  dotsClass:"flashbannerDots ",
    responsive: [
         
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
});




// latest news
$(".latestNewsslider").slick({
  slidesToShow:4,
  arrows: false,
  dots: true,
  dotsClass:"flashbannerDots ",
    responsive: [
         
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    
    ]
});

// about page start
// counter up
// $('.counter').counterUp({
//   delay: 10,
//   time: 1000
// });
// for reviw slider
$('.reviewSlider').slick({
  arrows:false,
  dots: true,
  dotsClass:"bannerDots"

});
// for instagram pictures
$('.instagramPicSlider').slick({
  slidesToShow:6,
  arrows:false,
  dots: true,
  dotsClass:"bannerDots",
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },  
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
});
// shop page start
// for shopProductSlider
$('.shopProductSlider').slick({
  rows: 3,
    slidesPerRow: 4,
    prevArrow: ".sliderleftArrow",
    nextArrow: ".sliderrightArrow",
  dots: true,
  dotsClass:"shopProductDots",
  responsive: [
 
 
    {
        breakpoint: 992,
        settings: {
            slidesPerRow: 3,
            rows: 2
        }
    },
    {
            breakpoint: 768,
      settings: {
          slidesPerRow: 2,
          rows: 3
      }
      },
      {
        breakpoint: 450,
        settings: {
            slidesPerRow: 1,
            rows: 3
        }
    }
  
]
});

// for feature page
// for productDetailsSlider
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  prevArrow: ".leftArrow",
  nextArrow: ".rightArrow",
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});
// increment
var counter = 0;
$(document).ready(function() { 
  $("#increment").click(function() { 
    counter++; 
    $("#counter").text(counter); 
  }); 
   
  $("#decrement").click(function() { 
    counter--; 
    $("#counter").text(counter); 
  }); 
}); 

// feature page end


})
// videopromo(for video paly)
new VenoBox({
  selector: '.venobox'
});

// counter up
let counters = document.querySelectorAll('.counter');
counters.forEach(counter => {

    let ending = counter.dataset.ending;
    let count = 0;
    let duration =  ending / 100000000
    let counting = setInterval(()=>{
        count++;
        counter.innerHTML  = count

        if(count >= ending){
            clearInterval(counting)
        }

    }, duration)


})