const display = document.getElementById("display");
const greetingInput1 = document.getElementById("greetingInput1");
const greetingInput2 = document.getElementById("greetingInput2");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

let calculate = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    sub: function (num1, num2) {
        return num1 - num2;
    }
};

plus.addEventListener('click', function() {
    const num1 = parseFloat(greetingInput1.value);
    const num2 = parseFloat(greetingInput2.value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = calculate.add(num1, num2);
        display.textContent = `Result: ${result}`;
    } else {
        display.textContent = 'Please enter valid numbers';
    }
});

minus.addEventListener('click', function() {
    const num1 = parseFloat(greetingInput1.value);
    const num2 = parseFloat(greetingInput2.value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = calculate.sub(num1, num2);
        display.textContent = `Result: ${result}`;
    } else {
        display.textContent = 'Please enter valid numbers';
    }
});
