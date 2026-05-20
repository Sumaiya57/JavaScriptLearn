#include<iostream>
using namespace std;
class ATM {
private:
    double balance;
    int pin;

public:
    ATM(double initialBalance, int initialPin){
        balance = initialBalance;
        pin = initialPin;
    };
    bool login(int enteredPin){
        if (enteredPin == pin) {
            double amount;
            cout << "Login successful!" << endl;
            return true;
        }
    else
     {
            cout << "Invalid PIN. Access denied." << endl;
            return false;
        }
    };
     void deposit(double amount){
        if (amount > 0) {
            balance += amount;
            cout << "Deposit successful! Current balance: $" << balance << endl;
        } else {
            cout << "Invalid deposit amount." << endl;
        }
    };
    void withdraw(double amount){
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Withdrawal successful! Current balance: $" << balance << endl;
        } else {
            cout << "Invalid withdrawal amount or insufficient funds." << endl;
        }
    };
    double getBalance() {
        return balance;
    };
};

int main() {
    int pin=1234; // Default PIN for testing
    double balance;
    cin >> balance; // Initial balance input
    ATM myATM(balance, pin); // Initial balance and PIN

    int enteredPin;
    cout << "Enter your PIN: ";
    cin >> enteredPin;

if (myATM.login(enteredPin)) {
    double depositAmount;
    cout << "Enter amount to deposit: ";
    cin >> depositAmount;
    myATM.deposit(depositAmount);

    double withdrawalAmount;
    cout << "Enter amount to withdraw: ";
    cin >> withdrawalAmount;
    myATM.withdraw(withdrawalAmount);

    cout << "Current balance: $" << myATM.getBalance() << endl;
}
    return 0;
}