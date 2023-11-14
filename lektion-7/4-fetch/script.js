const output = document.querySelector('#out')
const btn = document.querySelector('#btn')
const posts = []



// GET - hämtar data, okrypterat

// const getPosts1 = () => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {

//       data.forEach(post => {
//         posts.push(post)
//       })

//       posts.forEach(post => {
//         output.insertAdjacentHTML('beforeend', `<li>${post.title}</li>`)
//       })
//     })
// }

const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')

  if(res.status !== 200) {
    console.log('errrorr')
    return
  }

  const data = await res.json()

  data.forEach(post => posts.push(post))

  posts.forEach(post => {
    output.insertAdjacentHTML('beforeend', `<li>${post.title}</li>`)
  })
}


getPosts()


// POST - lägger till data, krypterat i en body

const post = {
  title: 'Ny post',
  body: 'kjandasjnk fwkj fwkejhf skjhf sdf',
  userId: 1
}

const addPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(post)
  })
  .then(res => {
    // felhantering ?
    return res.json()
  })
  .then(data => {
    console.log(data)
    output.insertAdjacentHTML('beforeend', `<li>${data.title}</li>`)
  })
}


btn.addEventListener('click', addPost)