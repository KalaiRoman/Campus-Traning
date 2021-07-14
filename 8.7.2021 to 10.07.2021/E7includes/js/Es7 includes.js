// includes

function button() {
    zer = prompt("entre the nmaes");
    const names = ["kalai", "thala", "chennai", "bangalore", "madurai"];

    let z = names.includes(zer);

    alert("this is name is sucess:     " + "\n" + z);
}

// includes check 
function buttons() {
    ters = parseInt(prompt("Enter the numbers:"));
    const num = [1, 2, 3, 4, 5, 6, 7, 78, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 21, 22, 23, 24];
    let g = num.includes(ters)
    if (g) {
        alert("success the number");
    } else {
        alert("Sorry the number is Wrong!!!!");
    }
}


// padstar for spacing method

function padstart() {
    var a = prompt("Enter the name:");
    var c = parseInt(prompt("Enter the number"));
    var b = a.padStart(c);
    alert(b);
}



function padend() {
    var a = prompt("Enter the name:");
    var c = parseInt(prompt("Enter the number"));
    var b = a.padEnd(c);
    alert(b);
}

// objects keys and values and entries
function key() {
    const persons = {
        name: "kalai",
        age: 24,
        place: "chennai"
    }

    // let u = Object.keys(persons);
    // console.log("\n" + u + "\n ");

    // let y = Object.values(persons);
    // console.log(y + "\n");

    for (texts in persons) {
        console.log(texts + ":" + "=>" + persons[texts]);
    }

    // object keys

    Object.values(persons).forEach((item) => {


        console.log(item + ":" + "=>");
    });

    Object.keys(persons).forEach((item, value) => {


        console.log(item + ":" + value);
    });
}

// entries objects
function entrie() {
    const entrie = {
        name: "thala",
        place: "chennai"
    }
    Object.entries(entrie).forEach(item => {
        console.log(item);
    });
}

// map object


function map() {
    const entrie = {
        name: "thala",
        place: "chennai"
    }
    Object.entries(entrie).map(item => {
        console.log(item[1] + "=>" + item[0]);
    });
}