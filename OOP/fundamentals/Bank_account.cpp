#include<iostream>
using namespace std;
class bank_account{
    private:
      int balance;
    public:
        bank_account(){
            balance=500; // Initial balance
        }
        void deposit(int amount){
            cout<<"Enter amount to deposit: ";
            cin>>amount;
            balance+=amount;
            
        }
        void withdraw(int amount){
            cout<<"Enter amount to withdraw: ";
            cin>>amount;
            if(amount>balance){
                cout<<"Insufficient funds!"<<endl;
            }else{
                balance-=amount;
                
            }
        }
        void display_balance(){
            cout<<"Current Balance: "<<balance<<endl;
        }
       
};
int main(){
    int amount;
    bank_account account;
    account.display_balance();
    account.deposit(amount);
    account.display_balance();
    account.withdraw(amount);
    account.display_balance();
    account.withdraw(amount); // Attempt to withdraw more than balance
    return 0;
}