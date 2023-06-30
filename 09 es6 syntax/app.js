class Account {
  constructor(name, intialBalance) {
    this.name = name;
    this.balance = intialBalance;
  }
  bank = 'chase';
  deposit(amount) {
    this.balance += amount;
    console.log(`hello ${this.name}, your balance is ${this.balance}`);
  }
}

const john = new Account('y', 9);
console.log(john);
console.log(john.name);
john.deposit(100);
console.log(john.bank);

const boob = new Account('q', 1000);
console.log(boob);
console.log(boob.name);
boob.deposit(100);
console.log(boob.bank);
