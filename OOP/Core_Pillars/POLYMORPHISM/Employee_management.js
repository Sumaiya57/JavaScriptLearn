class Employee {
    calculateSalary(){
        console.log("Calculating salary for employee.");
        return 0;
    }
}
class Manager extends Employee {
    
    calculateSalary() {
        console.log("Calculating salary for manager.");
        return 50000;
    }
}

class Developer extends Employee {

    calculateSalary() {
        console.log("Calculating salary for developer.");
        return 40000;
    }
}
class Intern extends Employee {
    
    calculateSalary() {
        console.log("Calculating salary for intern.");
        return 20000;
    }
}
// Main Part

const employees = new Employee();
const manager = new Manager();
const developer = new Developer();
const intern = new Intern();
employees.calculateSalary();
manager.calculateSalary();
developer.calculateSalary();
intern.calculateSalary();

//vs 

const salary = employees.calculateSalary();
console.log(salary);
const managerSalary = manager.calculateSalary();
console.log(managerSalary);
const developerSalary = developer.calculateSalary();
console.log(developerSalary);
const internSalary = intern.calculateSalary();
console.log(internSalary);