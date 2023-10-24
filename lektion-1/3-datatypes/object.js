/* 
  OBJECT
  Innehåller ett eller flera värden

  kerivs som key:value par

  JSON (JavaScript Object Notation)

  JS Objekt
  const person = {
    firstName: 'Joakim',
    lastName: 'Lindh'
  }

  JSON Object
  {
    "firstName": "Joakim",
    "lastName": "Lindh"
  }
  
  
*/


const user = {
  firstName: 'Joakim',
  lastName: 'Llindh',
  age: 36,
  address: {
    street: 'gatan',
    nr: 12,
    postalCode: '72345',
    city: 'Västerås'
  },
  isValidated: true,
  phoneNumbers: [
    '076-098765',
    '070-123456'
  ]
}


// console.log(user.address.city)
// console.log(user['age'])


// user = {
//   firstName: 'Joakim',
//   lastName: 'Llindh',
//   age: 36,
//   address: {
//     street: 'gatan',
//     nr: 12,
//     postalCode: '72345',
//     city: 'Västerås'
//   },
//   isValidated: true,
//   phoneNumbers: [
//     '076-098765',
//     '070-123456'
//   ]
// }

user.firstName = 'Nisse'
user.email = 'joakim@mail.com'


// konvertera till JSON
let json = JSON.stringify(user)
// console.log(json)

// konvertera från JSON till JS
let js = JSON.parse(json)
// console.log(js)



// Destructure
// const firstName = user.firstName
// const lastName = user.lastName

const { firstName, lastName } = user

console.log(`Användaren heter ${firstName} ${lastName} och bor i ${user.address.city}`)