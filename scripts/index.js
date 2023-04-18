'use strict';

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

const first = () => {
    let counter = 0;
    let sum = 0;
    const sumAndQun = (element, index) => {
        if (element > 0) {
            counter += 1;
            sum += element;
        }
    }
    array.forEach(sumAndQun);
    console.log(`кількість ${counter}`);
    console.log(`sum ${sum}`);
}
first();

const second = () => {
    let minElement = array[0];
    const minElAndNumber = (element, index) => {
        if (element < minElement) {
            minElement = element;
        }
    }
    array.forEach(minElAndNumber);
    const numberOfArr = array.indexOf(minElement);
    console.log(`порядковий номер ${numberOfArr}`);
    console.log(`мінімальний елемент масиву ${minElement}`);
}
second();

const third = () => {
    let maxElement = array[0];
    const maxElAndNumber = (element, index) => {
        if (element > maxElement) {
            maxElement = element;
        }
    }
    array.forEach(maxElAndNumber);
    const numberOfArr = array.indexOf(maxElement);
    console.log(`порядковий номер ${numberOfArr}`);
    console.log(`максимальний елемент масиву ${maxElement}`);
}
third();

const fourth = () => {
    let counter = 0;
    const qunNeg = (element, index) => {
        if (element < 0) {
            counter += 1;
        }
    }
    array.forEach(qunNeg);
    console.log(`кількість ${counter}`);
}
fourth();

const fifth = () => {
    let counter = 0;
    const qunPos = (element, index) => {
        if (element > 0 && element % 2 === 1) {
            counter += 1;
        }
    }
    array.forEach(qunPos);
    console.log(`кількість ${counter}`);
}
fifth();

const sixth = () => {
    let counter = 0;
    const qunEvenPos = (element, index) => {
        if (element > 0 && element % 2 === 0) {
            counter += 1;
        }
    }
    array.forEach(qunEvenPos);
    console.log(`кількість ${counter}`);
}
sixth();

const seventh = () => {
    let sum = 0;
    const sumEvenPos = (element, index) => {
        if (element > 0 && element % 2 === 0) {
            sum += element;
        }
    }
    array.forEach(sumEvenPos);
    console.log(`sum ${sum}`);
}
seventh();

const eighth = () => {
    let sum = 0;
    const sumNotEvenPos = (element, index) => {
        if (element > 0 && element % 2 === 1) {
            sum += element;
        }
    }
    array.forEach(sumNotEvenPos);
    console.log(`sum ${sum}`);
}
eighth();

const ninth = () => {
    let mul = 1;
    const mulEvenPos = (element, index) => {
        if (element > 0) {
            mul *= element;
        }
    }
    array.forEach(mulEvenPos);
    console.log(`mul ${mul}`);
}
ninth();

const tenth = () => {
    let maxElement = array[0];
    const arr = [];
    const maxNumber = (element, index) => {
        if (element > maxElement) {
            maxElement = element;
            arr.push(element);
        }
    }
    array.forEach(maxNumber);
    console.log(`максимальний елемент масиву ${arr[arr.length - 1]}`);
    console.log(arr)
}
tenth();