const btn = document.querySelector('#btn')


function alert1() {
  console.log('event')
}


// btn.onclick = function() {
//   alert('onclick')
// }


// btn.addEventListener('click', () => alert1(2), { once: true })
// btn.addEventListener('click', alert1)
// btn.removeEventListener('click', alert1)


// btn.addEventListener('click', () => {
//   console.log('test')
// })


// const test1 = () => {
//   console.log('hej')
// }
// const test2 = () => {
//   console.log('hej')
// }


// console.log(test1 === test1)


// btn.addEventListener('click', () => {
//   console.log('klickade på knappen')
// })
// btn.addEventListener('dblclick', () => {
//   console.log('dubbelklickade på knappen')
// })
// btn.addEventListener('mousedown', () => {
//   console.log('eventet kördes')
// })
// btn.addEventListener('mouseup', () => {
//   console.log('eventet kördes')
// })
// btn.addEventListener('mouseover', () => {
//   console.log('eventet kördes')
// })
// btn.addEventListener('mouseenter', () => {
//   console.log('enter')
// })
// btn.addEventListener('mouseleave', () => {
//   console.log('leave')
// })


const square = document.querySelector('#square')
square.addEventListener('mousemove', event => {
  square.style.backgroundColor = `rgb(${event.offsetX}, ${event.offsetY}, 0)`
})



const firstName = document.querySelector('#firstName')
console.log(firstName)


// firstName.addEventListener('keyup', e => {
//   console.log(e.key)
// })
// firstName.addEventListener('keydown', e => {
//   console.log(e.key)
// })
// document.querySelector('#firstName').addEventListener('focus', function(e) {
//   console.log(this)
//   this.classList.add('focus-red')
// })
// document.querySelector('#firstName').addEventListener('focus', e => {
//   // console.log(e)
//   e.target.classList.add('focus-red')
// })
// document.querySelector('#firstName').addEventListener('blur', e => {
//   console.log(e)
//   e.target.classList.remove('focus-red')
// })


document.querySelector('#loginForm').addEventListener('submit', e => {
  e.preventDefault()
  if(firstName.value === '') return

  console.log(firstName.value)
})


document.querySelector('#link').addEventListener('click', e => {
  e.preventDefault()
  console.log('det trodde du va?')
  window.location.href = 'https://www.aftonbladet.se' // GÖR ALDRIG SÅHÄR!!!!
})