var inputkeyboard = require('readline-sync');

var nilai = parseInt(inputkeyboard.question("masukan nilai"));

if (nilai >= 80){
    console.log("nilai A");
}else if ((nilai > 69) && (nilai < 80 )){
    console.log("nilai B");
}else

{
    console.log("nilai C");
}