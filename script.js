checkKey.onkeydown = handleKeydown;



// блок констант
const textFieldID = "textField"
const COLORS = { NUMBER: "Lime", CLEAN: "YellowGreen", BACK: "Yellow", EQUAL: "Gray" };


function addDigit(value) {
    makeButtonPushed("button" + value, 150);
    var elem = document.getElementById(textFieldID);
    elem.value += value;
}

function cleanField() {
    makeButtonPushed("clean", 150);
    document.getElementById(textFieldID).value = "";
}

function deleteLastDigit() {
    makeButtonPushed("back", 150);
    var textField = document.getElementById(textFieldID);
    if (textField.value.length > 0) {
        textField.value =
            textField.value.substring(0, textField.value.length - 1);
    }
}

function calculateFactorial() {
    makeButtonPushed("button!", 150);
    var textField = document.getElementById(textFieldID);
    if (textField.value.match("^[-+]?\\d+$")) {
        var res = 1;
        for (var i = 2; i <= Number(textField.value); i++) {
            res *= i;
        }
        textField.value = res;
    } else {
        alert("Невозможно посчитать факториал для данного ввода.");
    }
}

function exponentiate() {
    makeButtonPushed("exponentiate", 150)
    var textField = document.getElementById(textFieldID);
    textField.value += "^";
}

function equal() {
    makeButtonPushed("equal", 150);
    var textField = document.getElementById(textFieldID);
    var formattedValue = textField.value.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("^", "**");
    try {
        textField.value = eval(formattedValue);
    } catch (err) {
        changeElementColor("checkKey", "red", "darkcyan", 150);
        console.error(err.message);
    }
}

function handleKeydown(key) {
    console.log("Нажата клавиша ", key.key + ". Её код", key.code);
    if (!key.repeat) {
        switch (key.key) {
            case ".":
            case "+":
            case "-":
                addDigit(key.key);
                break;
            case "/":
                addDigit("÷");
                break;
            case "*":
                addDigit("×");
                break;
            case "^":
                exponentiate();
                break;
            case "%":
                addDigit("%");
                break;
            case "!":
                calculateFactorial();
                break;
            case "(":
                addDigit(key.key);
                break;
            case ")":
                addDigit(key.key);
                break;
            case "Backspace":
                deleteLastDigit();
                break;
            case "c":
            case "C":
            case "Escape":
                cleanField();
                break;
            case "Enter":
            case "=":
                equal();
                break;
            default:
                break;
        }
        if (!isNaN(key.key)) { // проверка на присутствие только числа в строке
            addDigit(key.key)
        }
    }
}

function changeElementColor(elemID, newColor, prevColor, timeForNewColor) {
    var elem = document.getElementById(elemID);
    elem.style.background = newColor;
    setTimeout(function (prevColor) { elem.style.background = prevColor }, timeForNewColor, prevColor);
}

function makeButtonPushed(elemID, timeForPushed) {
    var elem = document.getElementById(elemID);
    elem.style.opacity = 0.5;
    setTimeout(function () { elem.style.opacity = 1 }, timeForPushed,);
}