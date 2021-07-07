// foreach check variable


var a = ["apple", "mango", "banana", "cherry", "pineapple", "jerry"];

a.forEach(function(items, index) {

    console.log(index);
    console.log(items);



});



// for in check


for (let x in a) {
    console.log(a[x], x);
}


// for of check


for (let y of a) {
    console.log(y[a], y);
}




// sample forin and for of check


function test() {
    var a = ["apple", "banana", "cherry", "pineapple", "banaa", "mango", "orange", "jerry"];
    a.forEach(function(item, index) {
        console.log(item + "  ==>  " + index);
    });
    // for in 
    for (let x in a) {
        console.log(x + " ==> " + a[x]);
    }

    // for of

    var b = ["a", "b", "c", "d", "e", "f", "g", "f"];
    for (let y of b) {
        console.log("=>" + " " + y);
    }
}
test();


// typeof check

var a = 4;
var b = typeof a;
var c = "kalaia";
// console.log(a);
var d = typeof c;

var e = true;
var f = typeof e;
console.log(b);
console.log(d);
console.log(f);



// hosting

// to check no variable name display: 
var a = 10;
a = 20;
var r = "comapny";
r = "kalai";
b = document.getElementById("host");
b.innerHTML = a;

x = document.getElementById("hosts");
x.innerHTML = r;