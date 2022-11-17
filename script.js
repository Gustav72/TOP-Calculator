function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function percent(a) {
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