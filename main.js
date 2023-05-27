let operator = "";
let previousValue = "";
let currentValue = "";



document.addEventListener("DOMContentLoaded", function() {
    let clear = document.querySelector("#clearBTN");
    let del = document.querySelector("#deleteBTN");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".deci");

    let numbers = document.querySelectorAll(".num");
    let operators = document.querySelectorAll(".oper");

    let topScreen = document.querySelector(".topscreen");
    let lowerScreen = document.querySelector(".lowerscreen");

    numbers.forEach((number) => number.addEventListener("click", function(e) {
        numberChoice(e.target.textContent);
        lowerScreen.textContent = currentValue;

    }));

    operators.forEach((op) => op.addEventListener("click", function(e) {
        operatorChoice(e.target.textContent);
        topScreen.textContent = previousValue + " " + operator;
        lowerScreen.textContent = currentValue;

    }));

    clear.addEventListener("click", function() {
        previousValue = '';
        currentValue = '';
        operator = '';
        topScreen.textContent = currentValue;
        lowerScreen.textContent = currentValue;
    })


    equal.addEventListener("click", function() {
        if (currentValue != "" && previousValue != ""){
            calculate();
            topScreen.textContent = "";
            if(previousValue.length <= 9) {
                lowerScreen.textContent = previousValue;
            } else {
                lowerScreen.textContent = previousValue.slice(0,5) + "...";
            }
        }   
    })

    decimal.addEventListener("click", function() {
        addDecimal();
    })
})

function numberChoice(num){
    if (currentValue.length <= 9) {
        currentValue += num;
    }
    
}

function operatorChoice(op){
    operator = op;
    previousValue = currentValue;
    currentValue = "";
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+") {
        previousValue += currentValue;
    } else if (operator === "-") {
        previousValue -= currentValue;
    } else if (operator === "x") {
        previousValue *= currentValue;
    } else if (operator === "÷") {
        previousValue /= currentValue;
    }

    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

function addDecimal() {
    if (!currentValue.includes(".")) {
        currentValue += ".";
    }
}



