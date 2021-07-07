function copywithins() {
    var a = [1, 2, 3, 4, "kalai", "roman", 6, "thala", "nazriya", 7, "apple"];
    var c = [1, 2, 3, 4, "kalai", "roman", 6, "thala", "nazriya", 7, "apple"];
    var b = a.copyWithin(5, 2);
    document.getElementsByClassName("copywithinss").innerHTML = alert(c);
    document.getElementsByClassName("copywithinss").innerHTML = alert(b);
}