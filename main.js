var num1;
var num2;
var answer;

function addition() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    answer = parseInt(document.getElementById("inp1").value) + parseInt(document.getElementById("inp2").value);
    document.getElementById("ans").innerHTML = answer;
    document.getElementById("symbol").innerHTML = "+";

}

function subtract() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    answer = num1 - num2;
    document.getElementById("ans").innerHTML = answer;
    document.getElementById("symbol").innerHTML = "-";

}

function multiply() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    answer = num1 * num2;
    document.getElementById("ans").innerHTML = answer;
    document.getElementById("symbol").innerHTML = "×";
}


function divide() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    answer = num1 / num2;
    document.getElementById("ans").innerHTML = answer;
    document.getElementById("symbol").innerHTML = "÷";
}

function cos() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    document.getElementById("ans").innerHTML = Math.cos(num1) + " , " + Math.cos(num2)
    document.getElementById("symbol").innerHTML = "cos()"
}

function sin() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    document.getElementById("ans").innerHTML = Math.sin(num1) + " , " + Math.sin(num2)
    document.getElementById("symbol").innerHTML = "sin()"
}

function tan() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    document.getElementById("ans").innerHTML = Math.tan(num1) + " , " + Math.tan(num2)
    document.getElementById("symbol").innerHTML = "tan()"
}

function root() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    document.getElementById("ans").innerHTML = Math.sqrt(num1) + " , " + Math.sqrt(num2)
    document.getElementById("symbol").innerHTML = "sqrt"
}

function acos() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    document.getElementById("ans").innerHTML = Math.acos(num1) + " , " + Math.acos(num2)
    document.getElementById("symbol").innerHTML = "acos()"
}

function asin() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    document.getElementById("ans").innerHTML = Math.asin(num1) + " , " + Math.asin(num2)
    document.getElementById("symbol").innerHTML = "asin()"
}

function atan() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    document.getElementById("ans").innerHTML = Math.atan(num1) + " , " + Math.atan(num2)
    document.getElementById("symbol").innerHTML = "atan()"
}

function power() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    answer = Math.pow(num1, num2);
    document.getElementById("ans").innerHTML = answer;
    document.getElementById("symbol").innerHTML = "^";

}

function abs() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    document.getElementById("ans").innerHTML = Math.abs(num1) + " , " + Math.abs(num2)
    document.getElementById("symbol").innerHTML = "abs"

}

function floor() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    document.getElementById("ans").innerHTML = Math.floor(num1) + " , " + Math.floor(num2)
    document.getElementById("symbol").innerHTML = "floor"
}

function ceil() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    document.getElementById("ans").innerHTML = Math.ceil(num1) + " , " + Math.ceil(num2)
    document.getElementById("symbol").innerHTML = "ceil"
}

function round() {
    num1 = document.getElementById("inp1").value;
    num2 = document.getElementById("inp2").value;

    document.getElementById("ans").innerHTML = Math.round(num1) + " , " + Math.round(num2)
    document.getElementById("symbol").innerHTML = "round"
}