var bacakeyboard = require('readline-sync');
var pi = 3.14;
var r = parseInt(bacakeyboard.question("masukakan jari-jari : "))

var luas = pi * r * r;

console.log("luas lingkaran = " + luas);