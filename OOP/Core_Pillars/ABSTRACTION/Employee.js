class Employee {
    constructor(name, salary) {
        this.name = name;
        this.Salary = salary;
    }

    salary() {
        return this.Salary;
    }
}
class developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
        
    }
    salary() {
        console.log("Calculating salary for developer:");
        return this.Salary;
    }
}
class manager extends Employee {
    constructor(name, salary) {
        super(name, salary);
        
    }
    salary() {
        console.log("Calculating salary for manager:");
        return this.Salary;
    }
}
class intern extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    salary() {
        console.log("Calculating salary for intern:");
        return this.Salary;
    }
}

const emp1 = new developer("Alice", 40000);
const emp2 = new manager("Bob", 50000);
const emp3 = new intern("Charlie", 20000);
const employees = [emp1, emp2, emp3];
for (let emp of employees) {
    console.log(emp.name);
    console.log(emp.salary());
}