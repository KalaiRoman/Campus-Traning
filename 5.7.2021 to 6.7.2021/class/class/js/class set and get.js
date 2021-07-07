class sample {
    constructor(name, age, dob, contact, place) {
        this.name = name;
        this.age = age;
        this.dob = dob;
        this.contact = contact;
        this.place = place;

    }
    get users() {
        return [this.name, this.dob, this.place];
    }

    set change(name) {
        this.name = name;

        // this.contact = contact;
    }

}
const test = new sample("kalai", 23,
    "23,12.6.1998", 8778377119, "krishnagiri");

console.log(test.name);
console.log(test.age);
console.log(test.dob);
console.log(test.contact);
console.log(test.place);


console.log(test.users);

test.change = "thala";
test.change = 35;
// test.change = 7858585657865785;
console.log(test.name);
console.log(test.age);