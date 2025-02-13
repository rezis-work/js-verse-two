// TODO 1: Declare & assign variables pointing to the corresponding element(s)
// statement should be the "statement" div
const statement = document.getElementById("statement");
// optionButtons should be all the elements within the "options" div
const optionsButtons = document.querySelectorAll("#options button");
// explanation should be the "explanation" div
const explanation = document.getElementById("explanation");

// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation
const fact = {
  statement: "Array is an primitive type in JavaScript",
  answer: false,
  explanation: "Array is an object in JavaScript",
};

// TODO 3: Set the text of the statement element to the fact's statement
statement.textContent = fact.statement;

// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
const disable = (button) => button.setAttribute("disabled", true);

const enable = (button) => button.removeAttribute("disabled");

// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer

const isCorrect = (guess) => guess === fact.answer;

// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
// TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element

// TODO 7: Within the event handler function,
// Use a for loop to disable all the option buttons

// TODO 8: Within the event handler function,
// Get the guessed value from the clicked button
// Use a conditional to compare the guess to the fact's answer
// and add the "correct"/"incorrect" class as appropriate

// ---------------------------------------------------------------------------------------
