#include<iostream>
using namespace std;
class student{
   public:
    string name;
    int id;
    float cgpa;
    string dept_name;
    int semester;
    student(string n, int i, float c, string d, int s){
        name=n;
        id=i;
        cgpa=c;
        dept_name=d;
        semester=s;
    }
    void display(){
        cout << "\nStudent Information" << endl;
        cout<<"Name: "<<name<<endl;
        cout<<"ID: "<<id<<endl;
        cout<<"CGPA: "<<cgpa<<endl;
        cout<<"Department: "<<dept_name<<endl;
        cout<<"Semester: "<<semester<<endl;
    }
    void isPassed(){
        if(cgpa>=2.0){
            cout<<"Status: Passed"<<endl;
        }else{
            cout<<"Status: Failed"<<endl;
        }
    }
};
int main(){
    string n;
    int i;
    float c;
    string d;
    int s;
    cin>>n>>i>>c>>d>>s;
    student s1(n, i, c, d, s);

    cin>>n>>i>>c>>d>>s;
    student s2(n,i,c,d,s);
    cin>>n>>i>>c>>d>>s;
    student s3(n,i,c,d,s);

    s1.display();
    s2.display();
    s3.display();
    s1.isPassed();
    s2.isPassed();
    s3.isPassed();
    return 0;
}