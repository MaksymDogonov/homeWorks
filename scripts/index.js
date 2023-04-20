'use strict';

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const first = (arr) => {
    let counter = 0;
    let sum = 0;
    const sumAndQun = (element, index) => {
        if (element > 0) {
            counter += 1;
            sum += element;
        }
    }
    arr.forEach(sumAndQun);
    return [counter, sum];
}
const [counter, sum] = first(array);
console.log(`кількість ${counter}`);
console.log(`sum ${sum}`);

const second = (arr) => {
    const minElement = arr.reduce((x, y) => Math.min(x, y));
    const numberOfArr = arr.indexOf(minElement);
    return [numberOfArr, minElement];
}
const [numberOfArr, minElement] = second(array);
console.log(`порядковий номер ${numberOfArr}`);
console.log(`мінімальний елемент масиву ${minElement}`);

const third = (arr) => {
    const maxElement = arr.reduce((x, y) => Math.max(x, y));
    const numberOfArrEx3 = arr.indexOf(maxElement);
    return [numberOfArrEx3, maxElement];
}
const [numberOfArrEx3, maxElement] = third(array);
console.log(`порядковий номер ${numberOfArrEx3}`);
console.log(`максимальний елемент масиву ${maxElement}`);

const fourth = (arr) => {
    let counterEx4 = 0;
    const qunNeg = (element) => {
        if (element < 0) {
            counterEx4 += 1;
        }
    }
    arr.filter(qunNeg);
    return counterEx4;
}
const counterEx4 = fourth(array);
console.log(`кількість ${counterEx4}`);

const fifth = (arr) => {
    let counterEx5 = 0;
    const qunPos = (element, index) => {
        if (element > 0 && element % 2 === 1) {
            counterEx5 += 1;
        }
    }
    arr.filter(qunPos);
    return counterEx5;
}
const counterEx5 = fifth(array);
console.log(`кількість ${counterEx5}`);

const sixth = (arr) => {
    let counterEx6 = 0;
    const qunEvenPos = (element, index) => {
        if (element > 0 && element % 2 === 0) {
            counterEx6 += 1;
        }
    }
    arr.filter(qunEvenPos);
    return counterEx6;
}
const counterEx6 = sixth(array);
console.log(`кількість ${counterEx6}`);

const seventh = (arr) => {
    return arr.reduce((previousValue, currentValue) => {
        if (currentValue > 0 && currentValue % 2 === 0) {
            return previousValue + currentValue;
        }
        return previousValue;
    }, 0);
}
const sumEx7 = seventh(array);
console.log(`sum ${sumEx7}`);

const eighth = (arr) => {
    return arr.reduce((previousValue, currentValue) => {
        if (currentValue > 0 && currentValue % 2 === 1) {
            return previousValue += currentValue;
        }
        return previousValue;
    }, 0);
}
const sumEx8 = eighth(array);
console.log(`sum ${sumEx8}`);

const ninth = (arr) => {
    let mul = 1;
    const mulEvenPos = (element, index) => {
        if (element > 0) {
            mul *= element;
        }
    }
    array.forEach(mulEvenPos);
    return mul;
}
const mul = ninth(array);
console.log(`mul ${mul}`);

const tenth = (arr) => {
    let maxElement = array[0];
    const arrNew = [];
    const maxNumber = (element, index) => {
        if (element > maxElement) {
            maxElement = element;
            arrNew.push(element);
        }
    }
    array.forEach(maxNumber);
    return arrNew
}
const arrNew = tenth(array);
console.log(`максимальний елемент масиву ${arrNew[arrNew.length - 1]}`);
console.log(arrNew)