//constructor function
function Person(firstName, lastName) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.fullName = function () {
      console.log(
        `my full name is ${this.firstName} ${this.lastName} and i love react`
      );
    });
  console.log(this);
}
