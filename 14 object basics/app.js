//

const person = {
  name: 'john',
  age: 25,
  married: true,
  siblings: ['anna', 'kopo'],
  greet: function (name) {
    console.log(`hello my name is ${name}`);
  },
  sayHello(name) {
    console.log(`hello my name is ${name}`);
  },
};

console.log(person);

const deleted = delete person.age;

console.log(deleted);
