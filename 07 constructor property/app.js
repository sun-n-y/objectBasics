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

const john = new Person('john', 'sanders');
// console.log(john);
// console.log(john.constructor);

const joe = {};
console.log(joe.constructor);
const list = [];
console.log(list.constructor);
const sayHi = function () {};
console.log(sayHi.constructor);

const susy = new john.constructor('polo', 'holo');
susy.fullName();
