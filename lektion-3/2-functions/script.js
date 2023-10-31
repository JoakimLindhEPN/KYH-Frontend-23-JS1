// SCOPE


let age = 36; // global scope

{
  let age = 50;
  let fName = 'joakim' // local scope
  // var fName = 'Joakim' // var = global scope
  // console.log('inne i första kodblocket ', age, fName)
  {
    let age = 100
    // console.log('inne i andra kodblocket ', age, fName)
  }
}

// console.log('utanför något block ', age)
{
  let fName = 'Hans'
  // console.log(fName)
}




// FUNCTIONS
// till för att vi ska slippa repetera kod

/* 
Dont
Repeat
Yourself
*/


// Hoisting - hissas till toppen
hej()

// Deklarera en funktion
function hej() {
  // console.log('Hej på dig')
}

// const greet = function() {
  // console.log('Hur är läget?')
// }

// Köra en funktion
// greet()


const test = function() {
  return 'testar 123'
  console.log('test')
}

const test1 = test()

let firstName = 'Hans'


// parameter
const greet = function(name) {
  console.log(`Hej ${name} hur är läget`)
  return `Hej ${name} hur är läget`
}


// const abc = greet('Joakim')
// greet(firstName)
// greet('kjashd')

// console.log(abc)


const getFullName = function(firstName = 'John', lastName = 'Doe') {
  if(typeof firstName !== 'string' || typeof lastName !== 'string') {
    return
  }

  const fullName = `${firstName} ${lastName}`
  // console.log(fullName)
  return fullName
}

const user1 = getFullName('Joakim', 'Lindh')
const user2 = getFullName('Hans', 'Mattin-Lassei')
getFullName('Andersson')
getFullName(null, false)



const add = function(num1 = 0, num2 = 0) {
  if(isNaN(num1) | isNaN(num2)) {
    console.error('du måste skicka in ett nummer i funktionen')
    return 0
  }

  let sum = +num1 + +num2
  return sum
}

let sum = add(5, 7)
// sum = add()
// sum = add(4, 'hej')
sum = add(7, '19')
// console.log(sum)




// ARROW Functions

const calc = (num1, num2) => +num1 + +num2

let summa = calc(2, 2)
// console.log(summa)

// const greet2 = name => `Hej`
const greet2 = () => `Hej`

// console.log(greet2('Joakim'))



let myName = 'Joakim'
let upper = myName.toUpperCase()


//  Om vi ska lägga in en funktion på ett objekt / Klass å använder vi vanliga function()
const user = {
  firstName: 'Joakim',
  lastName: 'Lindh',
  arrow: () => {
    console.log('arrow function ', this)
  },
  regular: function() {
    console.log('regular function ', this)
  },
  fullName() {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

// user.fullName()



// CALLBACK FUNCTIONS

const names = ['Joakim', 'Hans', 'Tommy']

names.forEach(name => {
  // console.log(name)
})


const minFunktion = (num1, num2, cb) => {
  let sum = num1 + num2

  cb(sum)
}


minFunktion(2, 2, (sum) => {
  // console.log(sum)
})


minFunktion(3, 6, sum => {
  // names.push(sum)
})


const varje = (array, cb) => {
  for(let i = 0; i < array.length; i++) {
    cb(array[i], i)
  }
}

varje(names, (name, i) => {
  console.log(name)
  console.log(i)
})

