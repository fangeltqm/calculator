const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let display = document.querySelector("#display");

let firstNum = '';
let secondNum = '';
let operator = '';
let solution = '';

numbers.forEach((number) => {
    number.addEventListener('click', getNumber)
})

operators.forEach((operator) => {
    operator.addEventListener('click', getOperator)
})

clear.addEventListener('click', reset)
equals.addEventListener('click', calculate)
decimal.addEventListener('click', appendDecimal)

function getNumber(e) {
    if(firstNum.length < 9) {
        firstNum += `${e.target.id}`
        display.textContent = firstNum;
   
        if(secondNum != '') {
            calculate();
            display.textContent = firstNum;
        }
    }
}

function getOperator(e) {
    if (operator === '/' && firstNum == '0') {
        display.textContent = 'ERROR';
        return;
    } 
    operator = e.target.id;
    secondNum = firstNum;
    firstNum = '';
    
    if(solution != '') {
        secondNum = solution;
        display.textContent = secondNum;
    }
}

function reset() {
    firstNum = '';
    secondNum = '';
    operator = '';
    solution = '';
    display.textContent = '';
}

function calculate () {
    if (operator === '/' && firstNum === '0') {
        display.textContent = 'ERROR';
        return;
    }
    
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    solution = (operate(operator, firstNum, secondNum));
    firstNum = firstNum.toString();
    secondNum = secondNum.toString();
    display.textContent = solution;
    
}

function appendDecimal () {
    if (firstNum.includes(".")) return;
    if (firstNum === '') {
        firstNum = '0'
    }
    firstNum += '.'
    display.textContent = firstNum;


}




let plus = function(a,b) {
    return a+b;
}

let minus = function(a,b) {
    return b-a;
}

let times = function(a,b) {
    return a*b;
}

let divide = function(a,b) {
    return b/a;
}

let operate = function(operator, firstNum, secondNum) {
    if (operator === '+') {
        return plus(firstNum,secondNum);

    } else if (operator === '-') {
        return minus(firstNum,secondNum);

    } else if (operator === '*') {
        return times(firstNum,secondNum);

    } else if (operator === '/') {
        return divide(firstNum,secondNum);
    }
}

/* redoing my javascript above. below is old non working



let display = document.getElementById('display');
let a = '';
let operator = '';
let b = '';
let solution = 0;
let resetCalc = false;

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', getA);
});

function getA(e) {
    a += `${e.target.id}`;
    display.textContent = `${a}`;
    //resetCalc = false;
}

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', whichOperate)
});

function whichOperate(e) {
    console.log(a);
    operator = e.target.id;
    console.log(operator);

    if (operator != '') {
        numberButtons.forEach((numberButton) => {
            numberButton.removeEventListener('click', getA);
        });
    }

    numberButtons.forEach((numberButton) => {
        numberButton.addEventListener('click', getB);
    });

    if (b != '') {
        numberButtons.forEach((numberButton) => {
            numberButton.removeEventListener('click', getB);
        });
    }
}

function operateAgain(e) {
    operator = e.target.id;
    console.log(operator);
    display.textContent = solution;
    a = solution;
    console.log(a);
    b = '';
    getB;
}

function getB(e) {
    clearDisplay();
    b += `${e.target.id}`
    console.log(b);
    display.textContent = `${b}`;
    solution = operate(operator,+a,+b);
    console.log(solution);
    

    if (b != '') {
        operatorButtons.forEach((operatorButton) => {
            operatorButton.removeEventListener('click', whichOperate)
        });
    }

    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener('click', operateAgain)
    });
     
    -----
    if (resetCalc = true) {
        operatorButtons.forEach((operatorButton) => {
            operatorButton.removeEventListener('click', operateAgain)
        });
    }
    -----
}

const equals = document.getElementById('equals');
equals.addEventListener('click', calculate);

function calculate(e) {
    display.textContent = solution;
}

function clearDisplay() {
    display.textContent = '';
}

const clrButton = document.getElementById('clear');
clrButton.addEventListener('click', allClear);
function allClear() {
    a = '';
    operator = '';
    b = '';
    solution = 0;
    clearDisplay();
    //resetCalc = true
    numberButtons.forEach((numberButton) => {
        numberButton.addEventListener('click', getA);
    });

}

*/