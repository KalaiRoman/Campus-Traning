function trim() {
    var a = "welcome too thala and company          !!!! ";
    var b = a.trim();
    document.getElementById("trim").innerHTML = b;
}


function starttrim() {
    var a = "     welcome";
    var b = a.trimStart();
    document.getElementById("starttrim").innerHTML = a;
    document.getElementById("starttrim").innerHTML = b;
}



function endtrim() {
    var a = "thanks       ";
    var b = a.trimEnd();
    document.getElementById("endtrim").innerHTML = b;
}