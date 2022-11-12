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

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', getA);
});

function getA(e) {
    a += `${e.target.id}`;
    display.textContent = `${a}`;
    input = `${a}`;
    
    //do everything in this function .... <--i think this is the key

    /* const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach((operatorButton) => {
        operatorButton.addEventListener('click', whichOperate)
    });

    

    function whichOperate(e) {
        a = display.textContent;
        console.log(a);

        operator = e.target.id;

        if (operator != '') {
            numberButtons.forEach((numberButton) => {
                numberButton.removeEventListener('click', getA);
            });
            console.log('omg')
        }
    }
    */

    /* if (display.textContent.includes(operator)) {
        numberButtons.forEach((numberButton) => {
            numberButton.removeEventListener('click', getA);
        });
        numberButtons.forEach((numberButton) => {
            numberButton.addEventListener('click', getB);
        });

    }

    function getB(e) {
        b += `${e.target.id}`;
        updateDisplay();
    }
    */

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
    
    function getB(e) {
        clearDisplay();
        b += `${e.target.id}`
        display.textContent = `${b}`;
        
    }

}

function clearDisplay() {
    display.textContent = '';
}

/*numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', getB);
});

function getB(e) {
    console.log(e.target.id)
    
}
*/

const equals = document.getElementById('equals');
equals.addEventListener('click', calculate);

//need to store a, store the operator, and store b
function calculate(e) {
    b = display.textContent;
    console.log(b);
    display.textContent = operate(operator,+a,+b);
}

//operate(operator,a,b);
