const header = document.querySelector('.header')

document.addEventListener('click', (event) => {
  if (event.target.parentElement.classList.contains('header__notification-close-btn')) {
    header.classList.add('header--notification-hidden')
  }
})