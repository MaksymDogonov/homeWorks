'use strict';

//task 1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arrNew = arr1.concat(arr2);

//task 2
const arrRev = [1, 2, 3];
arrRev.reverse();

//task 3
const arrPush = [1, 2, 3];
arrPush.push(4, 5, 6);

//task 4
const arrUnsh = [1, 2, 3];
arrUnsh.unshift(4, 5, 6);

//task 5, 6
const arrType = ['js', 'css', 'jq'];
alert(arrType[0]);
alert(arrType[arrType.length - 1]);

//task 7
const arrTask7 = [1, 2, 3, 4, 5];
const arrNewTask7 = arrTask7.slice(0, 3);

//task 8
const arrTask8 = [1, 2, 3, 4, 5];
const arrNewTask8 = arrTask8.slice(3);

//task 9
const arrTask9 = [1, 2, 3, 4, 5];
arrTask9.splice(1, 2);

//task 10
const arrTask10 = [1, 2, 3, 4, 5];
const arrNewTask10 = arrTask10.slice(1, 4);

//task 11
const arrTask11 = [1, 2, 3, 4, 5];
arrTask11.splice(3, 0, 'a', 'b', 'c');

//task 12
const arrTask12 = [1, 2, 3, 4, 5];
arrTask12.splice(1, 0, 'a', 'b');
arrTask12.splice(arrTask12.length - 1, 0, 'c');
arrTask12.push('e');

//task 13
const arrTask13 = [3, 4, 1, 2, 7];
arrTask13.sort();

//task 14
const arrTask14 = [5, 6, 7, 8, 9];
const arrSum = (arr) => {
    let result = null;
    for (let i = 0; i <= arr.length - 1; i++) {
        result += arr[i];
    }
    console.log(result);
}
arrSum(arrTask14);

//task 15
const arrTask15 = [5, 6, 7, 8, 9];
const arrExponent = (arr) => {
    let result = null;
    let arrNew = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        result = arr[i] ** 2;
        arrNew.push(result);
    }
    console.log(arrNew);
}
arrExponent(arrTask15);

// task 16
let arrTask16 = [1, -3, 5, 6, -7, 8, 9, -11];
const arrNegative = (arr) => {
    let newArray = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < 0) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}
arrTask16 = arrNegative(arrTask16);

// task 17
let arrTask17 = [1, -3, 5, 6, -7, 8, 9, -11];
const arrEven = (arr) => {
    let newArray = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 === 0) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}
arrTask17 = arrEven(arrTask17);

// task 18
let arrTask18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const arrMore5 = (arr) => {
    let newArray = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i].length > 5) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
arrTask18 = arrMore5(arrTask18);

// task 19
let arrTask19 = [1, 2, [3, 4], 5, [6, 7]];
const onlyArr = (arr) => {
    let newArray = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        if (Array.isArray(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
arrTask19 = onlyArr(arrTask19);

// task 20
let arrTask20 = [5, -3, 6, -5, 0, -7, 8, 9];
const counterNegative = (arr) => {
    let counter = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < 0) {
            counter++;
        }
    }
    console.log(counter);
    return counter;
}
counterNegative(arrTask20);