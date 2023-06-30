//
function Account(name, intialBalance) {
  this.name = name;
  this.balance = intialBalance;
  this.bank = 'ehhe';
}

const john = new Account('john', 200);
const joe = new Account('joe', 0);

Account.prototype.bank = 'chase';
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`hello ${this.name}, your balance is ${this.balance}`);
};

// console.log(john.constructor);
// console.log(joe.deposit(100));

console.log(joe);
console.log({});
console.log([]);
