const inputValidate = document.querySelectorAll('.js-input-validate');

const inputData = () => {
  inputValidate.forEach(element => {
    if(element.classList.contains('text-field__input--error')) {
      element.classList.remove('text-field__input--error');
    }

    if(element.classList.contains('text-field__input--email')) {
      element.classList.remove('text-field__input--error-email');
    }

    if(element.classList.contains('text-field__input--phone')) {
      element.classList.remove('text-field__input--error-phone');
    }
  });
}

const sendForm = (evt) => {
  evt.preventDefault();
  inputValidate.forEach(element => {
    if (!element.value) {
      element.classList.add('text-field__input--error');

      if(element.classList.contains('text-field__input--email')) {
        element.classList.add('text-field__input--error-email');
      }

      if(element.classList.contains('text-field__input--phone')) {
        element.classList.add('text-field__input--error-phone');
      }
    } else {
      alert('Форма успешно отправлена!');
    }
  });
}

export { inputValidate, inputData, sendForm };
