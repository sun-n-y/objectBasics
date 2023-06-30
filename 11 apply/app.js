//
const john = {
  name: 'john',
  age: 34,
};

const susan = {
  name: 'susan',
  age: 29,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `hello i am ${this.name} and i am ${this.age} years old and i live in ${city} ${country}`
  );
}

// greet.call(john, 'san deigo', 'us');
// greet.call(susan, 'san deigo', 'us');
// greet.call({ name: 'adsfs', age: 99 }, 'san deigo', 'us');

greet.apply(john, ['usa', 'japan']);
greet.apply(susan, ['usa', 'japan']);
greet.apply({ name: 'adsfs', age: 99 }, ['usa', 'japan']);
