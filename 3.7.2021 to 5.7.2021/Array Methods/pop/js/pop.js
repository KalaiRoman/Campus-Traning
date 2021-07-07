function pop() {
    var a = [1, 2, 3, 4, 5, 6, 7];
    var c = [1, 2, 3, 4, 5, 6, 7];
    var b = a.pop();
    document.getElementsByClassName("pop").innerHTML = alert(c);
    document.getElementsByClassName("pop").innerHTML = alert(b);
    document.getElementsByClassName("pop").innerHTML = alert(a);

}




var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById("pop").innerHTML = a;

function check() {
    a.pop();
    document.getElementById("pop").innerHTML = a;

}