console.log(1)
console.log(2)
console.log(3)
for(let i = 0; i < 3; i++) {
  console.log('blocking')
}
console.log(4)
console.log(5)

// Asynkron kod. blockerar inte utan den körs när den är klar
setTimeout(() => {
  console.log('timer klar')
}, 2000)
console.log(6)
console.log(7)
console.log(8)