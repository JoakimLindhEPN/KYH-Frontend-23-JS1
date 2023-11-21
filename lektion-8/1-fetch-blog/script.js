console.log(window.location)

import { createCustomElement } from "./lib/helpers.js"

let posts = []

const fetchPosts = async () => {

  const query = new URLSearchParams(window.location.search)
  const search = query.get('search')
  
  let url = 'http://localhost:3000/posts'

  if(search !== null) {
    url = `http://localhost:3000/posts?q=${search}`
  }

  try {
    const res = await fetch(url)
    
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
  const contentTitle = createCustomElement('h2', 'content_title', post.title)

  const info = createCustomElement('div', 'info')
  const categories = createCustomElement('ul', 'categories')

  post.categories.forEach(cat => {
    const categoryLi = createCustomElement('li', '', cat)
    // categoryLi.href = `/?search=${cat}`
    categories.appendChild(categoryLi)
    categoryLi.addEventListener('click', () => {
      window.location.assign(`/?search=${cat}`)
    })
  })

  const author = createCustomElement('p', '', 'Author: ' + post.author)
  info.append(categories, author)

  const bodyDiv = createCustomElement('p', 'post_body', post.body.slice(0, 100) + '...')
  const link = createCustomElement('a', 'btn btn-primary bottom-right', 'Read more')
  link.href = 'details/?id=' + post.id


  contentDiv.append(contentTitle, info, bodyDiv, link)
  postDiv.appendChild(contentDiv)
  return postDiv
}






