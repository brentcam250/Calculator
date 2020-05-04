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


//this should handle everything that comes up on the display.
function Display(buttonStack) {
    let display = document.querySelector('.calculator-display');
    display.innerText = buttonStack.peek();
    //console.log(display);
}

function ButtonPress (whichButton, buttonStack){
    console.log('printing stack ' + buttonStack.print());
    console.log('stack length is '  + buttonStack.length());
    if(isNaN(whichButton)){
        //then its not a number...
        // if(whichButton === '='){
        //     //then we have to evaluate all the stack.
        // }
        switch(whichButton){
            case '=':

                break;

            case 'clear':
                let cleanButtonStack = Clear();
                Display(cleanButtonStack);
                break;
            case 'backspace': 
                break;
            case '.':
                alert('i dont do decimals yet...');
                break;

            case '+':

                break;

            case '-':
                
                break;

            case '/':

                break;

            case '*':

                break;


        }
    }else {
        //it is a number and should be concatenated to the previous number if there are any.
        // if(buttonStack.peek()){
        //     console.log(buttonStack.peek());
        if(isNaN(buttonStack.peek())){
            //then the previously pressed button was not a number.
            // and should not do the concatenation.
        }else{
            //have to do this conversion between int/string/int so that it concatenates rather than adding together.
            let concatenatedNum = "" + buttonStack.pop() + whichButton;
            buttonStack.push(parseInt(concatenatedNum));
            console.log(`pushing ${concatenatedNum} into the stack`);        
        }

    }
    Display(buttonStack);
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

//this should give us a fresh stack to start pushing things into.
function Clear () {
    let buttonStack = new Stack ();
    buttonStack.push('');
    console.log(buttonStack.peek());
    return(buttonStack);
}


//create new stack
let buttonStack = Clear();
//run the display.
Display(buttonStack);

// button listeners below:

//numbers in order they appear on the screen
let seven = document.getElementById('seven').addEventListener('click', () => ButtonPress(7, buttonStack));
let eight = document.getElementById('eight').addEventListener('click', () =>ButtonPress(8, buttonStack));
let nine = document.getElementById('nine').addEventListener('click', () => ButtonPress(9, buttonStack));

let four = document.getElementById('four').addEventListener('click', () => ButtonPress(4, buttonStack));
let five = document.getElementById('five').addEventListener('click', () =>ButtonPress(5, buttonStack));
let six = document.getElementById('six').addEventListener('click', () =>ButtonPress(6, buttonStack));

let one = document.getElementById('one').addEventListener('click', () => ButtonPress(1, buttonStack));
let two = document.getElementById('two').addEventListener('click', () => ButtonPress(2, buttonStack));
let three = document.getElementById('three').addEventListener('click', () => ButtonPress(3, buttonStack));

let zero = document.getElementById('zero').addEventListener('click', () => ButtonPress(0, buttonStack));

//operators in order they appear on the screen.

let divide = document.getElementById('divide').addEventListener('click', () => ButtonPress('/', buttonStack));
let multiply = document.getElementById('multiply').addEventListener('click', () => ButtonPress('*', buttonStack));
let subtract = document.getElementById('subtract').addEventListener('click', () => ButtonPress('-', buttonStack));
let add = document.getElementById('add').addEventListener('click', () => ButtonPress('+', buttonStack));

//all other buttons below:

let decimal  = document.getElementById('decimal').addEventListener('click', () => ButtonPress('.', buttonStack));
let backSpace  = document.getElementById('backspace').addEventListener('click', () => ButtonPress('backspace', buttonStack));
let clear  = document.getElementById('clear').addEventListener('click', () => ButtonPress('clear', buttonStack));
let equals  = document.getElementById('equals').addEventListener('click', () => ButtonPress('=', buttonStack));
