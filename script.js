let a;
let b;
let operator;


function addIt(a, b) {
    return a + b;
}

function subtractIt(a, b) {
    return  a - b;
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
    if (operator == 'add') display.textContent = addIt(a, b);
    else if (operator == 'subtract') display.textContent = subtractIt(a, b);
    else if (operator == 'multiply') display.textContent = multiplyIt(a, b);
    else if (operator == 'divide' && b == 0) display.textContent = "DON\'T BREAK IT";
    else if (operator == 'divide') display.textContent = divideIt(a, b);
    else if (operator == 'percent') display.textContent = percentIt(a);
    else alert('what are you doing bro?!?!?!?!');
}

const calculator = document.getElementById('main');

const display = document.getElementById('display');

const allClear = document.querySelector('#all-clear');
const backspace = document.querySelector('#backspace');

const percent = document.querySelector('#percent');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');

const sign = document.querySelector('#sign');
const decimal = document.querySelector('#decimal');

const equal = document.querySelector('#equal');

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.getElementById('seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

zero.onclick = () => display.textContent += '0';
one.onclick = () => display.textContent += '1';
two.onclick = () => display.textContent += '2';
three.onclick = () => display.textContent += '3';
four.onclick = () => display.textContent += '4';
five.onclick = () => display.textContent += '5';
six.onclick = () => display.textContent += '6';
seven.onclick = () => display.textContent += '7';
eight.onclick = () => display.textContent += '8';
nine.onclick = () => display.textContent += '9';

plus.onclick = () => {
   a = Number(display.textContent);
   display.textContent = '';
   console.log(a);
   operator = 'add';

}

minus.onclick = () => {
    a = Number(display.textContent);
    display.textContent = '';
    console.log(a);
    operator = 'subtract';

 }

 multiply.onclick = () => {
    a = Number(display.textContent);
    display.textContent = '';
    console.log(a);
    operator = 'multiply';

 }

 divide.onclick = () => {
    a = Number(display.textContent);
    display.textContent = '';
    console.log(a);
    operator = 'divide';

 }

 divide.onclick = () => {
    a = Number(display.textContent);
    display.textContent = '';
    console.log(a);
    operator = 'divide';

 }

 percent.onclick = () => {
    a = Number(display.textContent);
    display.textContent = '';
    operator = 'percent';
    operate(operator, a, b)


 }

decimal.onclick = () => {
    if (display.textContent.includes('.')) return
    else display.textContent += '.';
}

allClear.onclick = () => {
    display.textContent = '';
    
}

backspace.onclick = () => {
    display.textContent = display.textContent.slice(0, -1);
}

sign.onclick = () => {
    if (!display.textContent.includes('-')) display.textContent = '-' + display.textContent
    else if (display.textContent.includes('-')) display.textContent = display.textContent.substring(1);
}

equal.onclick = function() {

b = Number(display.textContent);
operate(operator, a, b)

}



