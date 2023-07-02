//constructor function
function Person(firstName, lastName) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.fullName = function () {
      console.log(
        `my full name is ${this.firstName} ${this.lastName} and i love react`
      );
    });
}

const john = new Person('john', 'sanders');
//to see the constructor that created it
//console.log(john.constructor);

const tom = {};
console.log(tom.constructor);

const list = [];
console.log(list.constructor);

const fx = function () {};
console.log(fx.constructor);

const susy = new john.constructor('fdfg', 'sdf');
console.log(susy);
susy.fullName();
