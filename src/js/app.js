import * as flsFunctions from "./modules/functions.js";
import * as carousel from "./modules/carousel.js";

flsFunctions.isWebp();

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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
  });