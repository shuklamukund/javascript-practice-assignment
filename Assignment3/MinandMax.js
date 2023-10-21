function MinandMax(array){
    let mini=array[0];
        let maxi=array[0];
    for(num of array){
        
        if(num<mini){
            mini=num;
        }
        if(num>maxi){
            maxi=num;
        }

    }
   const result=[mini,maxi];
   return result;
}
const array=[3,4,2,5,8,1];
console.log(MinandMax(array));
