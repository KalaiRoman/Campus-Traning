// const persons = [{
//         name: "kalai",
//         age: 24,
//         place: "chennai",

//     },
//     {
//         name: "roman",
//         age: 30,
//         place: "bangalore",

//     },
//     {
//         name: "thala",
//         age: 40,
//         place: "madurai",

//     }
// ];
// document.getElementById("findindex").innerHTML = (persons.findIndex(check).name);

// function check(people) {
//     return people.name === "kalai";
// }


function find() {
    const person = ["apple", "mango", "pineapple", "cherry", "banana"];

    document.getElementById("findindex").innerHTML = person.find(check);

    function check(item) {
        return item === "banana";
    }
}

function checkfind() {
    var a = [3, 6, 9, 10, 13, 16, 18, 19, 25, 27];
    document.getElementById("checkfind").innerHTML = a.findIndex(finds);

    function finds(items) {
        return items > 18;

    }
}