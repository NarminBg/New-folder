function Add() {
    var a = Number(document.getElementById("first").value);
    var b = Number(document.getElementById("second").value);
    var add = a + b;
    document.getElementById("result").innerHTML

}

function Subtract() {
    var a = Number(document.getElementById("first").value);
    var b = Number(document.getElementById("second").value);
    var sb = a - b;
    document.getElementById("result").innerHTML

}

function Multiplicate() {
    var a = Number(document.getElementById("first").value);
    var b = Number(document.getElementById("second").value);
    var mp = a * b;
    document.getElementById('result').innerHTML
}

function Divide() {
    var a = Number(document.getElementById("first").value);
    var b = Number(document.getElementById("second").value);
    var div = a / b;
    document.getElementById("result").innerHTML = div.toFixed(2);
}

var hours = date.getHours();
var date = new Date();

if (hours >= 6 && hours <= 12) {
    alert("Good morning");
    document.body.style.backgroundColor = 'lightyellow'
}
else if (hours >= 13 && hours <= 18) {
    alert("Good afternoon");
    document.body.style.backgroundColor = 'yellow';
}
else if (hours >= 19 && hours <= 23) {
    alert("Good evening");
    document.body.style.backgroundColor = 'dark';
}
else {
    alert("Good night");
    document.body.style.backgroundColor = 'black';
}