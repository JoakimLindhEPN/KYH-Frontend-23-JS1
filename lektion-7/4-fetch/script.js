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
    output.insertAdjacentHTML('beforeend', `<li data-postid="${post.id}" id="post${post.id}">${post.title}</li>`)
    document.querySelector('#post' + post.id).addEventListener('click', deletePost)
  })
}


getPosts()


// POST - lägger till data, krypterat i en body

const post = {
  title: 'Ny post',
  body: 'kjandasjnk fwkj fwkejhf skjhf sdf',
  userId: 1
}

const addPost1 = () => {
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


const addPost = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(post)
  })

  // felhantering ?
  const data = await res.json()

  console.log(data)
  output.insertAdjacentHTML('beforeend', `<li>${data.title}</li>`)
}

btn.addEventListener('click', addPost)




// PUT - Byter ut ett objekt på databasen
const updatedPost = {
  title: 'Uppdaterad!',
  body: 'kjandasjnk fwkj fwkejhf skjhf sdf',
  userId: 1
}

const updatePost1 = (e) => {
  console.log(e.target.dataset.postid)

  fetch('https://jsonplaceholder.typicode.com/posts/' + e.target.dataset.postid, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedPost)
  })
  .then(res => {
    console.log(res)
    return res.json()
  })
  .then(data => {
    console.log(data)
    document.querySelector('#post'+data.id).textContent = data.title
  })
}

const updatePost2 = async (e) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + e.target.dataset.postid, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(updatedPost)
  })

  console.log(res)

  const data = await res.json()
  console.log(data)
  document.querySelector('#post'+data.id).textContent = data.title
}




// PATCH
const updatePost3 = (e) => {
  console.log(e.target.dataset.postid)

  fetch('https://jsonplaceholder.typicode.com/posts/' + e.target.dataset.postid, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Patchad title'
    })
  })
  .then(res => {
    console.log(res)
    return res.json()
  })
  .then(data => {
    console.log(data)
    document.querySelector('#post'+data.id).textContent = data.title
  })
}


const updatePost = async (e) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + e.target.dataset.postid, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Patchad title'
    })
  })

  console.log(res)

  const data = await res.json()
  console.log(data)
  document.querySelector('#post'+data.id).textContent = data.title
}



// DELETE

const deletePost1 = (e) => {
  fetch('https://jsonplaceholder.typicode.com/posts/' + e.target.dataset.postid, {
    method: 'DELETE'
  })
  .then(res => {
    console.log(res)
    return res.json()
  })
  .then(data => {
    console.log(data)
    e.target.remove()
  })
}
const deletePost = async  (e) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + e.target.dataset.postid, {
    method: 'DELETE'
  })
  
  console.log(res)
  
  const data = await res.json()
  console.log(data)
  e.target.remove()

}