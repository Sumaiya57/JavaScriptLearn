class Shape {
         area(){
            throw new Error("area() method must be implemented");
         };

}
class Circle extends Shape {
    constructor(r){
        super();
        this.r = r;
    }
     area(){
        return 3.14 * this.r * this.r;
    }
}
class Rectangle extends Shape {
    constructor(l, b){
        super();
        this.l = l;
        this.b = b;
    }
     area(){
        return this.l * this.b;
    }
}

        const c = new Circle(5);
        console.log("Area of Circle: " + c.area());
        const r = new Rectangle(5, 10);
        console.log("Area of Rectangle: " + r.area());
