function object(person){
return person.address.colony;
}
const person={
    name:"mukund",
    age:20,
    address:{
        colony:"Hari Nagar",
        town:"Lalganj",
        dist:"Vaishali"
    }
};
console.log(object(person));