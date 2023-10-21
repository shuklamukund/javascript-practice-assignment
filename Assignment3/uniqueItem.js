function input(array){
    const uniqueSet=new Set();
    for (const word of array) {
       
            uniqueSet.add(word);
       
    }

    return uniqueSet;
}
const array=["hii","hello","nameste","hii","hello"];
const result=input(array);
for (const element of result) {
    console.log(element);
}
