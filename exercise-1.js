// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.
function makePlusFunction(num1){
    return function (){
    console.log((makePlusFunction) + (num2));
    }
}
const plusFive = makePlusFunction(5);
plusFive(2)    //➞    7

plusFive(-8)   // ➞    -3

// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.

const plusTen = makePlusFunction(10)

plusTen(0)   // ➞    10

plusTen(188)  //  ➞    198

plusFive(plusTen(0))   // ➞    15