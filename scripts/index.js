'use strict';

//task 1
const arr = ['a', 'b', 'c', 'd'];
alert(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);

//task 2
const arrTask2 = [2, 5, 3, 9];
const result = arrTask2[0] * arrTask2[1] + arrTask2[2] * arrTask2[3];
alert(result);

//task 3
const arrTask3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
alert(arrTask3[1][0]);

//task 4
const languages = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}
alert(languages.js[0]);

//task 5
const lengthArr = +prompt('Add array length');
const arrTask5 = [];
const symbolX = 'x';
let resultTask5 = '';
for (let i = 0; i < lengthArr; i++) {
    for (let y = 0; y <= i; y++) {
        resultTask5 += symbolX;
    }
    arrTask5.push(resultTask5);
    resultTask5 = '';
}

//task 6
const lengthArrTask6 = +prompt('Add array length');
const arrTask6 = [];
let resultTask6 = '';
for (let i = 1; i <= lengthArrTask6; i++) {
    for (let y = 1; y <= i; y++) {
        resultTask6 += i;
    }
    arrTask6.push(resultTask6);
    resultTask6 = '';
}

//task 7
const arrTask7 = [];
const arrayFill = (symbol, arrLength) => {
    for (let i = 0; i < arrLength; i++) {
        arrTask7.push(symbol);
    }
}
arrayFill('x', 5);

//task 8
const arrTask8 = [1, 2, 7, 9];
let resultTask8 = null;
let counter = null;
for (let i = 0; i < arrTask8.length; i++) {
    resultTask8 += arrTask8[i];
    counter += 1;
    if (resultTask8 >= 10) {
        break;
    }
}
if (resultTask8 < 10) {
    counter = 'more';
}
console.log(`Array needs ${counter} elements for get result 10 or more`);

//task 9
let arrTask9 = [9, 5, 4, 7, 8, 22];
const arrNew = [];
for (let i = 0; i < arrTask9.length; i++) {
    arrNew.unshift(arrTask9[i]);
}
arrTask9 = arrNew.slice();

//task 10
const arrTask10 = [[1, 2, 3], [4, 5], [6], 9, 21];
let resultTask10 = 0;
for (let i = 0; i < arrTask10.length; i++) {
    if (Array.isArray(arrTask10[i])) {
        for (let j = 0; j < arrTask10[i].length; j++) {
            resultTask10 += arrTask10[i][j];
        }
    } else {
        resultTask10 += arrTask10[i]
    }
}
console.log(` Array sum is ${resultTask10}`);

//task 11
const arrTask11 = [[[1, 2], [3, 4]], [[5, 6], 5, [7, 8]], 9];
let resultTask11 = 0;
for (let i = 0; i < arrTask11.length; i++) {
    if (Array.isArray(arrTask11[i])) {
        for (let j = 0; j < arrTask11[i].length; j++) {
            if (Array.isArray(arrTask11[i][j])) {
                for (let h = 0; h < arrTask11[i][j].length; h++) {
                    resultTask11 += arrTask11[i][j][h];
                }
            } else {
                resultTask11 += arrTask11[i][j];
            }
        }
    } else {
        resultTask11 += arrTask11[i];
    }
}
console.log(` Array sum is ${resultTask11}`);