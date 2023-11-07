const regForm = document.querySelector('#regForm')

regForm.addEventListener('submit', e => {
  e.preventDefault()

  const errors = []

  // validateFirstName()
  // validateLastName()

  errors.push(validateText('firstName'))
  errors.push(validateText('lastName'))


  // if(firstName.value === '' || firstName.value.length <= 2 || lastName.value === '' || lastName.value.length <= 2) {
  //   console.log('errors in form')
  //   return
  // }



  // if(validateText('firstName') && validateText('lastName')) {

  //   const user = {
  //     firstName: regForm.firstName.value,
  //     lastName: regForm.lastName.value,
  //   }
  //   console.log(user)
  // }



  console.log(errors)

  if(errors.includes(false)) {
    console.log('form errors')
    return
  }
  
  const user = {
    firstName: regForm.firstName.value,
    lastName: regForm.lastName.value,
  }
  console.log(user)

})


function validateText(id) {
  const input = document.getElementById(id)
  const errorElement = document.getElementById(id + '-error')


  if(input.value.trim() === '') {
    errorElement.textContent = 'This field is required'
    return false
  }
  else if(input.value.trim().length <= 2) {
    errorElement.textContent = 'this needs to be longer then 2 characters'
    return false
  }
  else {
    errorElement.textContent = ''
    return true
  }
}










function validateFirstName() {
  const firstName = document.querySelector('#firstName')
  const firstNameError = document.querySelector('#firstName-error')

  if(firstName.value.trim() === '') {
    firstNameError.textContent = 'This field is required'
  }
  else if(firstName.value.trim().length <= 2) {
    firstNameError.textContent = 'this needs to be longer then 2 characters'
  }
  else {
    firstNameError.textContent = ''
  }
}


function validateLastName() {
  const lastName = document.querySelector('#lastName')
  const lastNameError = document.querySelector('#lastName-error')

  if(lastName.value.trim() === '') {
    lastNameError.textContent = 'This field is required'
  }
  else if(lastName.value.trim().length <= 2) {
    lastNameError.textContent = 'this needs to be longer then 2 characters'
  }
  else {
    lastNameError.textContent = ''
  }
}


// try {
//   throw new Error('nått gick fel')


// } catch (error) {
//   console.log(error.message)
// }