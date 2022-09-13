

var a = 10;
var b= 20;
var a = 30;  // It can be updated and re-declared into the scope.
var c = a+b;
console.log(c);



let x = 10;
let y = 20;

//let a = 30;  // It can be updated but cannot be re-declared into the scope

x=40;
let z = x+y;
console.log(z)


const e = 10;
const f= 20;
//const a = 30; // It cannot be updated or re-declared into the scope.
 //a = 40;

 const g = e+f;
 console.log(g)




// var fun;
// {
// var a =10;
// let b = 20;
// const c = 40;
// b = 30;
// console.log(a+b+c)


// var f = 20;
// var g = 60;
// h = f/g;
// console.log(h)
// }