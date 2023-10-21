
function getPerson(Obj) {
    try {
        if (typeof Obj !== 'object' || !Obj.hasOwnProperty('name') || !Obj.hasOwnProperty('age')) {
            throw new Error("Invalid parameter type");
        }
        
        const { name, age } = Obj;
        return `Name: ${name}, Age: ${age}`;
    } catch (error) {
        return error.message;
    }
}

console.log(getPerson({ name: "mukund", age: 20 })); 

console.log(getPerson("hii")); 