// splice one element


// outpu for 1,2 answer
const a = [1, 2, 3, 4, 5, 6, 7, 8];
let x = a.splice(2);
console.log("this is removed values:     " + x);
console.log("this is remaining values:    " + a);

// add values


// except output 1,4,5,6,7,8
const b = [1, 2, 3, 4, 5, 6, 7, 8];
let y = b.splice(1, 2);
console.log("this removed values:    " + y);
console.log("this is remaining values:   " + b);

// add new cvalues


// output for 1,2,kalai,surya,6,7,8
const c = [1, 2, 3, 4, 5, 6, 7, 8];
let z = c.splice(2, 4, "kalai", "surya");
console.log("this removed values:    " + z);
console.log("this is remaining values:   " + c);


// 

const d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let s = d.splice(1, 5);
console.log(s);
console.log(d);