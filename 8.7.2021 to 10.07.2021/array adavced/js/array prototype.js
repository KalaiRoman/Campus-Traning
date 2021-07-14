// array prototype

Array.prototype.myUcase = function() {

    for (var i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }


};
Array.prototype.texts = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toLowerCase();
    }

}


// tupper and lower case converted
const a = ["kalai", "surya"];
a.myUcase();
document.getElementById("demo").innerHTML = a;
const b = ["KALAI", "SURYA"];
let x = b.texts();
console.log(b);




// array elements replace names

const facebooks = ["whatsapp", "instagram", "post", "thala", "ajith", "dilip"];

facebooks[2] = "kalaisurua";
facebooks[5] = "welcome too chennai";
console.log(facebooks);



// replace command

consat = "welcome too kalaisurya";
// replace the name
let roman = consat.replace("kalaisurya", "company");

console.log(consat);
console.log(roman);





// upper case
consate = "welcome too kalaisurya";
let ford = ["aplle", "banana"];
let kal = consate.toUpperCase();
console.log(kal);
ford.myUcase();;
console.log(ford);



// array prototype use in missing names are add used


class youtube {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

};
youtube.prototype.place = "chennai";

const results = new youtube("ooo", "red");
console.log(results);


// condition check

const aer = [1, 6, 9, 13, 17, 21, 27, 29];
let even = [];
let odd = [];
for (let i = 0; i < aer.length; i++) {
    if (i % 2 == 0) {
        even.push(i);
    } else {
        odd.push(i);
    }
}
console.log(even);
console.log(odd);

// function filter:

// const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

// function check(cheked) {
//     for (let i = 1; i > cheked; i++) {
//         if (cheked % i == 0) {
//             return i;
//         }
//     }
//     return cheked > 1;
// }
// console.log(v.filter(check));