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
let input = '';
let solution = 0;


const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', getA);
});

function getA(e) {
    a += `${e.target.id}`;
    display.textContent = `${a}`;
    input = `${a}`;

}

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', whichOperate)
});

function whichOperate(e) {
    a = input;
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
    
    function operateAgain(e) {
        operator = e.target.id;
        console.log(operator);
        display.textContent = solution;
        a = solution;
        console.log(a);
        b = '';
        getB;
    
    }    
    
    /*
    operator = '';
    if (operator != '') {
        a = solution;
        b += `${e.target.id}`
        display.textContent = `${b}`;
        solution = operate(operator,+a,+b);
        console.log(solution);
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

/*
const equals = document.getElementById('equals');
equals.addEventListener('click', calculate);


function calculate(e) {
    b = display.textContent;
    console.log(b);
    let solution = operate(operator,+a,+b);
    console.log(solution);
    display.textContent = solution;
}
*/