function split() {
    var a = "welcome too company for campus avenue!!";
    var b = a.split(" ");
    document.getElementById("split").innerHTML = b;
}

function splitlimit() {
    var a = "welcome too company for campus avenue";
    var b = a.split(" ", 4);
    document.getElementById("splitlimit").innerHTML = b;
}