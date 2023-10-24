/* 
  ARRAYS - En lista med ett eller flera värden


  Vi vill hålla samma datatyp inuti en array
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]

  Gör INTE såhär=
  const multiArray = ['12', 12, true, {firstName: 'Joakim'}]
*/
const users = [
  { firstName: 'Joakim', lastName: 'Lindh', age: 36, isActive: true },
  { firstName: 'Jeanette', lastName: 'Lindh', age: 36, isActive: false },
  { firstName: 'Hans', lastName: 'Mattin-Lassei', age: 39, isActive: true },
]

const names = ['Joakim', 'Jeanette', 'Hans']

// console.log(names[0])

// Detta går ite då vi föröker byta ut arrayen
// names = ['Joakim', 'Jeanette', 'Hans']

// console.log(names)

// Lägga till i början av en array
names.unshift('Colin')
// Ta bort i början av en array
const test = names.shift()
// console.log(test)


// Lägga till i slutet
names.push('Colin')

// ta bort i slutet
names.pop()


names[1] = 'Nytt namn'
// console.log((names.indexOf('Nytt namn')))

const index = names.indexOf('Nytt namn')
names[index] = 'hej'


// delete names[1]

// .splice() - tar bort och / eller lägger till ett /flera värde från en specifik position
const removed = names.splice(1, 1) // tar bort en från index
// console.log(removed)
names.splice(1, 0, 'Colin', 'Jeanette') // tar bort 0 och lägger til Colin och Jeanette
names.splice(1, 2, 'Jack') // tar bort 2 från index 1 och lägger till 'Jack'

names.splice(names.indexOf('Jack'), 1, 'Tommy', 'Nisse')

// console.log(names)
// console.log(names.length)

const arr2 = ['Colin', 'Jeanette']

// names = names.concat(arr2)
// names.push(arr2)
// console.log(names.concat(arr2))

// console.log(names)


// SPREAD OPERATOR
// ...arr2

// names.push(...arr2)
// console.log(names)


// // const allTheNames = names.concat(arr2)
// console.log(allTheNames)

// const obj = {
  //   fName: 'Joakim',
  //   lName: 'Lindh'
  // }
  // const obj2 = {
    //   ...obj,
    //   lName: 'Andersson',
    //   email: 'joakim@mail.com',
    // }
    
    // console.log(obj2)
    
    const allTheNames = [...arr2, ...names, 'Jack']
    console.log(allTheNames)
    
    // allTheNames.sort((a, b) => {
    //   return Math.random() - 0.5
    // })
    // allTheNames.sort()
    // allTheNames.reverse()

    allTheNames.sort().reverse()
    console.log(allTheNames)


    const numbers = [1, 2, 3, 4, 5, 6, 10, 11, 12]

    console.log(numbers)
    numbers.sort((a, b) => {
      return a - b
    })

    console.log(numbers)





    const out = document.querySelector('#output')

    allTheNames.forEach(name => {
      const li = document.createElement('li')
      li.innerText = name
      out.appendChild(li)
    })

    document.querySelector('#btn').addEventListener('click', () => {
      console.log(out.children[3])
      out.children[3].remove()
    })