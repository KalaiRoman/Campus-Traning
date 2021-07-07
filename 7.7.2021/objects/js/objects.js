var a = {
    name: "kalai",
    age: 34,
    place: "chennai"
};



document.getElementById("objects").innerHTML = "this is old:   " + a.name + " is  " + a.age + " is " + a.place;


// objects 

const users = {
    name: "kalai",
    age: 24,
    contact: 8778377119,
    place: "chennai",
    address: ["apple", "banana", "cherry", "pineapple", "mango"],
    customer: {
        customername: "sample",
        offers: "56%",
        bikerate: "15000",
        discount: "10%"
    },
    persion: function() {
        console.log("this is :" + users.name + " " + "good person" + "  " + users.age + "  " + "welcome too user country" + " " + users.place);
    }

};
console.log(users.persion());
console.log(users.customer.offers);
console.log(users.address);



// delete objects


var tests = {
    name: "kalai",
    age: 35,
    place: "chennai"
};

console.log(tests.name);
console.log(tests.age);
console.log(tests.place);

delete tests.name;
delete tests.age;
console.log(tests.age);

console.log(tests.name);