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
  lastName: 'Lindh',
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


class User {
  constructor(firstName, lastName, email, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.age = age
    this.id = Math.random() * 1001;
    this.fullName = this.firstName + ' ' + this.lastName
    this.loggedIn = false
  }

  login() {
    this.loggedIn = true
  }

  logout() {
    this.loggedIn = false
  }
}


const user2 = new User('Joakim', 'Lindh', 'joakim@mail.com', 36)
const user3 = new User('Jeanette', 'Lindh', 'jeanette@mail.com', 36)

user2.login()
console.log(user2)
// console.log(user3)


class Admin extends User {
  constructor(adminId, firstName, lastName, email, age) {
    super(firstName, lastName, email, age)
    this.adminId = adminId
  }
}

const admin = new Admin(1, 'Hans', 'Mattin-Lassei', 'hans@mail.com', 39)

admin.login()
console.log(admin)