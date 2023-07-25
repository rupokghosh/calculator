//variables

const screen = document.getElementById("screen");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const AC = document.getElementById("AC");
const backspace = document.getElementById("backspace");
const equals = document.getElementById("equals");
let firstOperand = '';
let result;
let operatorForCalc;

//functions


function clearDisplay(){

    screen.textContent = '';
}

function backspaceFunction(){
    screen.innerText = screen.innerText.slice(0, -1);
}

function appendValues(value){
    if (value === '.' && screen.innerText.includes('.')) return;
    screen.innerText = screen.innerText + value;
    operators.forEach(input => {
        input.disabled = false;
    });

}
function operationChooser(operation){
  
    screen.innerText = screen.innerText + operation;
    firstOperand = screen.innerText;
    screen.innerText = '';
    // disable the input buttons if operator in place
    if (screen.innerText.includes('+') || screen.innerText.includes('-') ||
        screen.innerText.includes('*') || screen.innerText.includes('/') ||
        screen.innerText.includes('')){
            operators.forEach(input => {
                input.disabled = true;
            });
            calculate();
        }
    return operation;
}

function calculate(){
    let firstNum = parseFloat(firstOperand);
    let secondNum = parseFloat(screen.innerText);
    if(isNaN(firstNum) || isNaN(screen.innerText)) return
    switch(operatorForCalc){
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '*':
            result = firstNum/secondNum;
            break;
        

 
    } 
    
      console.log(firstNum)
      console.log(secondNum)
      console.log(operatorForCalc);
      console.log(result); 
      screen.innerText = result;
    }



/*  ----- Calculator funtionality ----- */

// clear button (AC)

AC.addEventListener('click', ()=>{
    clearDisplay();
})

// backspace button 
 
backspace.addEventListener('click', () => {
    backspaceFunction();
})

// equals button

equals.addEventListener('click', function(){
    
    // error message if nothing after the operators
    if(screen.innerText.slice(-1) === "+" || screen.innerText.slice(-1) === "-" ||
       screen.innerText.slice(-1) === "*" || screen.innerText.slice(-1) === '/'){
        screen.innerText = 'error';
    }
    // else calculate
    calculate();
})

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
        operatorForCalc = this.value
    });
})
