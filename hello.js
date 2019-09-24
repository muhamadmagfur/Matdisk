console.log("hello");
var masukankeyboard = require('readline-sync');

var a = parseInt(masukankeyboard.question("masukan nilai A :"));
var b = parseInt(masukankeyboard.question("masukan nilai B :"));

console.log(a*b);
console.log(a+b);
console.log(b-a);
console.log(a/b);