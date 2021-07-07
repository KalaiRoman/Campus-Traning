var a = [1, 2, 3, 4, "roman", "thala"];


document.getElementById("splice").innerHTML = a;

function chceks() {
    let b = a.splice(2, 2, "company", "chennai");
    document.getElementById("splice1").innerHTML = "new array:  " + "\n" + a;
    document.getElementById("splice2").innerHTML = "removed array:   " + "\n" + b;
}