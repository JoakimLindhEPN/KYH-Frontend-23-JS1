// DOM - Document Object Model

// console.log(window)
// console.log(document)

let id = 'para'

const p1 = document.getElementsByTagName('p')
// console.log(p1)

const p2 = document.getElementsByClassName('paragraph')
// console.log(p2)

const p3 = document.getElementById(id)
// console.log(p3)


// Query Selector

const q1 = document.querySelector('p')
// console.log(q1)
const q2 = document.querySelectorAll('p')
// console.log(q2)

// q2.forEach(el => {
//   console.log(el)
// })

const q3 = document.querySelector('.paragraph')
// console.log(q3)
const q4 = document.querySelectorAll('.paragraph')
// console.log(q4)

// const q5 = document.querySelector('#' + id)
const q5 = document.querySelector('#para')
// console.log(q5)

// const li = document.querySelector('#list > li:nth-child(3)')
// console.log(li)




// TRAVERSERA I DOM:en
const list = document.querySelector('#list')

// console.log(list.parentNode)
// console.log(list.childNodes)
// console.log(list.children)
// console.log(list.children[1])
// console.log(list.previousSibling)
// console.log(list.previousElementSibling)
// console.log(list.nextSibling)
// console.log(list.nextElementSibling)


const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
  console.log('klikck')

  document.querySelector('#output').innerHTML = `
    <div id="one">one</div>
    <div id="two">two</div>
    <div id="three">three</div>
    <div id="four">four</div>
  `
  btn.disabled = true
})