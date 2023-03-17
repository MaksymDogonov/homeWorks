'use strict';
// Написати цикли, які зможуть:
//
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
// Вивести квадрати чисел від 10 до 20.
// Вивести таблицю множення на 7.
// Знайти суму всіх цілих чисел від 1 до 15.
// Знайти добуток усіх цілих чисел від 15 до 35.
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// Вивести суму лише парних чисел в діапазоні від 30 до 80.
// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
//  Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
//     Визначити кількість його парних дільників.
//     Знайти суму його парних дільників.
//     Надрукувати повну таблицю множення від 1 до 10.
//task 1
let result = null;
let resultString = '';
for (let i = 10; i < 20; i++) {
    result = i + ',';
    if (i === 19) {
        result = i;
    }
    resultString += result;
}
console.log(resultString);

//task 2
for (let i = 10; i < 20; i++) {
    let result = i * i;
    console.log(result);
}

//task 3
for (let i = 0; i <= 10; i++) {
    let result = 7 * i;
    console.log(result);
}

//task 4
let sum = null;
for (let i = 1; i < 15; i++) {
    sum += i;
}
console.log(sum);

//task 5
let resultMul = 1;
for (let i = 15; i < 35; i++) {
    resultMul *= i;
}
console.log(BigInt(resultMul));

//task 6
let resultSumMidl = null;
for (let i = 1; i < 500; i++) {
    resultSumMidl += i;
    if (i === 499) {
        resultSumMidl /= i;
    }
}
console.log(resultSumMidl);

//task 7
let resultSumEvenNumb = null;
for (let i = 30; i < 80; i++) {
    if (i % 2 === 1) {
        continue;
    }
    resultSumEvenNumb += i;
}
console.log(resultSumEvenNumb);
//task 8

for (let i = 100; i < 200; i++) {
    if (i % 3 !== 0) {
        continue;
    }
    console.log(i);
}

//task 11

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        let result = i * j;
        console.log(`${i} * ${j} = ${result}`);
    }
}
