var a =[10,20,5];
var b =[10,10,10];

var jarak_jalur_a = a[0] + a[1] + a[2];
var jarak_jalur_b = b[0] + b[1] + b[2];

if (jarak_jalur_a > jarak_jalur_b){
    console.log ("jalur terpanjang: " + jarak_jalur_a)
    console.log ("jalur terpanjang: " + jarak_jalur_b)
}
else{
    console.log ("jalur terpanjang:" + jarak_jalur_b)
    console.log ("jalur terpanjang:" + jarak_jalur_a)

}