const menu = document.querySelector('.main-nav');
const buttonToggler = document.querySelector('.page-header__toggler');

buttonToggler.addEventListener('click', () => {
  if(menu.classList.contains('visually-hidden')) {
    menu.classList.remove('visually-hidden');
  } else {
    menu.classList.add('visually-hidden');
  }
});
