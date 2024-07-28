// Promises
// promises are function that promise to return a value

// We use promises to 
// 1. fetch data from a database
// 2. fetch assests
// 3. fetch data from an API
// 4. using setTimeout()

// we use promises when the function takes an indetermind amount of time to return 

// function
// let sum =  function add(num1, num2){
// return num1 + num2
// }

// newPromiseFunction(resolve, reject)  

let walking = function(){
  console.log("walking ")
}
let sleeping = function(){
  console.log("sleeping ")
}
let eating = function(){
  console.log("eating ")
}

setTimeout(walking, 1500)
setTimeout(sleeping, 6000)
setTimeout(eating, 2000)
setInterval(eating, 2000)

console.log("running")