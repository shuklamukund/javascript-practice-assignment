function print(array){
const[first,second,...rest]=array;
const last=rest.pop();

return [first,second,last];
}
const array=[1,2,3,4,5];
console.log(print(array));