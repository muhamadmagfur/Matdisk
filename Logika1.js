var inputkeyboard = require('readline-sync') ;

var nilai = parseInt(inputkeyboard.question("masukan nilai")) ;

if (nilai > 70){
    console.log("lulus") ;
}else
{
    console.log("tidak lulus") ;
}