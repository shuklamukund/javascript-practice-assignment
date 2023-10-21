class employe{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    getsalary(){
        return `salary is ${this.salary} `;
    }
}

const employeInstance=new employe("mukund",150000);
const salary=employeInstance.getsalary();
console.log(salary);