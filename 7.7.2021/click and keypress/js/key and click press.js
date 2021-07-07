var button = document.getElementById("button");
var input = document.getElementById("inputbox");
var ul = document.querySelector("ul");


function inputlength() {
    return input.value.length;
}

function addeventlistenerAfter() {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addAfterClick() {
    if (inputlength() > 0) {
        addeventlistenerAfter()
    }
}

function addAfterPress(event) {
    if (inputlength() > 0 && event.keyCode === 13) {
        addeventlistenerAfter()
    }
}
button.addEventListener("click", addAfterClick)
    // console.log("kalaisurya welcome!!!!!!!!!!");



input.addEventListener("keypress", addAfterPress)