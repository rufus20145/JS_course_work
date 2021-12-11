// блок констант
const textFieldID = "textField"

function addDigit(value) {
    document.getElementById(textFieldID).value += value;
}

function cleanField() {
    document.getElementById(textFieldID).value = "";
}

function deleteLastDigit() {
    var textField = document.getElementById(textFieldID);
    if (textField.value.length > 0) {
        textField.value =
            textField.value.substring(0, textField.value.length - 1);
    }
}

function equal() {
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