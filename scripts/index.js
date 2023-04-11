'use strict';
// Вам нужно написать функции indexOf, lastIndexOf, find, findIndex, includes, every и some, которые работают так же, как
// одноименные методы массивов.
const array = [2, 5, 9, 6];
//indexOf
const indexOf = (arr, element) => {
    if (arr.includes(element) === true) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) {
                return i;
            }
        }
    } else {
        return -1;
    }
}
indexOf(array, 9);
//lastIndexOf

//find

//findIndex

//includes

//every

//some