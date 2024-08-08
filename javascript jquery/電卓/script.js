let display = document.getElementById('display');
let currentInput = '';
let operation = null;
let firstOperand = null;

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number; // 先頭の0を削除
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        if (currentInput === '') {
            currentInput = '0.'; // 空の入力の場合、0.を入力
        } else {
            currentInput += '.';
        }
    }
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculate();
    }
    operation = op;
    firstOperand = parseFloat(currentInput);
    currentInput = '';
}

function calculate() {
    if (operation === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    let result;

    switch (operation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    firstOperand = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operation = null;
    firstOperand = null;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}
