//Defined below is a user class.

class User {
  name;
  constructor(newName) {
    this.name = newName;
    console.log(`A user named ${newName} was created.`);
  }

  printName() {
    console.log(this.name);
  }
}
let myUser = new User("Katelyn");
console.log(myUser);
myUser.printName();

let myUser2 = new User("Jason");
console.log(myUser2);
myUser2.printName();

//   Whenever a user is created, be sure to store the parameter name in the constructor to the defined property called name.

//   When an instance calls printName, it should print out the user's name.
