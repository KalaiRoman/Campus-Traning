// array advance push method
function pushed() {
    const cars = ["apple", "banana", "cherry", "mango", "jerry", "pineapple"];
    const b = [];

    for (i = 0; i < cars.length; i++) {
        b.push(i);
    }
    alert("This value is pushed:" + "\n" + b);

}
// push method used multiple the number
function pushmul() {
    const mulnum = [1, 2, 3, 4, 5, 6];
    const mulnum1 = [];

    let multiples = mulnum.forEach((x) => {

        mulnum1.push(x * 2);


    });
    multiples;

    alert("this is multiple values:  " + "\n" + mulnum1);
}
// map use in array
function map() {
    let mulnum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let mulnum3 = [];

    let multiples2 = mulnum2.map((y) => {

        mulnum3.push(y * 3);
    });
    multiples2;
    alert("this is map array multiple value:" + "\n" + mulnum3);
}
// filter array
function filter() {
    const z = [1, 4, 9, 13, 17, 19, 26, 29, 33, 38, 43, 47, 51, 57];


    let filters = z.filter(z => z > 5);
    alert("the filter the value:" + "\n" + filters);
}

// mapping function
function mapping() {
    const people = [{
            firstname: "kalai",
            lastname: "surya",
            place: "chennai",
            contact: 7487648754
        },
        {
            firstname: "harin",
            lastname: "krish",
            place: "chennai1",
            contact: 74879078540
        },
        {
            firstname: "sathish",
            lastname: "kumar",
            place: "chennai",
            contact: 7487648754
        }
    ];

    let user1 = people.map((val) => {
        let cal = [val.firstname, val.lastname, val.place, val.contact].join("  ");
        let ob1 = { cal };
        return ob1;


    });
    console.log(user1);
}
// finindex
function findindex() {
    const a = [1, 4, 7, 9, 12, 14, 17, 19, 21, 24, 26, 28, 31, 37, 39, 41, 44, 47, 49, 51, 53, 57];

    let v = a.findIndex(f => f > 21);
    alert("thiis is findindex values: " + "\n" + v);
}
// reduce array
function reduce() {
    const redt = [2, 8, 10, 10, 20];

    let redf = redt.reduce((accumorate, num) => {

        return accumorate + num;

    }, 1);
    alert("this is reduce value in array:" + "\n" + redf);
}
// splice arry methods
function splice() {
    const spli = ["jun", "feb", "mar", "apr", "may", "june"];

    let spli1 = spli.splice(2, 3, "kalai", "thala", "mathur");

    alert("this is splice the values:" + "\n" + spli1);
    alert("this is splice remaing values:" + "\n" + spli);
}
// fill

const terd = ["kalai", "surya"];

let fil = terd.fill(2);
console.log(fil);

// find
function find() {
    const tft = [{

            name: "kalai",
            age: 34,
            place: "chennai",
            address: "mathur"
        },
        {
            name: "kalai2",
            age: 34,
            place: "chennai",
            address: "mathur"
        }
    ];

    let teft = tft.find(f => {
        return f.name === "kalai2";
    });
    console.log(teft);
}
// findindex
function findindex() {
    const splir = ["jun", "feb", "mar", "apr", "may", "june"];

    let fint = splir.findIndex(f => f === "may");
    alert("this is findindex value:" + "\n" + fint);
}

// splice

let arr = [5, 1, 8, 10, 13, 15, 18, 20, 22, 24, 26, 29, 31];
let yu = arr.splice(1, 5, "thala", "raja", "aA", "a");
console.log(arr);