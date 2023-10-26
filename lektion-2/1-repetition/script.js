// ctrl + '

/* 
var = global
let = går att skriva över
const = går inte att skriva över


camelCase
SCREAMING_SNAKE_CASE = om en variabel ALDRIG kommer att ändras


String - text
Number - alla tal
Boolean - true / false
null - manuellt satt tomt värde
undefined - automatiskt satt tomt värde
Object - innehåller ett eller flera key:value par
Array - lista på en eller flera värden
*/


let text = 'en \'text "här'
text = "en ny \"text med 'dubbel-citat tecken"
text = `som en template literal (backticks) ${2 + 2}`

// console.log(text)

const firstName = 'Joakim'
const lastName = 'Lindh'

const fullName = firstName + ' ' + lastName

const initals = firstName[0] + lastName[0]
// console.log(initals)


// NUMBERS

let num1 = 0
num1 = num1 + 20
num1 += 20
num1++

// console.log(num1)


const string = '123'


const number = +string

// console.log(string)
// console.log(number)




// OBJECT
const obj1 = {
  key: 'value'
}


console.log(obj1.key)

obj1.name = 12345

console.log(obj1.name)


const json = JSON.stringify(obj1)

console.log(json)

const js = JSON.parse(json)

console.log(js)


// Array

const users = [
  { id: 1, name: 'Joakim', lastName: 'Lindh' },
  { id: 2, name: 'Hans', lastName: 'Mattin-Lassei' },
]

/* 
  unshift() - lägger till i början
  push() - lägger till i slutet
  shift() - tar bort i början och returnerar det värdet vi tar bort
  pop() - tar bort i slutet och returnerar det värdet vi tar bort
*/
// const me = users.shift()

// console.log(me)


const hans = users.find(function(user) {
  return user.name == 'Hans'
})

// console.log(hans)


users.splice(1, 0, { id: 3, name: 'Tommy', lastName: 'Mattin-Lassei' })

const tommy = users.splice(1, 1)
console.log(tommy[0].name)


