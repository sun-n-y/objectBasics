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

//assign , call it later
const susanGreet = greet.bind(susan, 'toronto', 'canada');

susanGreet();
