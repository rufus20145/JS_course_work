checkKey.onkeydown = handleKeydown;

// блок констант
const textFieldID = "textField"
const COLORS = { NUMBER: "Lime", CLEAN: "YellowGreen", BACK: "Yellow", EQUAL: "Gray", PUSHED_NUMBER: "#26ff006c", PUSHED_CLEAN: "#9acd326c", PUSHED_BACK: "#ffff006c", PUSHED_EQUAL: "#8080806c" };


function addDigit(value) {
    changeButtonColor("button" + value, COLORS["PUSHED_NUMBER"], COLORS["NUMBER"], 150);
    var elem = document.getElementById(textFieldID);
    elem.value += value;
}


function cleanField() {
    changeButtonColor("clean", COLORS["PUSHED_CLEAN"], COLORS["CLEAN"], 150);
    document.getElementById(textFieldID).value = "";
}

function deleteLastDigit() {
    changeButtonColor("back", COLORS["PUSHED_BACK"], COLORS["BACK"], 150);
    var textField = document.getElementById(textFieldID);
    if (textField.value.length > 0) {
        textField.value =
            textField.value.substring(0, textField.value.length - 1);
    }
}


function equal() {
    changeButtonColor("equal", COLORS["PUSHED_EQUAL"], COLORS["EQUAL"], 150);
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
    if (str.match("(?!.*[\\+\\*\\/\\.]{2})(?!.*[-]{2})^[+-]?\\d+[\\d.\\/\\*\\-\\+]*$")) {
        return true;
    } else {
        // checkKey.style.background = "red"; // менять цвет фона при неправильном выражении
        console.log("\"" + str + "\" is not a valid math case.");
        return false;
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
        if (!isNaN(key.key)) { //точная проверка на присутствие только числа в строке
            addDigit(key.key)
        }
    }
}

function changeButtonColor(buttonID, newColor, prevColor, timeForNewColor) {
    var elem = document.getElementById(buttonID);
    elem.style.background = newColor;
    setTimeout(function(prevColor) { elem.style.background = prevColor }, timeForNewColor, prevColor);
}