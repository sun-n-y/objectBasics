//constructor functions

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
