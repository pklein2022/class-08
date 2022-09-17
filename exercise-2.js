//Aim: Create a function that takes a string as input, capitalizes a letter if its ASCII code is even, and returns its lower case version if its ASCII
// code is odd.
function asciiCapitalize(myInput) {
  let myOutput = "";
  for (let i = 0; i < myInput.length; i++) {
    let code = myInput.charCodeAt(i);
    if (code % 2 === 0) {
      // code is even
      myOutput += myInput.charAt(i).toUpperCase();
    } else {
      // code is odd
      myOutput += myInput.charAt(i).toLowerCase();
    }
  }
  return myOutput;
}

// Examples

console.log(asciiCapitalize("to be or not to be!")); //➞    "To Be oR NoT To Be!"

console.log(asciiCapitalize("THE LITTLE MERMAID"));    //➞    "THe LiTTLe meRmaiD"

console.log(asciiCapitalize("Oh what a beautiful morning."));   // ➞    "oH wHaT a BeauTiFuL moRNiNg."
