var matriks_A = [[1,2,3] , [0,1,4] , [5,6,0]]

var a = matriks_A[0][0] * matriks_A[1][1] * matriks_A[2][2]
var b = matriks_A[0][1] * matriks_A[1][2] * matriks_A[2][0]
var c = matriks_A[0][2] * matriks_A[1][0] * matriks_A[2][1]

var x = matriks_A[2][0] * matriks_A[1][1] * matriks_A[0][2]
var y = matriks_A[2][1] * matriks_A[1][2] * matriks_A[0][0]
var z = matriks_A[2][2] * matriks_A[1][0] * matriks_A[0][1]

var sarus1 = a + b + c
var sarus2 = x+y+z

var determinan = sarus1 - sarus2

var M11 = matriks_A[1][1] * matriks_A[2][2] - matriks_A[1][2] * matriks_A[2][1]
var M12 = matriks_A[1][0] * matriks_A[2][2] - matriks_A[1][2] * matriks_A[2][0]
var M13 = matriks_A[1][0] * matriks_A[2][1] - matriks_A[1][1] * matriks_A[2][0]

var M21 = matriks_A[0][1] * matriks_A[2][2] - matriks_A[1][2] * matriks_A[2][1]
var M22 = matriks_A[0][0] * matriks_A[2][2] - matriks_A[0][2] * matriks_A[2][0]
var M23 = matriks_A[0][0] * matriks_A[2][1] - matriks_A[0][1] * matriks_A[2][0]

var M31 = matriks_A[0][1] * matriks_A[1][2] - matriks_A[0][2] * matriks_A[1][1]
var M32 = matriks_A[0][0] * matriks_A[1][2] - matriks_A[0][2] * matriks_A[1][0]
var M33 = matriks_A[0][0] * matriks_A[1][1] - matriks_A[0][1] * matriks_A[1][0]

var C11 = +M11
var C12 = -M12
var C13 = +M13
var C21 = -M21
var C22 = +M22
var C23 = -M23
var C31 = +M31
var C32 = -M32
var C33 = +M33

var hasil_1 = C11/determinan
var hasil_2 = C21/determinan
var hasil_3 = C31/determinan
var hasil_4 = C12/determinan
var hasil_5 = C22/determinan
var hasil_6 = C32/determinan
var hasil_7 = C13/determinan
var hasil_8 = C23/determinan
var hasil_9 = C33/determinan

console.log("╔=================================╗")
console.log("|     Invers dari Matriks A       |")
console.log("╚=================================╝")
console.log("|          |"+hasil_1 , hasil_2 , hasil_3+" |            |")
console.log("|          |"+hasil_4 , hasil_5 , hasil_6+"|            |")
console.log("|          |"+hasil_7 , hasil_8 , hasil_9+"   |            |")
console.log("╚=================================╝")
