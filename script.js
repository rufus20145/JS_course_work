// блок констант
const textFieldID = "textField"
const defaultColors = {}

function addDigit(value) {
    changeButtonColor("button" + value, "red", "#26ff00", 150);
    document.getElementById(textFieldID).value += value;
}

function cleanField() {
    changeButtonColor("clean", "red", "navy", 150);
    document.getElementById(textFieldID).value = "";
}

function deleteLastDigit() {
    changeButtonColor("back", "red", "#26ff00", 150);
    var textField = document.getElementById(textFieldID);
    if (textField.value.length > 0) {
        textField.value =
            textField.value.substring(0, textField.value.length - 1);
    }
}

function equal() {
    changeButtonColor("equal", "red", "gray", 150);
    var textField = document.getElementById(textFieldID);
    var formattedValue = textField.value.replaceAll('×', '*').replaceAll('÷', '/');
    if (checkTextField(formattedValue)) {
        textField.value = eval(formattedValue);
    }
}

function checkTextField(str) {
    if (typeof str != "string") {
        alert("Что ты мне передал????");
        return false;
    }
    if (str.match("(?!.*[\\+\\-\\*\\/]{2})^[+-]?\\d+.*$")) {
        return true;
    } else {
        console.log("\"" + str + "\" is not a valid math case.");
        return false;
    }
}
checkKey.onkeydown = checkKeyF;

function checkKeyF(key) {
    console.log(key.key, key.code);
    if (!key.repeat) {
        switch (key.key) {
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
                console.error("Will be added in future.");
                alert("Will be added in future.");
                break;
            case "%":
                console.error("Will be added in future.");
                alert("Will be added in future.");
                break;
            case "!":
                console.error("Will be added in future.");
                alert("Will be added in future.");
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
        if (!isNaN(key.key) && !isNaN(parseFloat(key.key))) {
            console.log("NUMBER");
            addDigit(key.key)
        }
        // console.log(key.key);
        // switch (key.key) {
        //     case value:

        //         break;

        //     default:
        //         break;
        // }
    }
}

function changeButtonColor(buttonID, newColor, prevColor, timeForNewColor, ) {
    var elem = document.getElementById(buttonID);
    elem.style.backgroundColor = newColor;
    setTimeout(function(prevColor) { elem.style.background = prevColor }, timeForNewColor, prevColor);
}