export function carouselInner() {
    $(document).ready(function(){
        $('.carousel__inner').slick({
          dots: false,
          speed: 1000,
          adaptiveHeight: true,
          autoplay: true,
          autplaySpeed: 2000,
          prevArrow: '<button type="button" class="slick-prev"><img src="../img/carousel/chevron-left-solid.webp"></button>',
          nextArrow: '<button type="button" class="slick-next"><img src="../img/carousel/chevron-right-solid.webp"></button>',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            }
          ]
        });
      });
}