'use strict';

const exponentiation = (num1, num2) => {
    const result = num1 ** num2;
    alert(`result exponentiation ${num1} in ${num2} = ${result}`);
}
const multiplay = (num1, num2) => {
    const result = num1 * num2;
    alert(`result multiplay ${num1} in ${num2} = ${result}`);
}
const division = (num1, num2) => {
    const result = num1 / num2;
    alert(`result division ${num1} in ${num2} = ${result}`);
}
const modulo = (num1, num2) => {
    const result = num1 % num2;
    alert(`result modulo ${num1} in ${num2} = ${result}`);
}
const mainFunction = (function1) => {
    const number1 = +prompt('add number 1');
    const number2 = +prompt('add number 2');
    function1(number1, number2);
}
mainFunction(exponentiation);
mainFunction(multiplay);
mainFunction(division);
mainFunction(modulo);