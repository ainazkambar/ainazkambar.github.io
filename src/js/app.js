import * as flsFunctions from "./modules/functions.js";

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

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut();
    });

    $('.button_mini').each(function(i) {
      $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn();
      })
    });

    //Validation
    function validateForms(form) {
      $(form).validate({
        rules: {
          name: "required",
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Пожалуйста, введите свое имя.",
          phone: "Пожалуйста введите свой номер телефона.",
          email: {
            required: "Пожалуйста, введите свою почту.",
            email: "Неправильно введен адрес почты"
          }
        }
      });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");
  });