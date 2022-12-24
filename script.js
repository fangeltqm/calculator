let plus = function(a,b) {
    return a+b;
}

let minus = function(a,b) {
    return a-b;
}

let times = function(a,b) {
    return a*b;
}

let divide = function(a,b) {
    return a/b;
}

let operate = function(operator,a,b) {
    if (operator === '+') {
        return plus(a,b);

    } else if (operator === '-') {
        return minus(a,b);

    } else if (operator === '*') {
        return times(a,b);

    } else if (operator === '/') {
        return divide(a,b);
    }
}

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
    /*
    if (resetCalc = true) {
        operatorButtons.forEach((operatorButton) => {
            operatorButton.removeEventListener('click', operateAgain)
        });
    }
    */
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