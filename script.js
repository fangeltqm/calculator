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

    if (operator === '') {
        return;
    }
    
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    solution = roundAnswer(operate(operator, firstNum, secondNum));
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

function roundAnswer(number) {
    return Math.round(number * 1000) / 1000
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