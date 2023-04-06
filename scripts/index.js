'use strict';
// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
// 2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на
// четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
// 3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
// 7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает
// значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5)
// сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// 9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// 10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив,
//     конечно же, может быть произвольным.
// 11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого
// массива. Массив, конечно же, может быть произвольным.
// //task 1
// const arr = ['a', 'b', 'c', 'd'];
// alert(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);
//
// //task 2
// const arrTask2 = [2, 5, 3, 9];
// const result = arrTask2[0] * arrTask2[1] + arrTask2[2] * arrTask2[3];
// alert(result);
//
// //task 3
// const arrTask3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// alert(arrTask3[1][0]);
//
// //task 4
// const languages = {
//     js: ['jQuery', 'Angular'],
//     php: 'hello',
//     css: 'world'
// }
// alert(languages.js[0]);
//
// //task 5
// const lengthArr = +prompt('Add array length');
// const arrTask5 = [];
// const symbolX = 'x';
// let resultTask5 = '';
// for (let i = 0; i < lengthArr; i++) {
//     for (let y = 0; y <= i; y++) {
//         resultTask5 += symbolX;
//     }
//     arrTask5.push(resultTask5);
//     resultTask5 = '';
// }
//
// //task 6
// const lengthArrTask6 = +prompt('Add array length');
// const arrTask6 = [];
// let resultTask6 = '';
// for (let i = 1; i <= lengthArrTask6; i++) {
//     for (let y = 1; y <= i; y++) {
//         resultTask6 += i;
//     }
//     arrTask6.push(resultTask6);
//     resultTask6 = '';
// }
//
// //task 7
// const arrTask7 = [];
// const arrayFill = (symbol, arrLength) => {
//     for (let i = 0; i < arrLength; i++) {
//         arrTask7.push(symbol);
//     }
// }
// arrayFill('x', 5);
//
// //task 8
// const arrTask8 = [1, 2, 7, 9];
// let resultTask8 = null;
// let counter = null;
// for (let i = 0; i < arrTask8.length; i++) {
//     resultTask8 += arrTask8[i];
//     counter += 1;
//     if (resultTask8 >= 10) {
//         break;
//     }
// }
// if (resultTask8 < 10) {
//     counter = 'more';
// }
// console.log(`Array needs ${counter} elements for get result 10 or more`);
//
// //task 9
// let arrTask9 = [9, 5, 4, 7, 8, 22];
// const arrNew = [];
// for (let i = 0; i < arrTask9.length; i++) {
//     arrNew.unshift(arrTask9[i]);
// }
// arrTask9 = arrNew.slice();

//task 10
const arrTask10 = [[1, 2, 3], [4, 5], [6], 9,21];
let resultTask10 = null;
// let resultSubArr = null;
for (let i = 0; i < arrTask10.length; i++) {
    // for (let y = 0; y < arrTask10[i].length; y++) {
    //     resultSubArr += arrTask10[i][y];
    // }
    arrTask10[i] = parseInt(arrTask10[i]);
    resultTask10 += arrTask10[i]
}
console.log(resultTask10);