export function modalWindows() {
  //Открытие окна по клику
  $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn();
  });
  
  //Закрытие окна по клику
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut();
  });
  
  //Кнопка "Купить" в каталоге. Открытие формы заказа по клику.
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn();
    })
  });

  //Маска ввода телефона в форме
  $('input[name=phone]').mask("+7 (999) 999-99-99");

  //Отправка данных на почту
  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return
    };

    $.ajax({
      type: "POST",
      url: "files/mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn();
      $('forms').trigger('reset');
    });
    return false;
  });
};