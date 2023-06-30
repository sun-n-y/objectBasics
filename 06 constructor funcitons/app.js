//

function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(`my full name is ${this.firstName} ${this.lastName}`);
    },
  };
}
