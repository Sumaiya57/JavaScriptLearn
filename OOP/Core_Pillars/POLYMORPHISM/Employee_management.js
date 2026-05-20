class Employee {
    calculateSalary(){
        console.log("Calculating salary for employee.");
        return 0;
    }
}
class Manager extends Employee {
    
    calculateSalary() {
        console.log("Calculating salary for manager:");
        return 50000;
    }
}

class Developer extends Employee {

    calculateSalary() {
        console.log("Calculating salary for developer:");
        return 40000;
    }
}
class Intern extends Employee {
    
    calculateSalary() {
        console.log("Calculating salary for intern:");
        return 20000;
    }
}
class Designer extends Employee {

    calculateSalary() {
        console.log("Calculating salary for designer:");
        return 35000;
    }
}
class tester extends Employee {

    calculateSalary() {
        console.log("Calculating salary for tester:");
        return 30000;
    }
}
// Main Part

const employees = [
    new Manager(),
    new Developer(),
    new Intern(),
    new Designer(),
    new tester()
];

for (let emp of employees){
    console.log(emp.calculateSalary());
}
//vs
// const employees = new Employee();
// const manager = new Manager();
// const developer = new Developer();
// const intern = new Intern();
// const designer = new Designer();
// const tester = new tester();
// employees.calculateSalary();
// manager.calculateSalary();
// developer.calculateSalary();
// intern.calculateSalary();
// designer.calculateSalary();
// tester.calculateSalary();

//vs 

// const salary = employees.calculateSalary();
// console.log(salary);
// const managerSalary = manager.calculateSalary();
// console.log(managerSalary);
// const developerSalary = developer.calculateSalary();
// console.log(developerSalary);
// const internSalary = intern.calculateSalary();
// console.log(internSalary);
// const designerSalary = designer.calculateSalary();
// console.log(designerSalary);
// const testerSalary = tester.calculateSalary();
// console.log(testerSalary);