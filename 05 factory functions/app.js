//
const john = {
  firstName: 'Mr',
  lastName: 'anderson',
  fullNmae: function () {
    console.log(`my full name is ${this.firstName} ${this.lastName}`);
  },
};

const bob = {
  firstName: 'ana',
  lastName: 'sanders',
  fullNmae: function () {
    console.log(`my full name is ${this.firstName} ${this.lastName}`);
  },
};

john.fullNmae();
bob.fullNmae();
