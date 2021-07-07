function random() {

    var a = ["kalai", "apple", "banana", "cherry", "pineapple"]
    var b = Math.floor(Math.random() * a.length);
    document.getElementsByClassName("random").innerHTML = alert("This is random number:        " + a[b]);

}