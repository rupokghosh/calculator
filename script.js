//variables

const screen = document.getElementById("screen");
const numbers = document.querySelectorAll(".number");
const AC = document.getElementById("AC");
const backspace = document.getElementById("backspace");
const equals = document.getElementById("equals");

//functions

function clearDisplay(){

    screen.textContent = '';
}

function backspaceFunction(){

}

function appendValues(value){
    if (value === '.' && screen.innerText.includes('.')) return;
    screen.innerText = screen.innerText + value;

}

function operationChooser(){

}

function calculate(){

}


// Calculator funtionality

// loop through the buttons to find out which number is pressed

numbers.forEach(input => {
    input.addEventListener('click', function(){
        appendValues(this.value);
    });
})