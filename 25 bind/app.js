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

//assign, call it later
const tomGreet = greet.bind(tom, 'usa', 'usa');

tomGreet();
