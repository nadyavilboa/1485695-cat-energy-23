const menu = document.querySelector('.main-nav');
const toggle = document.querySelector('.page-header__toggle');

const toggleMenu = () => {
  if(menu.classList.contains('display-none')) {
    menu.classList.remove('display-none');
    toggle.classList.remove('page--header__toggle--open')
    toggle.classList.add('page--header__toggle--close');
  } else {
    menu.classList.add('display-none');
    toggle.classList.remove('page--header__toggle--close')
    toggle.classList.add('page--header__toggle--open');
  }
}

export { toggleMenu };
