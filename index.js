
// TODO 1: Declare & assign variables pointing to the corresponding element(s)
// statement should be the "statement" div
// optionButtons should be all the elements within the "options" div
// explanation should be the "explanation" div
const statement = document.getElementById("statement");
const explanation = document.getElementById("explanation"); 
const options = document.querySelector("#options").children;
const scoreEl = document.querySelector(".score");

let score = 0;
// TODO 2: Declare & assign a variable called fact
// Its value should be an object with a statement, true/false answer, and explanation 

const questions = [
    {question: `typeof ['J', 'S'] === 'array'`, answer: "false", description: "Arrays have the type 'object'. In JavaScript everything is either a primitive data type or an object. Arrays are a kind of object with special properties."}
];
statement.textContent = questions[0].question;   
console.log(questions[0].answer)

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", () => {
        if (options[i].value == questions[0].answer) {
            options[i].style.backgroundColor = "green";
            score++;
            scoreEl.textContent = score;
           
        } else {
            options[i].style.backgroundColor = "red"
        }
        explanation.textContent = questions[0].description;
        disableBtns();
    })
}

const disableBtns = () => {
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
}

const enableBtn = () => {
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = false;
    }
}



// TODO 3: Set the text of the statement element to the fact's statement

    

// TODO 4: Declare disable & enable functions to set or remove the "disabled" attribute from a given button element
// disable(button) should set the button element's attribute "disabled" to the value ""
// enable(button) should remove the attribute "disabled" from the button element



// TODO 5: Declare an isCorrect function that compares a guess to the right answer
// isCorrect(guess) should return true if the guess matches the fact's answer



// TODO 6A: Use a for loop to add a click event listener to each of the optionButtons
        // TODO 6B: Within the event handler function, display the fact's explanation by setting the text of the explanation element


        // TODO 7: Within the event handler function, 
        // Use a for loop to disable all the option buttons


        // TODO 8: Within the event handler function,
        // Get the guessed value from the clicked button
        // Use a conditional to compare the guess to the fact's answer
        // and add the "correct"/"incorrect" class as appropriate

