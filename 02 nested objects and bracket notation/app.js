const person = {
  name: 'john',
  age: 25,
  married: true,
  siblings: ['anana', 'perter'],
  greet: function (name) {
    console.log(`hello my name is ${name}`);
  },
  sayHello(name) {
    console.log(`hello my name is ${name}`);
  },
};

console.log(person.name);

const name = person.name;

console.log(name);

person.sayHello('kk');

person.age = 16;
person.city = 'chicago';

//delete property
delete person.siblings;

console.log(person);
