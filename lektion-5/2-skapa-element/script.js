const commentForm = document.querySelector('#comment-form')
const commentsDiv = document.querySelector('#comments')

commentForm.addEventListener('submit', e => {
  e.preventDefault()
  const input = document.querySelector('#comment-input')
  

  if(input.value.trim() === '') return

  const newId = crypto.randomUUID()

  commentsDiv.innerHTML += `
  <div id="${newId}" class="comment">
    <p>${input.value}</p>
  </div>
`
  input.value = ''

  // document.getElementById(newId).addEventListener('click', e => {
  //   e.currentTarget.classList.add('active')
  // })

})





commentsDiv.addEventListener('click', e => {
  console.log(e.target.nodeName)
  // if(e.target.id === 'comments') return
  if(e.target === e.currentTarget) return

  
  if(e.target.nodeName === 'P'){
    e.target.parentNode.classList.add('active')
  }
  else {
    e.target.classList.add('active')
  }
})