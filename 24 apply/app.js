const tom = {
  name: 'tom',
  age: 25,
};

const louis = {
  name: 'louis',
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `hello, i am ${this.name} and i am ${this.age} years old and i live i ${city} of ${country}`
  );
}

// greet.call(louis, 'sandeigo', 'us');
// greet.call(tom, 'colorado', 'us');
// greet.call({ name: 'peter', age: 30 }, 'spain', 'madrid');

greet.apply(louis, ['red', 'yellow']);
greet.apply(tom, ['red', 'yellow']);
greet.apply({ name: 'peter', age: 30 }, ['red', 'yellow']);
