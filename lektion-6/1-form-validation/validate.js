export const validateForm = (regForm) => {
  const errors = []
  for(let i = 0; i < regForm.length; i++) {
    errors[i] = validate(regForm[i])
  }
  if(errors.includes(false)) {
    return false
  }
  return true
}

function validate(input) {
  switch(input.type) {
    case 'text': return validateText(input)
    case 'email': return validateEmail(input)
    // case 'password': return input.id === 'password' ? validatePassword(input) : samePassword(password, repeatPassword)
    case 'checkbox': return validateCheck(input)
    default:
      break;
  }
}


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

function validateText(input, min) {
  if(input.value.trim() === ''){
    setError(input, 'This field can\'t be empty')
    return false
  }
  else if(input.value.trim().length < 2) {
    setError(input, 'this must be atleast 2 chars long')
    return false
  }

  setSuccess(input)
  return true
}


function validateEmail(email) {
  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(email.value.trim().length <= 0) {
    setError(email, 'You need to enter an email address')
    return false
  }
  else if(!regEx.test(email.value)) {
    setError(email, 'You need to enter a VALID email address')
    return false
  }

  setSuccess(email)
  return true
}


function validatePassword(password) {
  const regEx = /^(?=.*\d).{5,}$/

  if(password.value.trim() === '') {
    setError(password, 'Password can\'t be empty')
    return false
  }
  else if(!regEx.test(password.value)) {
    setError(password, 'The password must contain atleast 5 characters an one number')
    return false
  }

  setSuccess(password)
  return true
}

function samePassword(password, repeatPassword) {
  if(repeatPassword.value.trim() === '') {
    setError(repeatPassword, 'Password can\'t be empty')
    return false
  }
  else if(password.value.trim() !== repeatPassword.value.trim()) {
    setError(repeatPassword, 'Passwords must match!')
    return false
  }

  setSuccess(repeatPassword)
  return true
}

function validateCheck(checkbox) {
  if(!checkbox.checked) {
    setError(checkbox, 'You need to accept the terms to continue')
    return false
  }

  setSuccess(checkbox)
  return true
}