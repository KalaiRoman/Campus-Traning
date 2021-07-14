// conditon statements

// syntax  condition?expres1:expres2;
function sample(bool) {
    return bool;
}

var test = sample(true) ? "welcome" : "thanks";

// test

var tested = "this is check names and password true:" + (sample(true) ? "password is correct" : "user password is wrong!!!");
tested;
// p = prompt("Enter the names true or false!!!:");

function check() {
    if (sample(false)) {
        console.log("welcome!!!!!!!");
    } else {
        console.log("thanks for wrong password!!!!!!!");
    }
}
check();


// switch captionSide: 

// syntax

// switch (condition) {
//     case 1:
//         console.log("");
//         break;
//     case 2:
//         console.log("");
//         break;
//     default:
//         console.log("");
// }


// exaple program
function student() {
    a = parseInt(prompt("Enter The Student Mark:  "));

    switch (true) {
        case (a > 90):
            alert("first class mark !!!!!");
            break;
        case (a > 80):
            alert("second class mark!!!!");
            break;
        case (a > 70):
            alert("third class mark!!!");
            break;
        case (a > 60):
            alert("fourth class mark!!!");
            break;
        case (a > 50):
            alert("fifth clas mark!!!");
            break;
        case (a > 36):
            alert("sixth class mark!!!");
            break;
        case (a < 35):
            alert("fail!!");
            break;
        default:
            alert("Unknown Marks student!!");
    }
}

// mobile phone rate check mobile
function mobiles() {
    mobile = prompt("Enter The Mobile Name Rates:");


    switch (true) {
        case (mobile === "samsung"):
            alert("Rs" + ":" + "100000");
            break;
        case (mobile === "nokia"):
            alert("Rs" + ":" + "920000");
            break;
        case (mobile === "vivo"):
            alert("Rs" + ":" + "890000");
            break;
        case (mobile === "vivo vs6"):
            alert("Rs" + ":" + "850000");
            break;
        case (mobile === "mi"):
            alert("Rs" + ":" + "16000");
            break;
        case (mobile === "1+"):
            alert("Rs" + ":" + "1220000");
            break;
        case (mobile === "moto"):
            alert("Rs" + ":" + "45000");
            break;
        case (mobile === "mi note7"):
            alert("Rs" + ":" + "9000");
            break;
        case (mobile === "mi note12"):
            alert("Rs" + ":" + "10000 ");
            break;
        default:
            alert("u are search mobiles names no!!!!!");

    }

}


// check greeks

var name = "kalai";
var age = 30;
var place = "mathur";
var address = "chennai";

const obj1 = `this is good ${name} for comapny work in ${address} for the age in ${age-7} and the succes live in native for ${place}`;
console.log(obj1);


// funntion use

function correct(name, age, place, address, total) {
    console.log(`THIS IS ${name} and ${age} and ${place} and ${address} and ${total}`);
}
correct("kalai", 24, "mathur", "chennai", 498);


// switch
var Adds = "b";
switch (Adds) {
    case "a":
    case "b":
        console.log("a success the mark");
        console.log("b success the mark")
        break;
    case "c":
        console.log("c is matching number!!");
        break;
    default:
        console.log("not matchin this page!!!");
        break;

}