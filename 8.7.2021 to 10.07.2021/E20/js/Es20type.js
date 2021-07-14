// type check
// PaserInt
function parsint() {
    var a = parseInt(prompt("Enter the number:"));
    var b = typeof(a);
    alert(b);
}
// parseFloat

function parsfloat() {
    var a = parseFloat(prompt("Enter the number"));
    var b = typeof(a);
    alert(b)
}

// numbercheck in string svaed number but result ijn number textEmphasisStyle: 

function numbertype() {
    var c = prompt("enter the number:");
    var a = Number(c);
    var b = typeof(a);
    alert(b);
}

// string check

function stringtype() {
    var c = parseInt(prompt("enter the number:"));
    var a = String(c);
    var b = typeof(a);
    alert(b);
}

// boolean

function boolean() {
    var c = prompt("enter the number:");
    var a = Boolean(c);
    var b = typeof(a);
    alert(b);
}


// object check

function obj1() {
    const bike = {
        newbikes: {
            bikename: "Fz",
            rate: 12000,
            place: "krishnagiri",
            discount: "20%"
        },
        personname: "kalai",
        date: Date(),
        contact: 6574839201,
        place: "chennai",
        overall: {
            totalamount: 115000,
            customersignature: "kalaisurya",
            warrienty: "one year"
        }
    }
    let result = bike ? .overall ? .totalamount ? ? ;
    console.log(result);
    Object.entries(bike).map((item) => {
        console.log(item[0] + "=>" + item[1]);

    });
}