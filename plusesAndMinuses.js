// When a user clicks the + element, the count should increase by 1 on screen.
//var beginningValue = parseFloat(document.getElementById("user-Value").innerHTML);
//var negativeOkay
const addfunction = function () {
    let newValue = parseFloat(document.getElementById("user-Value").innerHTML);
    document.getElementById("user-Value").innerHTML = (newValue + 1);
}

const subtractfunction = function () {
    let newValue = parseFloat(document.getElementById("user-Value").innerHTML);
    document.getElementById("user-Value").innerHTML = (newValue - 1);
}
//document.getElementById("radio-IDYES").addEventListener("click", function(){ alert("Hello World!"); });
// When a user clicks the – element, the count should decrease by 1 on screen.
//document.getElementById("radio-IDNO").addEventListener("click", function(){ alert("Hello World!"); });

document.getElementById('add-ID').addEventListener('click', addfunction);

document.getElementById('minus-ID').addEventListener('click', subtractfunction);

