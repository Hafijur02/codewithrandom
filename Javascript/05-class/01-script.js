const display = document.getElementById('display');
const greetingInput = document.getElementById('greetingInput');
const btn = document.querySelector('button'); // Assuming the button is selected with a 'button' tag. Modify as needed.

function greeting() {
  const personalGreeting = greetingInput.value; // Get the value from the input field.
  display.innerText = personalGreeting;
}

btn.addEventListener('click', greeting); // Pass the greeting function to the event listener.
