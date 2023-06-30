//
const john = {
  name: 'john',
  age: 34,
  greet: function () {
    console.log(this);
    console.log(`hello i am ${this.name} and i am ${this.age} years old`);
  },
};

const susan = {
  name: 'susan',
  age: 29,
};

function greet() {
  console.log(this);
  console.log(`hello i am ${this.name} and i am ${this.age} years old`);
}

greet.call(john);
greet.call(susan);
greet.call({ name: 'adsfs', age: 99 });

john.greet.call(susan);
