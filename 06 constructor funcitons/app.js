//

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `my full name is ${this.firstName} ${this.lastName} i love react`
    );
  };
  console.log(this);
}

const john = new Person('jo', 'mo');
console.log(john.fullName());
const toll = new Person('df', 'dfg');
console.log(toll.fullName());

function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(`my full name is ${this.firstName} ${this.lastName}`);
    },
  };
}
