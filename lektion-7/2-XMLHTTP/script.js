// HTTP METHODS
/* 
    GET, POST, PUT, PATCH, DELETE

  GET     - hämtar data, okrypterat
  POST    - skriva data, krypterat i en body
  PUT     - uppdaterar HELA ett objekt
  PATCH   - uppdaterar delar av eller hela ett objekt
  DELETE  - tar bort ett objekt

*/

// const getRequest = (method, endpoint, cb) => {

//   const http = new XMLHttpRequest();
//   http.addEventListener('readystatechange', () => {
//     if(http.status === 200 && http.readyState === 4) {
//       cb(http.responseText)
//     }
//     else if(http.readyState === 4) {
//       cb('Something went wrong')
//     }
//   })

//   http.open(method, endpoint)
//   http.send()
// }

// const todos = getRequest('GET', 'todos.json')
// console.log(todos)

// getRequest('GET', 'todos.json', (data) => {
//   const todos = JSON.parse(data)
//   console.log(todos)
//   getRequest('GET', 'todos.json', (data) => {
//     console.log(data)
//   })
// })



// PROMISES

const doSomething = (value) => {
  return new Promise((resolve, reject) => {
    if(value === true) {
      resolve('success data')
    } else {
      reject('error message')
    }
  })
}


// doSomething(true)
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.error(err)
//   })
//   .finally(() => {
//     console.log('slut')
//   })

  const getRequest = (method, endpoint) => {
    return new Promise((resolve, reject) => {

      const http = new XMLHttpRequest();
      http.addEventListener('readystatechange', () => {
        if(http.status === 200 && http.readyState === 4) {
          resolve(http.responseText)
        }
        else if(http.readyState === 4) {
          reject('Something went wrong')
        }
      })
    
      http.open(method, endpoint)
      http.send()
    })    
  }

  function json(data) {
    return new Promise((resolve, reject) => {
      try {
        const parsed = JSON.parse(data)
        resolve(parsed)
      } catch (error) {
        reject(error)
      }
    })
  }

  getRequest('GET', 'todos.json')
    .then(data => {   
      return json(data)
    })
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err)
    })


    fetch('todos.json')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })