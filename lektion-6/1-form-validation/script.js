const regForm = document.querySelector('#regForm')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const repeatPassword = document.querySelector('#repeat-password')
const terms = document.querySelector('#terms')


regForm.addEventListener('submit', e => {
  e.preventDefault()

  validateText(firstName)
  validateText(lastName)
  validateEmail(email)
})


function setError(input, message) {
  const parent = input.parentElement;
  parent.classList.add('is-invalid')
  parent.classList.remove('is-valid')
  const errorElement = parent.querySelector('.invalid-input')
  errorElement.innerText = message
}
function setSuccess(input) {
  const parent = input.parentElement;
  parent.classList.remove('is-invalid')
  parent.classList.add('is-valid')
}

function validateText(input) {
  if(input.value.trim() === ''){
    setError(input, 'Name can\'t be empty')
    return
  }
  else if(input.value.trim().length <= 2) {
    setError(input, 'Name must be atleast 2 chars long')
    return
  }

  setSuccess(input)
}


function validateEmail(email) {
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(email.value.trim().length <= 0) {
    setError(email, 'You need to enter an email address')
    return
  }
  else if(!regEx.test(email.value)) {
    setError(email, 'You need to enter a VALID email address')
    return
  }


  setSuccess(email)
}


