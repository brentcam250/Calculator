
//this should handle everything that comes up on the display.
function Display() {
    let display = document.querySelector('.calculator-display');
    //display.innerText = '123';
    console.log(display);
}

function ButtonPress (whichButton){
    if(isNaN(whichButton)){
        //then its not a number...
    }else {
        //it is a number and should be concatenated to the previous number if there are any.
    }
    console.log(whichButton);
}

//this is where ill push all the new button press info
//once we see an '=' then we will have to evaluate the elements of the stack using BEDMAS
class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    push (element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }
    length() {
        return this.top;
    }
    peek() {
        return this.data[this.top -1];
    }
    isEmpty() {
        return this.top === 0;
    }
    pop () {
        if( this.isEmpty() === false){
            this.top = this.top -1; 
            return this.data.pop();
        }
    }
    print() {
        let top = this.top -1;

        while( top >= 0){
            console.log(this.data[top]);
            top --;
        }
    }
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

function Clear () {
    let buttonStack = new Stack ();
    return(buttonStack);
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
