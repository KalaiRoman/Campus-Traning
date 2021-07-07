class claculator {
    constructor(tamil, english, maths, science, socialscience) {
        this.tamil = tamil;
        this.english = english;
        this.maths = maths;
        this.science = science;
        this.socialscience = socialscience;

    }
    get cal() {
        return this.cals();
    }
    cals() {
        return this.tamil + this.english + this.maths + this.science + this.socialscience;
    }
    get mul() {
        return this.muls();
    }
    muls() {
        return this.tamil + this.english - this.maths + this.science - this.socialscience;
    }
    get div() {
        return this.divs();
    }
    divs() {
        return this.tamil / this.english;
    }
}
var a = parseInt(prompt("Enter the tamil mark:"));
var b = parseInt(prompt("Enter the english mark:"));
var c = parseInt(prompt("Enter the maths mark:"));
var d = parseInt(prompt("Enter the science mark:"));
var e = parseInt(prompt("Enter the socialscience mark:"));

const total = new claculator(a, b, c, d, e);
console.log("this ti total marks:     " + total.cal);
console.log("this is multiple marks in total:      " + total.mul);
console.log("this is divide the number:        " + total.div);