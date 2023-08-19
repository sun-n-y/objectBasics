// //
// const john = {
//   firstName: 'Mr',
//   lastName: 'anderson',
//   fullName: function () {
//     console.log(`my full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// const bob = {
//   firstName: 'ana',
//   lastName: 'sanders',
//   fullName: function () {
//     console.log(`my full name is ${this.firstName} ${this.lastName}`);
//   },
// };

function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(`my full name is ${this.firstName} ${this.lastName}`);
    },
  };
}

const john = createPerson('polo', 'ralph');
john.fullName();
const wick = createPerson('olop', 'ralph');
wick.fullName();
