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

//invoke constructor funcitons
const jimmy = new Person('jimmy', 'neutron');
jimmy.fullName();
const joe = new Person('rimmy', 'ron');
joe.fullName();

//factory function
function createPerson() {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(
        `my full name is ${this.firstName} ${this.lastName} and i love JS`
      );
    },
  };
}
