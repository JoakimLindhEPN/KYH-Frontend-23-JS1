const names = ['Joakim', 'Hans', 'Tommy', 'Jeanette']
const users = [
  {fName: 'Joakim', lName: 'Lindh'},
  {fName: 'Hans', lName: 'Mattin-Lassei'},
]


let todos = [
  { id: 1, title: 'todo 1', completed: false },
  { id: 2, title: 'todo 2', completed: false },
  { id: 3, title: 'todo 3', completed: false },
  { id: 4, title: 'todo 4', completed: false },
  { id: 5, title: 'todo 5', completed: false },
  { id: 6, title: 'todo 6', completed: false },
  { id: 7, title: 'todo 7', completed: false },
  { id: 8, title: 'todo 8', completed: false },
  { id: 9, title: 'todo 9', completed: false },
]


// console.log(names.length)
for(let i = 0; i < names.length; i++) {
  // console.log(names[i])
}

names.forEach(function(name, index) {
  // console.log(name)
})


users.forEach(function(user, index) {
  // console.log(user)
})

const newUsers = users.map(function(user, index) {
  // user.fName = user.fName.toUpperCase()
  // return user
  return user.fName
})

// console.log(newUsers)


// console.log(todos)

// En filter returnerar en NY array
todos = todos.filter(function(todo){
  return todo.id !== 3
})

// console.log(todos)


let value = 'Hans'

// IF-satser

// if(value.length === 0) {
//   console.log('du måste skriva in någonting att göra')
// } 
// else if(value.length < 4) {
//   console.log('texten behöver vara lite längre')
// }
// else {
//   console.log('bra jobbat')
// }

if(value === 'Joakim') {
  console.log('hej Joakim')
}
else if(value === 'Hans') {
  console.log('hej Hans')
}
else {
  console.log('trevligt att träffas')
}

switch(value) {
  case 'Joakim':
    console.log('hej Joakim')
    break
  case 'Hans':
    console.log('Hej Hans')
    break
  default:
    console.log('trevligt att träffas')
}


const type = 'DELETE_TODO'


// switch(type) {
//   case 'ADD_TODO':
//     todos.push({ id: 10, title: 'Ny todo', completed: false})
//     break
//   case 'DELETE_TODO':
//     todos = todos.filter(function(todo){
//       return todo.id !== 7
//     })
//     break
//   default:
//     break
// }

// console.log(todos)