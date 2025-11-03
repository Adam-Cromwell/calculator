//Variables

let number1 = "";
let number2 = "";
let isSecondNumber = false;
let operator = "";

const output = document.getElementById("output");

// listener event select all the buttons

const buttons = document.querySelectorAll(".buttons button"); // class div buttons, and all the button inside, Both are array-like collections (lists) of nodes (elements) extracted from a document.

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    console.log(value); // check what you clicked

    if (!isNaN(value)) {
      if (!isSecondNumber) {
        number1 += value;
        output.textContent = number1;
      } else {
        number2 += value;
        output.textContent = number2;
      }
    } else if (
      value === "*" ||
      value === "-" ||
      value === "+" ||
      value === "/"
    ) {
      operator = value;
      isSecondNumber = true;
    } else if (value === "=") {
      let result;
      if (operator === "+") result = add();
      else if (operator === "-") result = subtract();
      else if (operator === "*") result = multiply();
      else if (operator === "/") result = divide();

      output.textContent = result;
      // reset for next calculation if you want
      number1 = result;
      number2 = "";
      isSecondNumber = false;
      operator = "";
    } else if (value === "CE") {
      number1 = "";
      number2 = "";
      isSecondNumber = false;
      operator = "";
      output.textContent = "0";
    }
  });
});

//function for operations

function add() {
  return Number(number1) + Number(number2);
}

function subtract() {
  return Number(number1) - Number(number2);
}

function multiply() {
  return Number(number1) * Number(number2);
}

function divide() {
  return Number(number1) / Number(number2);
}
