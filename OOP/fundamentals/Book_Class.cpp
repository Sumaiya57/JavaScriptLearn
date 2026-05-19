#include<iostream>
using namespace std;
class book{
    public:
      string title;
      string author;
      int price;
      book(){
        title="";
        author="";
        price=0;
      }
        void display(){
            cout<<"Title: "<<title<<endl;
            cout<<"Author: "<<author<<endl;
            cout<<"Price: "<<price<<endl;
        }
};
int main(){
    book b1;
    b1.title="The Great Gatsby";
    b1.author="F. Scott Fitzgerald";
    b1.price=10;
    b1.display();
    return 0;
}