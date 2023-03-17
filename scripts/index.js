'use strict';

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

//task 9 ,10 , 11
const mathRandom = Math.floor(Math.random() * 100) + 10;
console.log(mathRandom);
let resultEvenNumb = null;
let quantity = null;
for (let i = 1; i <= mathRandom; i++) {
    if (mathRandom % i !== 0) {
        continue;
    }
    console.log(i);
    if (i % 2 === 0) {
        quantity += 1;
        resultEvenNumb = resultEvenNumb += i;
    }
}
console.log(`task 10 quantity even numb: ${+quantity}`);
console.log(`task 11 sum even numb: ${+resultEvenNumb}`);

//task 12

for (let i = 1; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        let result = i * j;
        console.log(`${i} * ${j} = ${result}`);
    }
}
