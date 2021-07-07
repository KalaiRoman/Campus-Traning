function keys() {


    var a = ["a", "b", "c", "d", "e", "f"];

    document.getElementById("keys").innerHTML = a;
    let y = "";
    for (let x in a) {
        y += x + "\n" + "<br>";
        document.getElementById("keys").innerHTML = y;
        // alert(x);
    }


}