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



const numberButtons = document.querySelectorAll('.number');
    numberButtons.forEach((numberButton) => {
        numberButton.addEventListener('click', createString)
    });

let part = '';
function createString(e) {
    part += `${e.target.id}`;
    display.textContent = part;
    
    //do everything in this function
    
}

const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener('click', whichOperate)
    });

let operator = '';
let a = '';


function whichOperate(e) {
    a = display.textContent;
    console.log(a);
    part = ''
    operator = e.target.id;
    console.log(operator);
}
