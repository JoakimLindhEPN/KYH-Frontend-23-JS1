

let posts = []

const fetchPosts = async () => {
  try {
    const res = await fetch('http://localhost:3000/posts')
    
    if(res.status !== 200) {
      throw new Error('Something went wrong')
    }

    const data = await res.json()
    posts = data



    renderPosts()

  } catch (error) {
    console.log(error.message)
  }
}

fetchPosts()


function renderPosts() {
  const output = document.querySelector('#output')
  output.innerHTML = ''

  posts.forEach(post => {
    output.appendChild(createPostElement(post))
  })
}


function createPostElement(post) {
  const postDiv = createCustomElement('div', 'post')

  const imgContainer = createCustomElement('div', 'img-container')
  const img = createCustomElement('img')
  img.setAttribute('src', post.imgUrl)
  imgContainer.appendChild(img)
  postDiv.appendChild(imgContainer)

  const contentDiv = createCustomElement('div', 'content')
  const hotBtn = createCustomElement('i', 'fa-solid fa-fire hot-btn')
  hotBtn.addEventListener('click', () => updatePost(post))
  const contentTitle = createCustomElement('h2', 'content_title', post.title)

  const info = createCustomElement('div', 'info')
  const categories = createCustomElement('ul', 'categories')
  post.categories.forEach(cat => {
    const categoryLi = createCustomElement('li', '', cat)
    categories.appendChild(categoryLi)
  })
  const author = createCustomElement('p', '', 'Author: ' + post.author)
  info.append(categories, author)

  const bodyDiv = createCustomElement('p', 'post_body', post.body.slice(0, 100) + '...')
  const link = createCustomElement('a', 'btn btn-primary bottom-right', 'Read more')

  if(post.hot) {
    const hot = createCustomElement('p', 'hot', 'HOT')
    contentDiv.appendChild(hot)
  }

  contentDiv.append(hotBtn, contentTitle, info, bodyDiv, link)
  postDiv.appendChild(contentDiv)
  return postDiv
}



function createCustomElement(type, classList, text) {
  const el = document.createElement(type)
  if(classList && classList.length > 0) {
    el.className = classList
  }
  if(text) {
    el.textContent = text
  }
  return el
}


async function updatePost(post) {
  const res = await fetch('http://localhost:3000/posts/' + post.id, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      ...post,
      hot: !post.hot
    })
  })

  console.log(res)
  if(res.status !== 200) return

  
  // Den här kommer att hämta alla inlägg från databasen på nytt detta kan medföra kostnader beroende på database och trafik
  // fetchPosts()
  
  const newPost = await res.json()
  // posts.splice(posts.indexOf(post), 1, newPost)
  post.hot = newPost.hot
  
  renderPosts()
}