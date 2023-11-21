const BASE_URL = 'https://jsonplaceholder.typicode.com/users'

const getUsers = async () => {
  try {
    const res = await fetch(BASE_URL)
    console.log(res)
  
    if(res.status !== 200) {
      throw new Error('Something went wrong, status: ' + res.status)
    }

    const data = await res.json()

    console.log(data)

    const userList = document.querySelector('#user-list')
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