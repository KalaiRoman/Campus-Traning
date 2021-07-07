function push() {
    var a = prompt("Enter the name: ");
    var b = [1, 2, 3, 4, 5];
    var c = b.push(a);
    document.getElementsByClassName("push").innerHTML = alert("This is add the new value in arrya inside:        " + c);
    document.getElementsByClassName("push").innerHTML = alert(b);
}