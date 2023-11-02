const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')
const btn = document.querySelector('#btn')



// BUBBLING

// e.target = Det som man klickade på
// e.currentTarget = Där eventlistenern ligger och körs

btn.addEventListener('click', e => {
  e.stopPropagation()
  console.log('btn target: ', e.target)
  console.log('btn currentTarget: ', e.currentTarget)
})

div1.addEventListener('click', e => {
  e.stopPropagation()

  console.log('div1 target: ', e.target)
  console.log('div1 currentTarget: ', e.currentTarget)
})

div2.addEventListener('click', e => {
  e.stopPropagation()

  console.log('div2 target: ', e.target)
  console.log('div2 currentTarget: ', e.currentTarget)
})

document.body.addEventListener('click', e => {
  e.stopPropagation()

  console.log('body target: ', e.target)
  console.log('body currentTarget: ', e.currentTarget)

  if(e.target === btn) {
    console.log('du klickade på knappen')
  }
})


const names = ['Joakim', 'Hans', 'Tommy']
const output = document.querySelector('#output')

names.forEach(name => {
  
  output.innerHTML += `
  <li id="${name}">${name}</li>
  `
})

output.addEventListener('click', e => {
  console.log(e.target)
  e.target.remove()
})


const user = document.querySelector('.user')
const userBtn = document.querySelector('#user-btn')


user.addEventListener('click', e => {
  user.classList.toggle('active')
})


userBtn.addEventListener('click', e => {
  e.stopPropagation()
  user.style.border = '3px solid red'
})