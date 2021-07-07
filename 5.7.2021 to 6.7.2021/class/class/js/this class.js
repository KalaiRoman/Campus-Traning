var a = 500;
var name = "kalai";
var age = 24;
var dob = "12.06 .1998";


function user() {

    function login() {
        var a = 100;
        console.log("this is value for:      " + a);
        console.log("ths value for :      " + this.name);
        console.log("this is age:      " + this.age);
        console.log("this is dob in user:     " + this.dob);
    }
    login()

}
user()


// another 

// var topar = 100;

// function tot() {
//     this.topar = 300;

// }
// var sampled = new tot();
// var sampled2 = new tot();
// sampled2.topar = 1000;

// alert(sampled.topar);
// alert(sampled2.topar);

// function use prototype


function bar() {
    var a = 100;
    this.a = 300;
}
bar.prototype.b = 400;
bar.prototype.c = "kalai";
bar.prototype.place = "chennai"

const news = new bar();
alert(news.a);
alert(news.b);
alert(news.c);
alert(news.place);