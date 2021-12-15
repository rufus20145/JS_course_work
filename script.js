checkKey.onkeydown = handleKeydown;
checkKey.onmousedown = function (event) {
    console.log(event);
    // console.log("pageX =", event.pageX, "pageY =", event.pageY);
    // console.log("screenX =", event.screenX, "screenY =", event.screenY);
    // console.log("clientX =", event.clientX, "clientY =", event.clientY);
    // console.log("offsetX =", event.offsetX, "offsetY =", event.offsetY);



};



// блок констант
const textFieldID = "textField"
const COLORS = { NUMBER: "Lime", CLEAN: "YellowGreen", BACK: "Yellow", EQUAL: "Gray", PUSHED_NUMBER: "#26ff006c", PUSHED_CLEAN: "#9acd326c", PUSHED_BACK: "#ffff006c", PUSHED_EQUAL: "#8080806c" };


function addDigit(value) {
    makeButtonPushed("button" + value, 150);
    // changeElementColor("button" + value, COLORS["PUSHED_NUMBER"], COLORS["NUMBER"], 150);
    var elem = document.getElementById(textFieldID);
    elem.value += value;
}

function cleanField() {
    changeElementColor("clean", COLORS["PUSHED_CLEAN"], COLORS["CLEAN"], 150);
    document.getElementById(textFieldID).value = "";
}

function deleteLastDigit() {
    changeElementColor("back", COLORS["PUSHED_BACK"], COLORS["BACK"], 150);
    var textField = document.getElementById(textFieldID);
    if (textField.value.length > 0) {
        textField.value =
            textField.value.substring(0, textField.value.length - 1);
    }
}

function equal() {
    changeElementColor("equal", COLORS["PUSHED_EQUAL"], COLORS["EQUAL"], 150);
    var textField = document.getElementById(textFieldID);
    var formattedValue = textField.value.replaceAll('×', '*').replaceAll('÷', '/');
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

function changeElementColor(elemID, newColor, prevColor, timeForNewColor) {
    var elem = document.getElementById(elemID);
    elem.style.background = newColor;
    setTimeout(function (prevColor) { elem.style.background = prevColor }, timeForNewColor, prevColor);
}

// todo переделать все нажатия таким методом
function makeButtonPushed(elemID, timeForPushed) {
    var elem = document.getElementById(elemID);
    elem.style.opacity = 0.5;
    setTimeout(function () { elem.style.opacity = 1 }, timeForPushed,);
}