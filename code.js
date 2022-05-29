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

oneButton.addEventListener('click', function() {
    const screen = document.querySelector('.screen');
    screen.innerHTML += '1';
});

twoButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '2';
});

threeButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '3';
});

fourButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '4';
});

fiveButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '5';
});

sixButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '6';
});

sevenButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '7';
});

eightButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '8';
});

nineButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '9';
});

zeroButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '0';
});

decimalButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '.';
    decimalButton.disabled = true;
});

negativeButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '-';
    negativeButton.disabled = true;
});

divideButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '/';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
});

multiplyButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '*';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
});

addButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '+';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
});

minusButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '-';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
});

enterButton.addEventListener('click', function(){ //for later
    const screen = document.querySelector('.screen');
    screen.innerHTML += '2';
});

clearButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML = '';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
});

