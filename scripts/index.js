'use strict';
// Вам нужно написать функции indexOf, lastIndexOf, find, findIndex, includes, every и some, которые работают так же, как
// одноименные методы массивов.
const array = [2, 5, 9, 6];
//indexOf
// const indexOf = (arr, element) => {
//     if (arr.includes(element) === true) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === element) {
//                 return i;
//             }
//         }
//     } else {
//         return -1;
//     }
// }
// indexOf(array, 9);
//lastIndexOf
// const lastIndexOf = (arr, element) => {
//     let result;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === element) {
//             return result = i;
//         }
//     }
//     if( result === undefined){
//         return -1;
//     }
// }
// lastIndexOf(array, 7);
//find
const find = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}
find(array, (it) => it === 9);

//findIndex

//includes

//every

//some