// async function test() {}

const getData = async () => {
  return 'hej'
}

// const test = getData()
// console.log(test)

// getData().then(data => console.log(data))

let user = {}

fetch('user.json')
  .then(res => res.json())
  .then(data => {
    user = data
    document.body.innerText = user.firstName
  })
  
const getUser = async () => {
  const res = await fetch('user.json')
  const data = await res.json()

  user = data
  document.body.innerText = user.lastName
}


console.log(1)
getUser()
console.log(2)