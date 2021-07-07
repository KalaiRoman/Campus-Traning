function slice() {
    var a = ["apple", "banana", "cherry", "pineapple", "mango", "cherry", "orange", "jerry"];
    var b = a.slice(1, 6);
    document.getElementById("slice").innerHTML = b;
}

function slices() {
    var a = ["apple", "banana", "cherry", "pineapple", "mango", "cherry", "orange", "jerry"];
    var b = a.slice(-4, -1);
    document.getElementById("slices").innerHTML = b;
}