// console.log(document.forms)
const regForm = document.querySelector('#regForm')
// console.log(regForm[0])

regForm.addEventListener('submit', e => {
  e.preventDefault()

  const firstNameValue = regForm[0].value
  const lastNameValue = regForm.lastName.value
  const addressValue = document.querySelector('#address').value
  const roleValue = e.currentTarget['role'].value

  const user = {
    firstName: firstNameValue,
    lastName: lastNameValue,
    address: addressValue,
    role: roleValue,
  }

  const terms = e.currentTarget.terms
  if(!terms.checked) return

  console.log(user)
})