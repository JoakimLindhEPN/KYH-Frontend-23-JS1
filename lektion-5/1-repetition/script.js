let id = 'divven'

const div = document.getElementById(id)
const divven = document.querySelector('#'+id)
const divs = document.querySelectorAll('div')

divven.textContent = 'Det här är en ny text'
// console.log(divs)


 const button = document.querySelector('button')



function handleClick() {
  console.log('handle click')
}


button.addEventListener('click', () => {
  console.log('inline function')
})

button.addEventListener('click', handleClick)
button.removeEventListener('click', handleClick)


document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()

  console.log('validating')

  // e.target.submit()
})

document.body.addEventListener('click', (e) => {
  // console.log('clickade någonstans i body')
  console.log(e.target) // det vi klickade på
  console.log('currentTarget: ' + e.currentTarget) // där eventListenern ligger
})