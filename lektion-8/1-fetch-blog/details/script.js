console.log(window.location)

import { createCustomElement } from "../lib/helpers.js"

const img = document.querySelector('#img')
const title = document.querySelector('#title')
const categories = document.querySelector('#categories')
const author = document.querySelector('#author')
const body = document.querySelector('#body')

const id = new URLSearchParams(window.location.search).get('id')


const getPost = async () => {
  let url = `http://localhost:3000/posts/${id}`

  const res = await fetch(url)

  if(res.status !== 200) return

  const post = await res.json()

  // img.setAttribute('src', post.imgUrl)
  img.src = post.imgUrl
  title.textContent = post.title
  author.textContent = `Author: ${post.author}`
  body.innerHTML = post.body

  post.categories.forEach(cat => {
    const categoryLi = createCustomElement('li', '', cat)
    // categoryLi.href = `/?search=${cat}`
    categories.appendChild(categoryLi)
    categoryLi.addEventListener('click', () => {
      window.location.assign(`/?search=${cat}`)
    })
  })
}

getPost()