var key = require("array-intersection");
var a = [1,2,5,8,9,10];
var b = [4,2,8,10,11,12];
var c = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var hasil = key(a,b);
var hasil_1 = key(b,c);
var hasil_2 = key(c,a);
console.log("Irisan A dengan B = "+hasil);
console.log("irisan B dengan C = "+hasil_1);
console.log("irisan C dengan A = "+hasil_2);

var data_a = a.length;
var data_c = c.length;

console.log("kardinal A + Kardinal C : " + (data_a + data_c));
