#include<iostream>
using namespace std;
class Employee{
    public:
      string name;
      int id;
      double salary;
      Employee(string n, int i, double s){
        name=n;
        id=i;
        salary=s;
      }
        void showInfo(){
            cout<<"Name: "<<name<<endl;
            cout<<"ID: "<<id<<endl;
            cout<<"Salary: "<<salary<<endl;
        }
};
int main(){
    string name;
    int id;
    double salary;
    cout<<"Enter name: ";
    getline(cin, name);
    cout<<"Enter ID: ";
    cin>>id;
    cout<<"Enter salary: ";
    cin>>salary;
    Employee e1(name, id, salary);
    e1.showInfo();
    return 0;
}