const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 32,
  slidesPerView: 3,
  navigation: {
    nextEl: '.reviews__btn-next',
    prevEl: '.reviews__btn-prev',
  },
  loop: true,
});

const header = document.querySelector('.header')

document.addEventListener('click', (event) =>{
    console.log(event.target);

  if (event.target.parentElement.classList.contains('header__notification-close-btn')){
    header.classList.add('header--notification-hidden')
    
  } else{
    console.log(event.target);
    
  }

})