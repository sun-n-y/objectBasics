//this
// points to the left of the dot

// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName: function () {
//
//   },
// };

// const tim = {
//   firstName: 'anna',
//   lastName: 'banana',
//   fullName: function () {
//     console.log(`my full name is ${this.firstName} ${this.lastName}`);
//   },
// };

//factory funciton setup
function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(
        `my full name is ${this.firstName} ${this.lastName} and i love js`
      );
    },
  };
}

const sp = createPerson('lebron', 'james');
sp.fullName();

const kp = createPerson('kobe', 'bryant');
kp.fullName();

const lp = createPerson('micheal', 'jordan');
lp.fullName();
console.log(lp.firstName);
