document.addEventListener('click', (event) => {
  if (event.target.classList.contains('questions__dropdown-btn')) {
    const tempVar = event.target.querySelector('.questions__dropdown-btn img').parentElement.parentElement.parentElement
    tempVar.classList.toggle('questions__dropdown--opened')
  } else if (event.target.parentElement.classList.contains('questions__dropdown-btn')) {
    event.target.parentElement.parentElement.parentElement.classList.toggle('questions__dropdown--opened')
  }
})