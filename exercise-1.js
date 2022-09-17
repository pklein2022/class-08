//Aim: Create a function that takes a "base number" as an argument. This function should return another function that takes a new argument 
//and returns the sum of the "base number" and the new argument.  Please check the examples below for a more precise representation of the behavior.
//Examples:
// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.

function makePlusFunction(x){
    function newFun(y){
        return x + y;
    }
    return newFun;
}
const plusFive = makePlusFunction(5);
console.log(plusFive(-8));

// function plusFive(y) {
//     return 5 + y;
// }

// plusFive(2)   // ➞    7

// plusFive(-8)  //  ➞    -3

// function makePlusFunction(a){
//     function newFun2(b){
//         return a + b;
//     }
//     return newFun2;
// }
const plusTen = makePlusFunction(10);
console.log(plusFive(plusTen(188)));
console.log(plusTen(188));

// // Calling makePlusFunction(10) returns a new function that takes an input,
// // and returns the result when adding 10 to it.

// const plusTen = makePlusFunction(10)

// plusTen(0)  //  ➞    10

// plusTen(188)   // ➞    198

// plusFive(plusTen(0))  //  ➞    15