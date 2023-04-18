'use strict';
// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
//     Знайти суму та кількість позитивних елементів.
//     Знайти мінімальний елемент масиву та його порядковий номер.
//     Знайти максимальний елемент масиву та його порядковий номер.
//     Визначити кількість негативних елементів.
//     Знайти кількість непарних позитивних елементів.
//     Знайти кількість парних позитивних елементів.
//     Знайти суму парних позитивних елементів.
//     Знайти суму непарних позитивних елементів.
//     Знайти добуток позитивних елементів.
//     Знайти найбільший серед елементів масиву, ост альні обнулити.

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
    let minElement = array[0];
    const maxElAndNumber = (element, index) => {
        if (element > minElement) {
            minElement = element;
        }
    }
    array.forEach(maxElAndNumber);
    const numberOfArr = array.indexOf(minElement);
    console.log(`порядковий номер ${numberOfArr}`);
    console.log(`максимальний елемент масиву ${minElement}`);
}
third();

const fourth = () => {
    let counter = 0;
    const sumAndQun = (element, index) => {
        if (element < 0) {
            counter += 1;
        }
    }
    array.forEach(sumAndQun);
    console.log(`кількість ${counter}`);
}
fourth();

const fifth = () => {
    let counter = 0;
    const sumAndQun = (element, index) => {
        if (element > 0 && element % 2 === 1) {
            counter += 1;
        }
    }
    array.forEach(sumAndQun);
    console.log(`кількість ${counter}`);
}
fifth();