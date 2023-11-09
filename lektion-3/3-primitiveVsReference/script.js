let numberOne = 50;
let numberTwo = numberOne

// console.log(`numberOne = ${numberOne}, numberTwo = ${numberTwo}`)
numberOne = 100
// console.log(`numberOne = ${numberOne}, numberTwo = ${numberTwo}`)



const userOne = { name: 'Joakim', age: 36 }
const userTwo = userOne
const userThree = { name: 'Joakim', age: 36 }

// console.log(userOne, userTwo)
userOne.name = 'Hans'
userOne.age = 100
// console.log(userOne, userTwo)


// console.log(userOne == userTwo)
if(userOne == userThree) {
  console.log('dom är samma')
}


const users = [
  { id: 1, name: 'Joakim', age: 36 },
  { id: 2, name: 'Hans', age: 40 },
  { id: 3, name: 'Tommy', age: 45 },
  { id: 4, name: 'Jeanette', age: 36 },
]


console.log(users)


const hans = users.find(user => user.name === 'Hans')

hans.age = 200
console.log(hans)


const userFour = {...userOne}
const users2 = [...users]
