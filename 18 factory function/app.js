//this
// points to the left of the dot

const john = {
  firstName: 'john',
  lastName: 'anderson',
  fullName: function (name) {
    console.log(`my full name is ${name}`);
  },
};

const tim = {
  firstName: 'anna',
  lastName: 'banana',
  fullName: function () {
    console.log(this);
    console.log(`my full name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullName('polo');
tim.fullName();
