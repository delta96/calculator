const oneButton = document.querySelector('#oneB'); //List of button declarations
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
const equalButton = document.querySelector('#enterB');
const clearButton = document.querySelector('#clearB');

let equation =[]; //Globally declare empty array to store input values
let operandSelection = 0;

oneButton.addEventListener('click', function() {
    const screen = document.querySelector('.screen');
    screen.innerHTML += '1';
    equation.push(1);
});

twoButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '2';
    equation.push(2);
});

threeButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '3';
    equation.push(3);
});

fourButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '4';
    equation.push(4);
});

fiveButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '5';
    equation.push(5);
});

sixButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '6';
    equation.push(6);
});

sevenButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '7';
    equation.push(7);
});

eightButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '8';
    equation.push(8);
});

nineButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '9';
    equation.push(9);
});

zeroButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '0';
    equation.push(0);
});

decimalButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '.';
    decimalButton.disabled = true;
    equation.push('.');
});

negativeButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += '-';
    negativeButton.disabled = true;
    equation.push('-');
});

divideButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += ' / ';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
    equation.push('/');
    operandSelection = 1; // Changes to var to 1 to be used in operate function
});

multiplyButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += ' * ';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
    equation.push('*');
    operandSelection = 2; // Changes to var to 2 to be used in operate function
});

addButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += ' + ';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
    equation.push('+');
    operandSelection = 3; // Changes to var to 3 to be used in operate function
});

minusButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += ' - ';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
    equation.push('_');
    operandSelection = 4; // Changes to var to 4 to be used in operate function
});

clearButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML = '';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
    equation = [];
});

equalButton.addEventListener('click', function(){ // Calls on the operate function and displays results of equation
    let answer = operate(equation);
    const screen = document.querySelector('.screen');
    screen.innerHTML = '';
    screen.innerHTML = answer;
    equation = [answer];
});

function operandFind(arRay){  // Finds the index of the operand in the equation array

    if(arRay.includes('/')){
        return arRay.indexOf('/');  
    } else if(arRay.includes('*')){
        return arRay.indexOf('*');    
    } else if(arRay.includes('+')){
        return arRay.indexOf('+');    
    } else if(arRay.includes('_')){
        return arRay.indexOf('_');
    }
}

function operate(array0){ // Takes operand index and splits the array into numbers 
    let opIndex = operandFind(array0);
    let array1 = array0.slice(0,opIndex);
    let array2 = array0.slice((opIndex + 1));
    let num1 = parseFloat(array1.join(''));
    let num2 = parseFloat(array2.join(''));

    if(operandSelection === 1){ // Uses the operandSelection number set by button to declare operator in equation.
        return num1 / num2;  
    } else if(operandSelection === 2){
        return num1 * num2; 
    } else if(operandSelection === 3){
        return num1 + num2;
    } else if(operandSelection === 4){
        return num1 - num2;
    } 
    
}