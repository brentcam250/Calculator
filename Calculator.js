
//this should handle everything that comes up on the display.
function Display() {
    let display = document.querySelector('.calculator-display');
    //display.innerText = '123';
    console.log(display);
}

function ButtonPress (whichButton){
    console.log(whichButton);
}

function Addition (a, b) {
    return (parseInt(a) + parseInt(b));
}

function Subtraction (a, b) {
    return (parseInt(a) - parseInt(b));
}

function Division (a, b) {
    return (parseInt(a) / parseInt(b));
}

function Multiplication (a, b){
    return (parseInt(a) * parseInt(b));
}

Display();

// button listeners below:

//numbers in order they appear on the screen
let seven = document.getElementById('seven').addEventListener('click', () => ButtonPress(7));
let eight = document.getElementById('eight').addEventListener('click', () =>ButtonPress(8));
let nine = document.getElementById('nine').addEventListener('click', () => ButtonPress(9));

let four = document.getElementById('four').addEventListener('click', () => ButtonPress(4));
let five = document.getElementById('five').addEventListener('click', () =>ButtonPress(5));
let six = document.getElementById('six').addEventListener('click', () =>ButtonPress(6));

let one = document.getElementById('one').addEventListener('click', () => ButtonPress(1));
let two = document.getElementById('two').addEventListener('click', () => ButtonPress(2));
let three = document.getElementById('three').addEventListener('click', () => ButtonPress(3));

let zero = document.getElementById('zero').addEventListener('click', () => ButtonPress(0));

//operators in order they appear on the screen.

let divide = document.getElementById('divide').addEventListener('click', () => ButtonPress('/'));
let multiply = document.getElementById('multiply').addEventListener('click', () => ButtonPress('*'));
let subtract = document.getElementById('subtract').addEventListener('click', () => ButtonPress('-'));
let add = document.getElementById('add').addEventListener('click', () => ButtonPress('+'));

//all other buttons below:

let decimal  = document.getElementById('decimal').addEventListener('click', () => ButtonPress('.'));
let backSpace  = document.getElementById('backspace').addEventListener('click', () => ButtonPress('backspace'));
let clear  = document.getElementById('clear').addEventListener('click', () => ButtonPress('clear'));
let equals  = document.getElementById('equals').addEventListener('click', () => ButtonPress('='));
