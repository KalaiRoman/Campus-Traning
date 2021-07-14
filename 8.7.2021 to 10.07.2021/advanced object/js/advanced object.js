class bike {
    constructor(name, type, place) {
        this.name = name;
        this.type = type;
        this.place = place;
    }
    tance() {
        console.log(` I am ${this.name} is type of ${this.type} and my location for ${this.place}`);
    }

}
class Fz extends bike {
    constructor(name, type, place, rate, discount) {
        super(name, type, place);
        this.name = name;
        this.type = type;
        this.place = place;
        this.rate = rate;
        this.discount = discount;
    }
    rates() {
        console.log(`my anme is ${this.name} type of ${this.type} and place for the ${this.place}`);
    }
    get bikerate() {
        return calprice();
    }
    calprice() {
        console.log(this.rate / this.discount);
    }
    set changerate(b) {
        this.rate = b;
    }


}
Fz.prototype.names = function() {
    console.log(`this is ${this.name} and for ${this.rate}`);
}


const bikemode = new Fz("plusor", "ns 200", "chennai");
const bikemode1 = new Fz("Apache", "RTR 220", "bangalore", "120000", "20");



console.log(bikemode.tance());
console.log(bikemode1.tance());
console.log(bikemode1.rates());
console.log(bikemode1.calprice());
bikemode1.changerate = "125000";
console.log(bikemode1.rate);
console.log(bikemode1.names());



// object keys and values get
function obj1() {
    const cars = {
        name: "honda",
        place: "salem",
        rate: "500000"
    }
    document.getElementById("demo").innerHTML = alert(Object.keys(cars));

}

//