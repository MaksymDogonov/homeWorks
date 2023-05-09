'use strict';

const allLi = document.querySelectorAll('li')
const findLi = () => {
    const arrLi = [];
    for (const el of allLi) {
        arrLi.push(el);
    }
    return arrLi;
}
const ul = document.getElementById("ulId"); //don't work with querySelectorAll
const findUlAttrs = () => {
    const arrUlAttrs = [];
    for (const attr of ul.attributes) {
        arrUlAttrs.push(attr);
    }
    return arrUlAttrs;
}
const arrLi = findLi()
for (const el of arrLi) {
    console.log(el);
}
const arrUlAttributes = findUlAttrs()
console.log(arrUlAttributes);
const arrAttrsValue = []
for (const el of arrUlAttributes) {
    arrAttrsValue.push(el.value);
}
console.log(arrAttrsValue);
allLi[allLi.length - 1].innerText = 'Привет меня зовут Max';
allLi[0].setAttribute('data-my-name', 'Max');
ul.removeAttribute('data-dog-tail');