let isOn=false;

function turnOn(){
    const screen=document.querySelector(".screen");
    screen.style.display = "block";
    screen.innerText ="0";
    isOn = true;
}

function turnOff(){
    const screen=document.querySelector(".screen");
    screen.innerText ="";
    isOn = false;
}

function backspace() {
    if (!isOn) return;
    let screen = document.querySelector(".screen");
    screen.innerText = screen.innerText.slice(0, -1);
}

function reciprocal() {
    if (!isOn) return;

    const screen = document.querySelector(".screen");
    let value = screen.innerText;

    try {
        let num = eval(value);

        if (num === 0) {
            screen.innerText = "Error"; // Cannot divide by zero
        } else {
            screen.innerText = 1 / num;
        }
    } catch {
        screen.innerText = "Error";
    }
}

function squareX() {
    if (!isOn) return;

    const screen = document.querySelector(".screen");
    let value = screen.innerText;

    try {
        let num = eval(value);
        screen.innerText = num * num;
    } catch {
        screen.innerText = "Error";
    }
}

function toggleSign() {
    if (!isOn) return;

    const screen = document.querySelector(".screen");
    let expr = screen.innerText;

    // Match the last number in the expression
    let match = expr.match(/(-?\d+\.?\d*)$/);

    if (match) {
        const lastNumber = match[0];
        const start = expr.slice(0, match.index);
        const toggled = lastNumber.startsWith('-') ? lastNumber.slice(1) : '-' + lastNumber;
        screen.innerText = start + toggled;
    }
}

function append(value){
    if (!isOn) return;
    const screen=document.querySelector('.screen');
    let current = screen.innerText;
    
    if(current === '0'|| current === 'Error'){
        screen.innerText = value;
    }else{
        screen.innerText += value;
    }
    console.log(value);
}

function clearDisplay(){
    if (!isOn) return;
    document.querySelector('.screen').innerText=''
}

function calculate(){
    if (!isOn) return;
    try{
        const res=eval(document.querySelector('.screen').innerText);
        document.querySelector('.screen').innerText=res;
        console.log(res);
    }catch(err){
        document.querySelector('.screen').innerText='Error';
    }
}
function empty() {
    return null;
}