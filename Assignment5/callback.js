
function doubleArrayWithCallback(arr, callback) {
    const doubledArray = arr.map(callback);
    return doubledArray;
}

// Example callback function
function doubleValue(value) {
    return value * 2;
}

const inputArray = [1, 2, 3, 4, 5];
const doubledArray = doubleArrayWithCallback(inputArray, doubleValue);

console.log(doubledArray); 
