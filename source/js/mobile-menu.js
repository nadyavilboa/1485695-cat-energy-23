const menu = document.querySelector('.main-nav');

const toggleMenu = () => {
  if(menu.classList.contains('display-none')) {
    menu.classList.remove('display-none');
  } else {
    menu.classList.add('display-none');
  }
}

export { toggleMenu };
