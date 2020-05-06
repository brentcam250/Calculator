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
        if(this.isEmpty() === false){
            return this.data[this.top -1];
        }
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
    clear() {
        //destroys everything in the stack... be careful.
        while(this.isEmpty() === false){
            this.pop();
        }
        this.push('');
    }
}

// this takes in the current stack, and will evaluate 
function Evaluate(buttonStack){
    //lets see what we're working with.
    buttonStack.print();
    let result;
    let lastIn;
    let operator;
    let firstIn;
    if(buttonStack.length() >= 3){
        lastIn = buttonStack.pop();
        operator = buttonStack.pop();
        firstIn = buttonStack.pop();
        if(isNaN(lastIn) || isNaN(firstIn)){
            console.log('something is wrong... i think that two operators may have been pushed back to back');
        }
    }
    else{
        return null;
    }
    // if(operator === '+'){
    //     result = Addition(lastIn, firstIn);
    //     console.log(`result of addition = ${result}`);
    //     buttonStack.push(result);
    // }else if (operator === '-'){
    
    switch(operator){
        case '+':
            result = Addition(firstIn, lastIn);
            break;

        case '-':
            result = Subtraction(firstIn, lastIn)
            break;
        
        case '*':
            result = Multiplication(firstIn, lastIn);
            break;

        case '/':
            result = Division(firstIn, lastIn);
            break;
    }
    buttonStack.push(result);


    return null;
}


//this should handle everything that comes up on the display.
function Display(buttonStack) {
    let display = document.querySelector('.calculator-display');
    display.innerText = buttonStack.peek();
    //console.log(display);
}


function ButtonPress (whichButton, buttonStack){
    if(isNaN(whichButton)){
        if(isNaN(buttonStack.peek())){
            //don't want two operators in a row...
            return null;
        }
        switch(whichButton){
            case '=':
                Evaluate(buttonStack);
                break;

            case 'clear':
                buttonStack.clear();
                break;
            case 'backspace': 
                doBackSpace(buttonStack);
                //this deletes the last single character input
                //for example it would delete a + or a *, but if it were a number input such as 623,
                //backspace would only delete the last character leaving us 62
                break;
            case '.':
                alert('i dont do decimals yet...');
                break;
            default:
                buttonStack.push(whichButton);
                break;


        }
    }else {
        //it is a number and should be concatenated to the previous number if there are any.
        // if(buttonStack.peek()){
        //     console.log(buttonStack.peek());
        if(isNaN(buttonStack.peek())){
            //then the previously pressed button was not a number.
            // and should not do the concatenation.
            buttonStack.push(whichButton);
        }else{
            //have to do this conversion between int/string/int so that it concatenates rather than adding together.
            let concatenatedNum = "" + buttonStack.pop() + whichButton;
            buttonStack.push(parseInt(concatenatedNum));
            //console.log(`pushing ${concatenatedNum} into the stack`);        
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
    if(b === 0){
        //dont divide by zero plz
        return 'You suck';
    }
    let twoDecimals = (parseInt(a) /parseInt(b));
    twoDecimals.toFixed(2);
    return (twoDecimals);
}

function Multiplication (a, b){
    return (parseInt(a) * parseInt(b));
}

//returnss 0 if it took off an operator
//returns 1 if it shortened a number
function doBackSpace(buttonStack){
    let prev = buttonStack.peek();
    if(isNaN(prev)){
        //last thing is not a number so just pop it off and forget about it.
        buttonStack.pop();
        return 0;
    }else{
        console.log(prev);
        //it is a number... want to just take off the last digit.
        prev = prev.toString();
        prev = prev.substring(0, prev.length -1);
        console.log(`chopped prev: ${prev}`);
        buttonStack.push(prev);
        return 1;
    }
}

//this should give us a fresh stack to start pushing things into.
function Clear () {
    let buttonStack = new Stack ();
    buttonStack.push('');
    console.log(buttonStack.peek());
    return(buttonStack);
}
//create a new stack, and setup the calculator for input
let buttonStack = new Stack ();
buttonStack.push('');
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
