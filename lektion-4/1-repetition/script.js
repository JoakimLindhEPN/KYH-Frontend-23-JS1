func1()

function func1() {
  // console.log('function 1')
}

const func2 = function() {
  
}

const func3 = () => {
  
}
func3()



const tip = (cost, tip = 0, test) => {
  if(test) {
    console.log('testar')
  }
  const sum = cost + cost * (tip / 100)
  return sum
}


// tip(100, 10)
// console.log(tip(689, 22, 2))
// console.log(tip(689))



const user = {
  fName: 'Joakim',
  fullName() {
    return `hej ${this.name}`
  }
}

const exportt = {
  func1: func1, 
  func2, 
  dricks: tip, 
  user
}



const tip2 = (cost, tip = 0, cb) => {
  const sum = cost + cost * (tip / 100)
  if(!cb) {
    return sum
  }


  cb(sum)
}


tip2(200, 20, (sum) => {
  console.log('summan är ' + sum)
})




// PRIMITIVA VÄRDEN
// string
// number
// booleans


let nr1 = 432
let nr2 = 432

console.log(nr1 === nr2)

const obj1 = { name: 'Joakim' }
const obj2 = { name: 'Joakim' }

console.log(obj1 === obj2)


const arr1 = [1, 2]
const arr2 = [1, 2]

console.log(arr1 === arr2)