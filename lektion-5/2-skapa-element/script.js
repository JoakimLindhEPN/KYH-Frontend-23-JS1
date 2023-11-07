const commentForm = document.querySelector('#comment-form')
const commentsDiv = document.querySelector('#comments')


// INNER HTML
// commentForm.addEventListener('submit', e => {
//   e.preventDefault()
//   const input = document.querySelector('#comment-input')
  

//   if(input.value.trim() === '') return

//   const newId = crypto.randomUUID()

//   commentsDiv.innerHTML += `
//   <div id="${newId}" class="comment">
//     <p>${input.value}</p>
//   </div>
// `
//   input.value = ''

  // document.getElementById(newId).addEventListener('click', e => {
  //   e.currentTarget.classList.add('active')
  // })

// })





// commentsDiv.addEventListener('click', e => {
//   console.log(e.target.nodeName)
//   // if(e.target.id === 'comments') return
//   if(e.target === e.currentTarget) return


//   if(e.target.nodeName === 'P'){
//     e.target.parentNode.classList.add('active')
//   }
//   else {
//     e.target.classList.add('active')
//   }
// })




// INSERT AJECENT HTML
// commentForm.addEventListener('submit', e => {
//   e.preventDefault()
//   const input = document.querySelector('#comment-input')
  
//   if(input.value.trim() === '') return
//   const newId = crypto.randomUUID()

//   commentsDiv.insertAdjacentHTML('beforeend', `
//   <div id="${newId}" class="comment">
//     <p>${input.value}</p>
//   </div>
// `)


//   input.value = ''

//   document.getElementById(newId).addEventListener('click', e => {
//     e.currentTarget.classList.add('active')
//   })

// })



// CREATE ELEMENT
commentForm.addEventListener('submit', e => {
  e.preventDefault()
  
  const input = document.querySelector('#comment-input')
  if(input.value.trim() === '') return


  // createCommentElement(input.value)
  const comment = createCommentElement(input.value)
  commentsDiv.appendChild(comment)
  // commentsDiv.insertAdjacentElement('beforeend', comment)

  input.value = ''
  input.focus()
})




function createCommentElement(value) {
  const comment = document.createElement('div')
  comment.classList.add('comment')
  comment.addEventListener('click', () => {
    comment.classList.add('active')
  })

  const commentText = document.createElement('p')
  // commentText.innerText = value
  commentText.textContent = value

  comment.appendChild(commentText)

  return comment
}