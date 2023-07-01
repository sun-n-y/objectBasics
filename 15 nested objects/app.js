//

const age = 50;

const value = 'greet';

const person = {
  name: 'john',
  age,
  married: true,
  siblings: ['anna', 'kopo'],
  greet: function (name) {
    console.log(`hello my name is ${name}`);
  },
  sayHello(name) {
    console.log(`hello my name is ${name}`);
  },
  job: {
    title: 'developer',
    company: {
      name: 'coding',
      address: '1234 main st',
    },
  },
  'random-value': 'random',
};

console.log(person.job.company.address);
console.log(person.age);

console.log(person[value]);
