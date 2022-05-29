const oneButton = document.querySelector('#oneB');
const twoButton = document.querySelector('#twoB');
const threeButton = document.querySelector('#threeB');
const fourButton = document.querySelector('#fourB');
const fiveButton = document.querySelector('#fiveB');
const sixButton = document.querySelector('#sixB');
const sevenButton = document.querySelector('#sevenB');
const eightButton = document.querySelector('#eightB');
const nineButton = document.querySelector('#nineB');
const zeroButton = document.querySelector('#zeroB');
const decimalButton = document.querySelector('#decimalB');
const negativeButton = document.querySelector('#negativeB');
const divideButton = document.querySelector('#divisionB');
const multiplyButton = document.querySelector('#multiplyB');
const addButton = document.querySelector('#additionB');
const minusButton = document.querySelector('#minusB');
const enterButton = document.querySelector('#enterB');
const clearButton = document.querySelector('#clearB');



function printOne(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '1';
}

function printTwo(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '2';
}

function printAdd(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '+';
}

function printClear(){
    const screen = document.querySelector('.screen');
    screen.innerHTML = '';
}


oneButton.addEventListener('click', printOne);
twoButton.addEventListener('click', printTwo);
addButton.addEventListener('click', printAdd);
clearButton.addEventListener('click', printClear);

