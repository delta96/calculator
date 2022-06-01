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

let equation =[];
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
    operandSelection = 1;
});

multiplyButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += ' * ';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
    equation.push('*');
    operandSelection = 2;
});

addButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += ' + ';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
    equation.push('+');
    operandSelection = 3;
});

minusButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML += ' - ';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
    equation.push('-');
    operandSelection = 4;
});

clearButton.addEventListener('click', function(){
    const screen = document.querySelector('.screen');
    screen.innerHTML = '';
    decimalButton.disabled = false;
    negativeButton.disabled = false;
    equation = [];
});

enterButton.addEventListener('click', function(){ //for later
    let answer = equationSplit(equation);
    const screen = document.querySelector('.screen');
    screen.innerHTML = '';
    screen.innerHTML = answer;

});

function opFind(arRay){  // finds the index of operand 

    if(arRay.includes('/')){
        let index = arRay.indexOf('/');
        return(index);
    } else if(arRay.includes('*')){
        let index = arRay.indexOf('*');
        return(index);
    } else if(arRay.includes('+')){
        let index = arRay.indexOf('+');
        return(index);
    } else if(arRay.includes('-')){
        let index = arRay.indexOf('-');
        return(index);
    }
}

function equationSplit(array0){
    let opIndex = opFind(array0);
    let array1 = array0.splice(0,opIndex);
    let array2 = array0.splice(-1, opIndex);
    let num1 = parseInt(array1.join(''));
    let num2 = parseInt(array2.join(''));
   
    if(operandSelection === 1){
        let solution = num1 / num2;
        console.log(num1);
        console.log(num2);
        return solution;
    } else if(operandSelection === 2){
        let solution = num1 * num2;
        console.log(num1);
        console.log(num2);
        return solution;
    } else if(operandSelection === 3){
        let solution = num1 + num2;
        console.log(num1);
        console.log(num2);
        return solution;
    } else if(operandSelection === 4){
        let solution = num1 - num2;
        console.log(num1);
        console.log(num2);
        return solution;
        
    } 
    
}