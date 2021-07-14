// advanced functions console copy to pasrt run the program
function advanced() {
    const firstname = () => {
        x = prompt("Enter the name:");
        y = prompt("Enter the place :");
        z = prompt("enter the age:");
        let name = x;
        let place = y;
        let age = z;
        const secondname = () => {

            console.log(name + "\n" + place + "\n" + age);
        }
        return secondname();

    }
    const overall = firstname();
    overall;

}
// add function\

function add(a, b) {
    console.log(a + b);
}
add(10, 20);

// addvanced
function added() {
    x = parseInt(prompt("Enter the number1"));
    y = parseInt(prompt("Enter the number2"));
    const add = (a, b) => alert("This is add number:  " + (a + b));
    add(x, y);
}

function mul() {
    x = parseInt(prompt("Enter the number1"));
    y = parseInt(prompt("Enter the number2"));
    const mul = (a, b) => alert("This is multiple number:  " + (a * b));
    mul(x, y);
}

// value check

const test = [
    "kalaia",
    "thala",
    "utharakumar",
    "kaniyakumariothruvanmalai"
]
console.log(test.map(test => test.length));


// function

const name = test => {
    a = parseInt(prompt("Enter the number::"));
    switch (true) {
        case (a > 36):
        case (a > 90):
            alert("pass");
            break;
        case (a < 35):
            alert("fail");
            break;
        default:
            alert("sorry u are number is not support data pls check!!!!!");
    }
}
document.getElementById("button").addEventListener("click", name);


// objects
function tested() {
    const persions = {
        name: "kalai",
        age: 24,
        place: "chennai",
        address: "madurai",
        set lan(x) {
            this.age = x;
        }
    };
    persions.lan = 34;
    console.log(persions.age);
    console.log(persions.place);
}

// objects
function carsdetails() {

    function cars(name, rate, discount, date) {
        this.name = name;
        this.rate = rate;
        this.discount = discount;
        this.date = date;
    }
    const carsed = new cars("odi", 120000, "12%", Date());
    const carsed1 = new cars("honda", 30000, "30%", Date());

    console.log(carsed.name);
    console.log(carsed1.name);
}

// functions
function div() {
    x = prompt("enter the number:");
    y = prompt("enter the number:");
    const div = (a, b) => a / b;
    alert(div(x, y));
}

// or

function mulsdiff() {
    // x = prompt("enter the number:");
    y = prompt("enter the number:");
    const mulsdiff = (a) => (b) => a * b;
    let z = mulsdiff(5);
    alert(z(y));
}