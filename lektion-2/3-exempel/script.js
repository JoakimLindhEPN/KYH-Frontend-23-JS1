const leftNames = ['Joakim', 'Jeanette', 'Hans', 'Tommy', 'Jack', 'Wille', 'Liam']
const rightNames = ['Nisse']


const leftBox = document.getElementById('box-1');
const rightBox = document.getElementById('box-2');


function renderNames() {
  leftBox.innerHTML = ''
  rightBox.innerHTML = ''

  leftNames.forEach(function(name, i) {

    const p = document.createElement('p')
    p.classList.add('item')
    p.innerText = name

    p.addEventListener('click', function() {
      const name = leftNames.splice(i, 1)
      rightNames.push(name)
      renderNames()
    })

    leftBox.appendChild(p)
    
  })


  rightNames.forEach(function(name, i) {

    const p = document.createElement('p')
    p.classList.add('item')
    p.innerText = name

    p.addEventListener('click', function() {
      const name = rightNames.splice(i, 1)
      leftNames.push(name)
      renderNames()
    })

    rightBox.appendChild(p)

  })
}


renderNames()



const input = document.getElementById('input')
const btnLeft = document.getElementById('btn-l')
const btnRight = document.getElementById('btn-r')

btnLeft.addEventListener('click', function() {
  leftNames.unshift(input.value)
  input.value = ''
  renderNames()

})
btnRight.addEventListener('click', function() {
  rightNames.unshift(input.value)
  input.value = ''
  renderNames()

})