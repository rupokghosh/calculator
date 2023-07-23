//variables

const screen = document.getElementById("screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
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
function operationChooser(operation){
    if(operation === '+' && screen.innerText.includes('+')) return;
    if(operation === '-' && screen.innerText.includes('-')) return;
    if(operation === '*' && screen.innerText.includes('*')) return;
    if(operation === '/' && screen.innerText.includes('/')) return;
    screen.innerText =screen.innerText + operation;
    return operation;
}

function calculate(){
    
}


//  ----- Calculator funtionality -----

// clear button (AC)

AC.addEventListener('click', ()=>{
    clearDisplay();
})

// backspace button 

// loop to find out which number is pressed

numbers.forEach(input => {
    input.addEventListener('click', function(){
        appendValues(this.value);
    });
})

//loop to find out which operator is pressed

operators.forEach(input => {
    input.addEventListener('click', function() {
        operationChooser(this.value);
    });
})
