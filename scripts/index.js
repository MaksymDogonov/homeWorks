'use strict';

const arr = [1, 2, 3, -1, -2, -3];
const arrPos = (array) => {
    const exampleArr = [];
    if (array.length === 0) return 'Array is empty';
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 1) exampleArr.push(array[i]);
    }
    if (exampleArr.length === 0) return null;
    return exampleArr;
}
console.log(arrPos(arr));