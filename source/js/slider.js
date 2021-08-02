const imgEarly = document.querySelector('.slider__img--early');
const imgToday = document.querySelector('.slider__img--today');
const buttonEarly = document.querySelector('.slider__button--early');
const buttonToday = document.querySelector('.slider__button--today');

const showEarlyImage = () => {
  imgToday.classList.add('display-none');

  if(imgEarly.classList.contains('display-none')) {
    imgEarly.classList.remove('display-none');
  }

  buttonEarly.setAttribute('disabled','disabled');
  buttonToday.removeAttribute('disabled');
}

const showTodayImage = () => {
  imgEarly.classList.add('display-none');

  if(imgToday.classList.contains('display-none')) {
    imgToday.classList.remove('display-none');
  }

  buttonToday.setAttribute('disabled','disabled');
  buttonEarly.removeAttribute('disabled');
}

const initSlider = () => {
  if(buttonEarly && buttonToday) {
    buttonEarly.setAttribute('disabled','disabled');
    buttonEarly.addEventListener('click', showEarlyImage);
    buttonToday.addEventListener('click', showTodayImage);
  }
}

export { initSlider };
