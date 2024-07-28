// let walking = function() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("running");
//       resolve(); // Resolve the promise after running
//     }, 1000);
//   });
// };

// console.log(walking());

// ------------------------------------------------------------------------------------------------------------------

let walking = function() {
  let wasIwalking = true;
  return new Promise((resolve, reject) => {
    if (wasIwalking === true) {
      resolve({ message: "I was walking" }); // Correct syntax to resolve with an object
    } else {
      reject("I was not walking"); // Reject the promise if walking is false
    }
  });
};

walking()
  .then((result) => {
    console.log(result); // Output: { message: "I was walking" }
  })
  .catch((error) => {
    console.error(error); // This won't be called in this example
  });
