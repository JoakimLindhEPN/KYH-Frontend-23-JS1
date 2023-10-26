// let email = 'joakimmailcom'

// console.log(email.includes('lindh'))

// if(false) {
//   console.log('email innehåller ett @')
// }


const user = {
  active: true
}
// if(!user.active) {
//   console.log('användaren är aktiv')
// }

//  COMPARE STATEMENTS

let number = 13
let string = '13'

// console.log(number == string) // två = tecken jämför bara värdet = true
// console.log(number === string) // två = tecken jämför värdet OCH datatyp = false

// console.log(11 !== '11')

// if(user.active !== true){}

// Större än
// console.log(3 > 2)
// Mindre än
// console.log(3 < 2)

// större/mindre eller lika med
// console.log(2 <= 2)
// console.log(2 >= 2)

// for(let i = 0; i <= 3; i++) {}


// && betyder att BÅDA påståendena måste vara sanna
if(user.active === false && 3 === '3') {
    console.log('nu kör vi if satsen')
}

// || betyder att den ENA måste vara sann
if(user.active === true || 3 === '3' || 5 === 7 || 1 == 1) {
  // console.log('wooho')
}


let name = 'Erika'

if(name === 'Joakim') {
  console.log('Namnet är Joakim')
} 
else if(name === 'Hans') {
  console.log('Namnet är Hans')
}
else if(name === 'Hans') {
  console.log('Namnet är Hans')
}
else if(name === 'Jeanette') {
  console.log('Namnet är Jeanette')
}
else {
  console.log('okänt namn')
}


if(name === 'Joakim') {
  console.log('namnet är joakim')
} 
else {
  console.log('det är INTE Joakim')
}


// Turnary operator

if(user.active) 
  console.log('användaren är aktiv')
else
  console.log('användaren är inaktiv')


user.active 
  ? console.log('SANT') 
  : console.log('FALSKT')


let text = `användaren är ${user.active ? 'aktiv' : 'inaktiv'}`

console.log(text)




// SWITCH


// if(color === 'black') {
//   console.log('color is black')
// } 
// else if(color === 'blue') {
//   console.log('color is blue')
// }
// else if(color === 'orange') {
//   console.log('color is orange')
// }
// else if(color === 'white') {
//   console.log('color is white')
// }
// else if(color === 'red') {
//   console.log('color is red')
// }
// else {
//   console.log('color unknown')
// }

const color = 'black'

switch(color) {
  case 'black': 
    console.log('color is black')
    break
  case 'blue': 
    console.log('color is blue')
    break
  case 'orange': 
    console.log('color is orange')
    break
  case 'white': 
    console.log('color is white')
    break
  case 'red': 
    console.log('color is red')
    break
  default:
    console.log('color unknown')
}