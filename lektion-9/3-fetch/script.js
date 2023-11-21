const BASE_URL = 'https://jsonplaceholder.typicode.com/users'
const userList = document.querySelector('#user-list')

const getUsers = async () => {
  try {
    const res = await fetch(BASE_URL)
    console.log(res)
  
    if(res.status !== 200) {
      throw new Error('Something went wrong, status: ' + res.status)
    }

    const data = await res.json()

    console.log(data)

    userList.innerHTML = ''
    data.forEach(user => {
      userList.insertAdjacentHTML('beforeend', `
      <li class="user bg-light p-2 rounded mb-3">
        <p class="fs-1 mb-0">${user.name}</p>
        <p class="fs-6 text-secondary m-0">${user.company.name} - ${user.email}</p>
      </li>
      `)
    })

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


    userList.insertAdjacentHTML('afterbegin', `
      <li class="user bg-light p-2 rounded mb-3">
        <p class="fs-1 mb-0">${user.name}</p>
        <p class="fs-6 text-secondary m-0">${user.company.name} - ${user.email}</p>
      </li>
      `)

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