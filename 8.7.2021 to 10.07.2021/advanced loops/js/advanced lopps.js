// // loops

// // for lopp
// // forEach loop
// // for in
// // for of

// // for loop

const list = ["kalai", "surya", "nazriya"];
const obj1 = {
    name: "kalai",
    age: 25,
    place: "chennai"
}

for (let i = 0; i < list.length; i++) {
    console.log(list[i] + " " + " => " + " " + "welcome too thala dhoni" + "  " + "=>" + i);
}
console.log("???????????????????????");
// foreach used in array

list.forEach((y) => {
    console.log(y);
})

console.log("///////////////////////");
// for in used in objects


for (tr in obj1) {
    console.log(tr);
}
console.log("***************");




// for of used in array methohds
for (tr of list) {
    console.log(tr);
}
console.log("+++++++++++++++++++++++");

// for in array use only show index value

for (lert in list) {
    console.log(lert);
}
console.log("only in index value shows!!!!!!");

// object use in for in 
const obj2 = {
    2: "kalai",
    3: "thala",
    4: "raja",
    5: "roman",
}

for (tet in obj2) {
    console.log(tet);
}