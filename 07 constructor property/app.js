//

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `my full name is ${this.firstName} ${this.lastName} i love react`
    );
  };
}
