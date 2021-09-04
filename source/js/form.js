const nameCat = document.querySelector('#cat-name');
const weightCat = document.querySelector('#cat-weight');
const ageCat = document.querySelector('#cat-age');
const userEmail = document.querySelector('#user-email');
const userPhone = document.querySelector('#user-phone');

const inputsImportant = [nameCat, weightCat, userEmail, userPhone];

let isStorageSupport = true;
let storageNameCat = "";
let storageWeightCat = "";
let storageEmail = "";
let storagePhone = "";

try {
  storageNameCat = localStorage.getItem('name');
  storageWeightCat = localStorage.getItem('weight');
  storageEmail = localStorage.getItem('email');
  storagePhone = localStorage.getItem('phone');
} catch (err) {
  isStorageSupport = false;
}

const initialForm = () => {
  if (storageNameCat && storageWeightCat && storageEmail && storagePhone) {
    nameCat.value = storageNameCat;
    weightCat.value = storageWeightCat;
    userEmail.value = storageEmail;
    userPhone.value = storagePhone;
    ageCat.focus();
  } else {
    nameCat.focus();
  }
}

const sendForm = (evt) => {
  evt.preventDefault();
  for(let i = 0; i < inputsImportant.length; i++) {
    if (!inputsImportant[i].value) {
      inputsImportant[i].classList.add('text-field__input--error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', nameCat.value);
        localStorage.setItem('weight', weightCat.value);
        localStorage.setItem('email', userEmail.value);
        localStorage.setItem('email', userEmail.value);
      }
    }
  }
}

export { initialForm, sendForm };
