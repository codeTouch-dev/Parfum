document.addEventListener('click', (event) => {
  if (event.target.classList.contains('product__dropdown-btn')) {
    const tempVar = event.target.querySelector('.product__dropdown-btn img').parentElement.parentElement.parentElement
    tempVar.classList.toggle('product__dropdown--opened')
  } else if (event.target.parentElement.classList.contains('product__dropdown-btn')) {
    event.target.parentElement.parentElement.parentElement.classList.toggle('product__dropdown--opened')
  }
})