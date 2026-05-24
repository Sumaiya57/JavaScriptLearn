
class Account{
    constructor(accountHolder, accountNumber, balance){
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount){

    if(amount <= 0){
        console.log("Invalid deposit amount");
        return;
    }

    this.balance += amount;

    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
}
    withdraw(amount){
        if(amount <= 0){
            console.log("Invalid withdrawal amount");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        }
    }
    checkBalance(){
        console.log(`Current balance: ${this.balance}`);
    }
    accountInfo(){
        console.log(`
            Account Holder: ${this.accountHolder}
            Account Number: ${this.accountNumber}
            Balance: ${this.balance}
            `);
    }
} 
class ATM extends Account {
    constructor(accountHolder, accountNumber, balance,pin) {
        super(accountHolder, accountNumber, balance);
        this.pin=pin;
    }
    login(accountNumber, pin){
        if(this.accountNumber === accountNumber && this.pin === pin){
            console.log(`Logged in with account number: ${accountNumber}`);
        } else {
            console.log("Invalid account number or pin.");
        }
    }
    transfer(amount, recipientAccount){
        if(amount <= 0){
            console.log("Invalid transfer amount");
            return;
        }
        if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log(`Transferred ${amount}. New balance: ${this.balance}`);
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountHolder, accountNumber, balance, interestRate) {
        super(accountHolder, accountNumber, balance);
        this.interestRate = interestRate;
    }
    addInterest() {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`Added interest: ${interest}. New balance: ${this.balance}`);
    }
}
class CurrentAccount extends Account {
    constructor(accountHolder, accountNumber, balance, overdraftLimit) {
        super(accountHolder, accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
}

const savingsAcc = new SavingsAccount("Alice", "SA123", 1000, 0.05);
savingsAcc.accountInfo();
savingsAcc.deposit(500);
savingsAcc.addInterest();
savingsAcc.withdraw(200);
savingsAcc.checkBalance();

const currentAcc = new CurrentAccount("Bob", "CA456", 1000, 500);
currentAcc.accountInfo();
currentAcc.deposit(500);
currentAcc.withdraw(200);
currentAcc.checkBalance();

const atm = new ATM("Charlie", "ATM789", 1000, "1234");
atm.accountInfo();
atm.login("ATM789", "1234");
atm.deposit(500);
atm.withdraw(200);
atm.checkBalance();
atm.transfer(300, savingsAcc);
