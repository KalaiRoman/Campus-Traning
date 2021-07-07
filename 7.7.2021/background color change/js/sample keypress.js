var colors1 = document.getElementById("backcolor1");
var colors2 = document.getElementById("backcolor2");
var body = document.getElementById("bodystyle");
// console.log(body);
// body.style.background = "blue";

function colorschange() {
    body.style.background = "linear-gradient(to right," + colors1.value + ", " + colors2.value + ")";
}


colors1.addEventListener("input", colorschange);



colors2.addEventListener("input", colorschange);