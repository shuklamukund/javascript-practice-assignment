class person{


    constructor(name="unknown",age=0){
        this.name=name;
        this.age=age;
    }
    getDetails(){
        return ` ${this.name} , ${this.age} `;
    }
}

const person1=new person("mukund",150000);
console.log(person1.getDetails());

const person2=new person();
console.log(person2.getDetails());