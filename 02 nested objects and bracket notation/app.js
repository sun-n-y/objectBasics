//nested objects
//set variable as property value
//dot notation vs bracket notation

const age = 690;
let random = 'married';

const person = {
  name: 'john',
  age: age,
  married: true,
  siblings: ['anana', 'perter'],
  greet: function (name) {
    console.log(`hello my name is ${name}`);
  },
  sayHello(name) {
    console.log(`hello my name is ${name}`);
  },
  job: {
    title: 'developer',
    company: {
      name: 'codding company',
      address: '1234 main st',
    },
  },
  'random-value': 'random',
};
person['zname'] = 'h';

console.log(person[random]);
