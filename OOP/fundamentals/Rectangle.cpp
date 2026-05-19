#include<iostream>
using namespace std;
class Rectangle{
    public:
      int length;
      int width;
      Rectangle(int l, int w){
        length=l;
        width=w;
      }
        void area(){
             cout<<"Area: "<<length*width<<endl;
        }
};
int main(){
    int length, width;
    cout<<"Enter length: ";
    cin>>length;
    cout<<"Enter width: ";
    cin>>width;
    Rectangle r1(length, width);
    r1.area();
    return 0;
}