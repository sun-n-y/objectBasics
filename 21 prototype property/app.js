//
function Account(name, intialBalance) {
  this.name = name;
  this.balance = intialBalance;
  this.bank = 'yolo';
}

const tom = new Account('tom', 200);
const polo = new Account('polo', 0);

Account.prototype.bank = 'chase';
Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`hello, ${this.name}, your balance is ${this.balance}`);
};

console.log(tom);
console.log({});
console.log([]);
