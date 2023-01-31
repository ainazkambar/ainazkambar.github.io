export function formValidating() {
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
}