// sample class

class cars {
    constructor(name, age, place, address) {
        this.name = name;
        this.age = age;
        this.place = place;
        this.address = address;

    }
}
const test = new cars("kalai", 23, "chennai", "mathur");
console.log(test.name);
console.log(test.age);
console.log(test.place);
console.log(test.address);


// super class use


class tested {
    constructor(tamil, english, maths, science, socialscience) {
        this.tamil = tamil;
        this.english = english;
        this.maths = maths;
        this.science = science;
        this.socialscience = socialscience;
    }

}
class test2 extends tested {
    constructor(tamil, english, maths, science, socialscience, totals) {
        super(tamil, english, maths, science, socialscience);
        this.totals = totals;
    }
}
const sample = new test2(98, 97, 99, 99, 99, 496);
console.log(sample.tamil);
console.log(sample.english);
console.log(sample.maths);
console.log(sample.science);
console.log(sample.socialscience);
console.log(sample.totals);