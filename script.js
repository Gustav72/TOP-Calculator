let a;
let b;
let c;

function addIt(a, b) {
    return a + b;
}

function subtractIt(a, b) {
    return a - b;
}

function multiplyIt(a, b) {
    return a * b;
}

function divideIt(a, b) {
    return a / b;
}

function percentIt(a) {
    return a / 100;
}

function operate(operator, a, b) {
    if (operator == add) return add(a, b);
    else if (operator == subtract) return subtract(a, b);
    else if (operator == multiply) return multiply(a, b);
    else if (operator == divide) return divide(a, b);
    else if (operator == percent) return percent(a);
    else return 'what are you doing bro?!?!?!?!'
}

const calculator = document.getElementById('main');

const display = document.getElementById('display');
display.textContent = '';

const allClear = document.querySelector('#all-clear');
const backspace = document.querySelector('#backspace');
const percent = document.querySelector('#percent');
const plus = document.querySelector('#plus');
const seven = document.getElementById('seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const minus = document.querySelector('#minus');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const multiply = document.querySelector('#multiply');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const divide = document.querySelector('#divide');
const sign = document.querySelector('#sign');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');
const equal = document.querySelector('#equal');






zero.onclick = () => display.textContent += '0';
one.onclick = () => display.textContent += '1';
two.onclick = () => display.textContent += '2';
three.onclick = () => display.textContent += '3';
four.onclick = () => display.textContent += '4';
five.onclick = () => display.textContent += '5';
six.onclick = () => display.textContent += '6';
seven.onclick = () => display.textContent += '7';
eight.onclick = () => display.textContent += '8';
seven.onclick = () => display.textContent += '9';
decimal.onclick = () => display.textContent += '.';

equal.onclick = function() {

display.textContent += '';
a = display.textContent;
console.log(a); 

}



