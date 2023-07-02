const tom = {
  name: 'tom',
  age: 25,
  greet() {
    console.log(this);
    console.log(`hello, i am ${this.name} and i am ${this.age} years old`);
  },
};

const louis = {
  name: 'louis',
  age: 21,
};

// function greet() {
//   console.log(this);
//   console.log(`hello, i am ${this.name} and i am ${this.age} years old`);
// }

// greet.call(louis);
// greet.call(tom);

// greet.call({ name: 'peter', age: 30 });

tom.greet.call(louis);
