//ex-1
class animal {
    speak(){
        console.log("Animal is speaking");
    }
}

class dog extends animal{
    bark(){
        console.log("Dog is barking");
    }
}

class cat extends animal{
    meow(){
        console.log("Cat is meowing");
    }
}

const d = new dog();
d.speak();
d.bark();

const c = new cat();
c.speak();
c.meow();

//ex-2
class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car driving");
    }
}

const car1 = new Car();

car1.start();
car1.drive();