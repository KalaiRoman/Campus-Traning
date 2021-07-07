var b = "welcome";
var c = "kalaisurya chennai";
var a = prompt("enter the number:");

function test1() {
    let name = "kalai";
    if (a >= 18) {
        alert("suceess");
    } else {
        console.log("not success page");
    }
    for (i = 1; i <= 10; i++) {
        console.log("this is " + name + " " + i + " " + b + " " + this.c);
    }
    var x = prompt("entre the number:");
    var y = prompt("enter the number");
    if (x === y) {
        console.log("welcome too the page kalai success!!!!!!!!!");

    } else {
        console.log("not success in this page kalai!!!!!!!!!!!!!!!!!!!!!!!");
    }
}
test1();





// local variables

var place = "madurai";

function local() {

    // local variable
    let name = "kalai";
    let place = "chennai";
    console.log(name);
    console.log(place);
}
local();


// global varaiable

var names = "kalai";
var place = "chennai to mathur";
//global variables


function global() {

    // local vbariable
    let name = "thala";
    let place = "bangalore";
    console.log(name);
    console.log(names);
    console.log(place);

}
global();
console.log(place);