
$(document).ready(function(){
    $('.autoplay').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        arrows:true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
      });

      
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 4,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    });

    //EFEITO DO HOVER DA FAIXA
    // $('.teste').hover(function(){
    //     $('.arrow').toggleClass("actAr");
    // });

    $('.teste').hover(function(){
        $(this).parent().find('.arrow').toggleClass("actAr");
    });   
});