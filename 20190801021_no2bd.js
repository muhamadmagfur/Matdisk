var matriks_A = [[1,11,5,10] , [2,6,7,4] , [9,3,4,2] , [8,12,6,3]]

console.log("A1")
var a = matriks_A[0][0] * matriks_A[1][1] * matriks_A[2][2] * matriks_A[3][3]
var b = matriks_A[0][1] * matriks_A[1][2] * matriks_A[2][3] * matriks_A[3][0]
var c = matriks_A[0][2] * matriks_A[1][3] * matriks_A[2][0] * matriks_A[3][1]
var d = matriks_A[0][3] * matriks_A[1][0] * matriks_A[2][1] * matriks_A[3][2]

var u = matriks_A[0][0] * matriks_A[1][3] * matriks_A[2][2] * matriks_A[3][1]
var x = matriks_A[0][1] * matriks_A[1][0] * matriks_A[2][3] * matriks_A[3][2]
var y = matriks_A[0][2] * matriks_A[1][1] * matriks_A[2][0] * matriks_A[3][3]
var z = matriks_A[0][3] * matriks_A[1][2] * matriks_A[2][1] * matriks_A[3][0]

var hasil_1 = a+b+c+d
var hasil_2 = u+x+y+z

var DeterminanA1 = hasil_1 - hasil_2

console.log("Determinan dari A1")
console.log(matriks_A)
console.log("=============================")
console.log(DeterminanA1)
console.log("=============================") 


console.log("A2")
var e = matriks_A[0][0] * matriks_A[1][1] * matriks_A[2][3] * matriks_A[3][2]
var f = matriks_A[0][1] * matriks_A[1][2] * matriks_A[2][0] * matriks_A[3][3]
var g = matriks_A[0][2] * matriks_A[1][3] * matriks_A[2][1] * matriks_A[3][0]
var h = matriks_A[0][3] * matriks_A[1][0] * matriks_A[2][2] * matriks_A[3][1]

var i = matriks_A[0][0] * matriks_A[1][3] * matriks_A[2][1] * matriks_A[3][2]
var j = matriks_A[0][1] * matriks_A[1][0] * matriks_A[2][2] * matriks_A[3][3]
var k = matriks_A[0][2] * matriks_A[1][1] * matriks_A[2][3] * matriks_A[3][0]
var l = matriks_A[0][3] * matriks_A[1][2] * matriks_A[2][0] * matriks_A[3][1]

var hasil_1 = e+f+g+h
var hasil_2 = i+j+k+l

var DeterminanA2 = hasil_1 - hasil_2

console.log("Determinan dari A2")
console.log(matriks_A)
console.log("=============================")
console.log(DeterminanA2)
console.log("=============================") 


console.log("A3")
var m = matriks_A[0][0] * matriks_A[1][2] * matriks_A[2][3] * matriks_A[3][1]
var n = matriks_A[0][1] * matriks_A[1][3] * matriks_A[2][0] * matriks_A[3][2]
var o = matriks_A[0][2] * matriks_A[1][0] * matriks_A[2][1] * matriks_A[3][3]
var p = matriks_A[0][3] * matriks_A[1][1] * matriks_A[2][2] * matriks_A[3][0]

var q = matriks_A[0][0] * matriks_A[1][2] * matriks_A[2][1] * matriks_A[3][3]
var r = matriks_A[0][1] * matriks_A[1][3] * matriks_A[2][2] * matriks_A[3][0]
var s = matriks_A[0][2] * matriks_A[1][0] * matriks_A[2][3] * matriks_A[3][1]
var t = matriks_A[0][3] * matriks_A[0][1] * matriks_A[2][0] * matriks_A[3][2]

var hasil_1 = m+n+o+p
var hasil_2 = q+r+s+t

var DeterminanA3 = hasil_1 - hasil_2

console.log("Determinan dari A3")
console.log(matriks_A)
console.log("=============================")
console.log(DeterminanA3)
console.log("=============================") 

console.log("_____________________________")
var DeterminanA1
var DeterminanA2
var DeterminanA3

var hasil_akhir = DeterminanA1 + DeterminanA2 + DeterminanA3

console.log("hasil akhir determinan")
console.log(hasil_akhir)
console.log("_____________________________")

