// High Order Array Methods

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const users = [
  { name: 'Colin', email: 'colin@mail.com', age: 6, status: false },
  { name: 'Jack', email: 'jack@mail.com', age: 8, status: true },
  { name: 'Vince', email: 'vince@mail.com', age: 3, status: false },
  { name: 'Joakim', email: 'joakim@mail.com', age: 36, status: true },
  { name: 'Jeanette', email: 'jeanette@mail.com', age: 36, status: false },
  { name: 'Hans', email: 'hans@mail.com', age: 39, status: false },
  { name: 'Tommy', email: 'tommy@mail.com', age: 41, status: false },
]

// Reduce
// const sum = numbers.reduce(function(acc, current) {
//   console.log('acc: ' + acc)
//   console.log('current: ' + current)
//   return acc + current
// })

// console.log(sum)


// Filter
const filteredArray = numbers.filter(function(number) {
  return number < 6
})

// console.log(filteredArray)


const userageUsers = users.filter(function(user) {
  // return user.age < 18
  // return user.status == true
  if(user.age < 18) {
    return user
  }
})

// console.log(userageUsers)


// En for loop är den loopen som ger oss mest kontroll
for (let i = 0; i < users.length; i++) {
  if(users[i].age < 18) {
    continue                // continue betyder att vi stoppar den här iterationen och fortsätter med nästa istället
  }

  if(users[i].name == 'Jeanette') {
    break               // break betyder att vi stoppar hela loopen
  }
  // console.log(users[i])
}

// En forEach är gjord för att vara lättare och loopar igenom HELA arrayen
users.forEach(function(user, i) {
  // console.log('index: ' + i)
  // console.log(user)

  document.body.innerHTML += `<div>${i + 1} ${user.name}</div>`
})

// FOR of
for(let user of users) {
  // console.log(user)
}



// MAP - returnerar en ny array
const newUsers = users.map(function(user, i) {
  return {...user, isHandsome: false}
})


// WHILE loopar

let i = 1;

while( i < 5 ) {
  console.log('while: ' + i)
  i++
}

console.log('i är: ' + i)

// Do While
// Kommer alltid att köras minst en gång
do {
  console.log('do while: ' + i)
  i++
}while(i < 10)

console.log('i är: ' + i)



