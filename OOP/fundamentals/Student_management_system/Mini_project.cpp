#include<iostream>
using namespace std;
class student{
   public:
    string name;
    int id;
    float cgpa;
    student(string n, int i, float c){
        name=n;
        id=i;
        cgpa=c;
    }
    void display(){
        cout << "\nStudent Information" << endl;
        cout<<"Name: "<<name<<endl;
        cout<<"ID: "<<id<<endl;
        cout<<"CGPA: "<<cgpa<<endl;
    }
};
int main(){
    string n;
    int i;
    float c;
    cin>>n>>i>>c;
    student s1(n, i, c);
    
    cin>>n>>i>>c;
    student s2(n,i,c);
    cin>>n>>i>>c;
    student s3(n,i,c);
    
    s1.display();
    s2.display();
    s3.display();
    return 0;
}