const BASE_URL = 'https://jsonplaceholder.typicode.com/users/'
const userList = document.querySelector('#user-list')

let users = []

const getUsers = async () => {
  try {
    const res = await fetch(BASE_URL)
    console.log(res)
  
    if(res.status !== 200) {
      throw new Error('Something went wrong, status: ' + res.status)
    }

    const data = await res.json()

    console.log(data)
    data.forEach(user => users.push(user))

    renderUsers()


  } catch(err) {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="pop" id="toast">
      Something went wrong
    </div>
    `)
    document.querySelector('#toast').addEventListener('animationend', e => {
      e.target.remove()
    })
    console.error(err.message)
  }

}

getUsers()

function renderUsers() {
  userList.innerHTML = ''
  users.forEach(user => {
    userList.insertAdjacentHTML('beforeend', `
    <li class="user bg-light p-2 rounded mb-3">
      <p class="fs-1 mb-0">${user.name}</p>
      <p class="fs-6 text-secondary m-0">${user.company.name} - ${user.email}</p>
      <button data-user-id="${user.id}" id="remove-${user.id}" class="btn remove-btn"><i class="fa-solid fa-trash"></i></button>
    </li>
    `)

    document.querySelector('#remove-' + user.id).addEventListener('click', async () => {

      try {
        const res = await fetch(BASE_URL + user.id, {
          method: 'DELETE'
        })
  
        console.log(res) 

        if(res.status !== 200) {
          throw new Error('Could not delete the user: ' + res.status)
        }

        // const data = await res.json()
        // console.log(data)
        
        users.splice(users.indexOf(user), 1)

        // users = users.filter(_user => _user.id !== data)
        renderUsers()
      } 
      catch (error) {
        document.body.insertAdjacentHTML('beforeend', `
        <div class="pop" id="toast">
          Something went wrong
        </div>
        `)
        document.querySelector('#toast').addEventListener('animationend', e => {
          e.target.remove()
        })
        console.error(err.message)
      }
     

    })

  })
}

// userList.addEventListener('click', e => {
//   console.log(e.target.nodeName)
//   if(e.target.nodeName !== 'BUTTON') return

//   console.log(e.target.dataset.userId)
// })

const form = document.querySelector('#regForm')
form.addEventListener('submit', async (e) => {
  e.preventDefault()

  // const companyValue = document.querySelector('#company').value

  const newUser = {
    name: form['name'].value,
    company: {
      name: form['company'].value,
    },
    email: form['email'].value,
  }

  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(newUser)
    })
  
    console.log(res)
    if(res.status !== 201) {
      throw new Error('Could not create the user: ' + res.status)
    }

    const user = await res.json()
    console.log(user)

    users.unshift(user)

    // userList.insertAdjacentHTML('afterbegin', `
    //   <li class="user bg-light p-2 rounded mb-3">
    //     <p class="fs-1 mb-0">${user.name}</p>
    //     <p class="fs-6 text-secondary m-0">${user.company.name} - ${user.email}</p>
    //   </li>
    //   `)

    renderUsers()

      form.reset()

  } catch (err) {
    document.body.insertAdjacentHTML('beforeend', `
    <div class="pop" id="toast">
      Something went wrong
    </div>
    `)
    document.querySelector('#toast').addEventListener('animationend', e => {
      e.target.remove()
    })
    console.error(err.message)
  }


})