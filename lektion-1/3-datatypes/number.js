/* 
  NUMBERS
  ----------------------------------------------------------

  +   lägg till
  -   ta bort
  *   gångra
  /   dela
  **  upphöt i
  %   division remainder
 
  ++  öka med 1
  --  minska med 1
  =   lika med
  +=  lägg till på det ursprungliga värdet
  -=  ta bort från det ursprungliga värdet

*/

let num1 = 10;
let num2 = 2.5;

let string1 = '10'

num1 = num1 + 1
num1 += 1;
num1++

num1 = num1 - 1
num1 -= 1;
num1--



// console.log(num1 + Number(string1))

// konverterar string1 till ett number med hjälp av +
// console.log(num1 + +string1)


// console.log(Math.random() * 100)
let randomNr = Math.random() * 100
let roundedNr = Math.ceil(randomNr)
roundedNr = Math.floor(randomNr)
roundedNr = Math.round(randomNr)


console.log('Random number: ' + randomNr)
console.log('Rounded number: ' + roundedNr)