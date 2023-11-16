const form = document.querySelector('#createForm')

form.addEventListener('submit', e => {
  e.preventDefault()
  const errors = []

  for(let i = 0; i < form.length; i++) {
    if(form[i].type === 'submit') break;
    errors.push(validate(form[i])) 
  }

  if(errors.includes(false)) return

  createPost()

})


function validate(input) {
  const parent = input.parentElement;

  if(input.value.trim() === '') {
    parent.classList.add('invalid')
    parent.querySelector('.error').textContent = 'This field can not be empty'
    return false
  }
  else {
    parent.classList.remove('invalid')
    return true
  }
}

async function createPost() {
  const title = document.querySelector('#title').value
  const imgUrl = document.querySelector('#imgUrl').value
  const categories = document.querySelector('#categories').value
  const author = document.querySelector('#author').value
  const body = document.querySelector('#body').value

  const categoryArray = categories.replace(/\s*,\s*/g, ',').split(',')
  // console.log(categoryArray)

  const post = {
    title,
    imgUrl,
    categories: categoryArray,
    author,
    body,
    hot: false
  }

  try {
    const res = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    console.log(res)
    if(res.status !== 201) {
      throw new Error(res.status)
    }
    
    window.location.assign('/')
    
  } catch (error) {
    console.log(error.message)
    document.querySelector('#form-error').classList.add('invalid')
  }
  
  
}
