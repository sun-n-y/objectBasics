class Account {
  constructor(name, intialBalance) {
    this.name = name;
    this.balance = intialBalance;
  }
  bank = 'chase';
  deposit(amount) {
    this.balance += amount;
    console.log(`hello, ${this.name}, your balance is ${this.balance}`);
  }
}

const tom = new Account('lord', 900);

console.log(tom);

tom.deposit(100);

console.log(tom.bank);

const tim = new Account('lord', 500);

console.log(tim);

tim.deposit(100);

console.log(tim.bank);
