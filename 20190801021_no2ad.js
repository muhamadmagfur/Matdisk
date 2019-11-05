var matriks_A = [[2,6,8] , [3,4,7] , [1,5,9]]

var a = matriks_A[0][0] * matriks_A[1][1] * matriks_A[2][2]
var b = matriks_A[0][1] * matriks_A[1][2] * matriks_A[2][0]
var c = matriks_A[0][2] * matriks_A[1][0] * matriks_A[2][1]

var x = matriks_A[2][0] * matriks_A[1][1] * matriks_A[0][2]
var y = matriks_A[2][1] * matriks_A[1][2] * matriks_A[0][0]
var z = matriks_A[2][2] * matriks_A[1][0] * matriks_A[0][1]

var hasil_1 = a+b+c
var hasil_2 = x+y+z

var Determinan = hasil_1 - hasil_2

console.log("Determinan dari")
console.log(matriks_A)
console.log("=============================")
console.log(Determinan)
console.log("=============================") 

