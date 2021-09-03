const menu = document.querySelector('.main-nav');
const toggle = document.querySelector('.page-header__toggle');

const toggleMenu = () => {
  if(menu.classList.contains('main-nav--script-close')) {
    menu.classList.remove('main-nav--script-close');
    menu.classList.add('main-nav--script-open');
    toggle.classList.remove('page--header__toggle--open');
    toggle.classList.add('page--header__toggle--close');
  } else {
    menu.classList.remove('main-nav--script-open');
    menu.classList.add('main-nav--script-close');
    toggle.classList.remove('page--header__toggle--close')
    toggle.classList.add('page--header__toggle--open');
  }
}

export { menu, toggleMenu };
