var buttons = document.getElementById("button");
var input = document.querySelector(".inputs");
var ul = document.querySelector("ul");

function inputlengthcheck() {
    return input.value.length;
}

function addcreateelemtslist() {
    var list = document.createElement("li");
    list.appendChild(document.createTextNode(input.value));
    ul.appendChild(list);
    input.value = "";
}

function addelementlistclickbutton() {

    if (inputlengthcheck() > 0) {
        addcreateelemtslist();
    }
}

function AddElementKeyPress(event) {

    if (inputlengthcheck() > 0 && event.keyCode === 13) {

        addcreateelemtslist();
    }

}
buttons.addEventListener("click", addelementlistclickbutton);
input.addEventListener("keypress", AddElementKeyPress);




// color functions


var colors1 = document.getElementById("colorsset");
var body = document.getElementById("bodys");
var colors2 = document.getElementById("colorsset1");

// body.style.background = "blue";


colors1.addEventListener("input", function() {

    body.style.background = "linear-gradient(to right," + colors1.value + ", " + colors2.value + ")";

})
colors2.addEventListener("input", function() {

    body.style.background = "linear-gradient(to right," + colors1.value + ", " + colors2.value + ")";
})