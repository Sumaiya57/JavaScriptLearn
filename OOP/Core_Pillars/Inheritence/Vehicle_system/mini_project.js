class Vehicle {
    constructor() {
        console.log("Vehicle created.");
    }

    start() {
        console.log("Vehicle started.");
    }

    stop() {
        console.log("Vehicle stopped.");
    }
}

class Car extends Vehicle {

    openDoor() {
        console.log("Car door opened.");
    }

    kickStart() {
        console.log("Car kick-started.");
    }
}

class Bike extends Vehicle {

    openHelmet() {
        console.log("Bike helmet opened.");
    }

    kickStart() {
        console.log("Bike kick-started.");
    }
}

class Truck extends Vehicle {

    openCargo() {
        console.log("Truck cargo opened.");
    }

    kickStart() {
        console.log("Truck kick-started.");
    }
}


// Main Part

const myVehicle = new Vehicle();
myVehicle.start();

console.log("-----------");

const myCar = new Car();
myCar.start();
myCar.openDoor();
myCar.kickStart();
myCar.stop();

console.log("-----------");

const myBike = new Bike();
myBike.start();
myBike.openHelmet();
myBike.kickStart();
myBike.stop();

console.log("-----------");

const myTruck = new Truck();
myTruck.start();
myTruck.openCargo();
myTruck.kickStart();
myTruck.stop();

//C++ program to demonstrate inheritance in a vehicle system
/*
#include<iostream>
using namespace std;
class Vehicle {
public:
    Vehicle() {
        cout << "Vehicle created." << endl;
    }
    void start() {
        cout << "Vehicle started." << endl;
    }
    void stop() {
        cout << "Vehicle stopped." << endl;
    }
};
class car : public Vehicle {
public:
    void openDoor() {
        cout << "Car door opened." << endl;
    }
    void kickStart() {
        cout << "Car kick-started." << endl;
    }
};

class bike : public Vehicle {
public:
    void openHelmet() {
        cout << "Bike helmet opened." << endl;
    }
    void kickStart() {
        cout << "Bike kick-started." << endl;
    }
};
class truck : public Vehicle {
public:
    void openCargo() {
        cout << "Truck cargo opened." << endl;
    }
    void kickStart() {
        cout << "Truck kick-started." << endl;
    }
};
int main() {
    Vehicle myVehicle;
    myVehicle.start();
    car myCar;
    myCar.start();
    myCar.openDoor();
    myCar.kickStart();
    myCar.stop();

    bike myBike;
    myBike.start();
    myBike.openHelmet();
    myBike.kickStart();
    myBike.stop();

    truck myTruck;
    myTruck.start();
    myTruck.openCargo();
    myTruck.kickStart();
    myTruck.stop();

    return 0;
}
    */