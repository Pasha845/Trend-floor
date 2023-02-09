var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);
const validation = new JustValidate('.advice__form', {
  errorFieldCssClass: "is-invalid",
  successFieldCssClass: "is-valid",
  errorLabelStyle: {
    left: "18px",
    top: "-21px",
    fontSize: "12px",
    color: '#D11616'
  }
});

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя дожно состоять минимум из 3 символов'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя больше 30 символов'
    },
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат'
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Недопустимый формат'
    }
  ])
  .onSuccess(() => {
    document.getElementById('pop-up').style.visibility = "visible";
    document.getElementById('pop-up').style.opacity = 1;
  })
