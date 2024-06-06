// console.log(document.URL)
// console.log(document.title)

// let title = document.title;
// title = "Hafijur";
// document.title = "hafijur";
// document.title = "hello coder";

// console.log(title);

// ----------------------------------------------------------------------------------------------------

// const hello = document.getElementById("hello");
// let name = "Hafijur";
// hello.innerText = `Hello ${name}`;
// let age = 25;
// const nameEl = document.getElementById("name");
// nameEl.innerText = `My age is ${age}`;
// console.log(hello);

// Method are function that are applied to object

// ----------------------------------------------------------------------------------------------------

// function

// function function1() {
//   alert("function is running");
// }

// function1();

// ----------------------------------------------------------------------------------------------------

const count = document.getElementById("count");
const addition = document.getElementById("add");
const subtraction = document.getElementById("sub");

let counter = 0;

function add() {
  counter = counter + 1;
  count.innerText = `count is : ${counter}`;
}

function sub() {
  counter = counter - 1;
  count.innerText = `count is : ${counter}`;
}

addition.addEventListener("click", add);
subtraction.addEventListener("click", sub);

// ----------------------------------------------------------------------------------------------------
