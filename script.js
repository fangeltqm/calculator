let plus = function(a,b) {
    return a+b;
}
console.log(plus(1,4));

let minus = function(a,b) {
    return a-b;
}
console.log(minus(4,1));

let times = function(a,b) {
    return a*b;
}
console.log(times(4,5));

let divide = function(a,b) {
    return a/b;
}
console.log(divide(30,3));


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

console.log(operate('+',2,4));
console.log(operate('-',6,2));
console.log(operate('*',3,4));
console.log(operate('/',8,4));