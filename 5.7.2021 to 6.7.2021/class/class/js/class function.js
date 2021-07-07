// function use in class



function persons() {
    this.name = "name";
    this.age = "age";
    this.contact = "conatact";
    this.place = "place";
}
var a = prompt("Enter the name:");
var b = prompt("enter the age:");
var c = prompt("enter the contact:");
var d = prompt("enter the place");
var values = new persons();
console.log(values.name = a);
console.log(values.age = b);
console.log(values.contact = c);
console.log(values.place = d);