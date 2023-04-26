'use strict';

// Создайте функцию counter, которая будет создавать счетчик и иметь один необязательный параметр типа number. Вызов
// функции должен возвращать объект (счетчик) с тремя методами: increase, decrease, value.
//
//     Вызов метода value должен возвращать текущее значение счетчика, increse – увеличивать его на 1, а decrease – уменьшать
// на 1.
//
// Вызов функции counter должен создавать независимый счетчик – это значит, что вызов методов одного счетчика никак не
// должен влиять на любой другой счетчик.
//
//     Дополнительно - Если хотите оценку 100 баллов
//
// Необходимо подсчитывать сколько раз были вызваны функции (increase, decrease, get)
// Добавить метод getStatistic который вернет нам объект с данными которые мы подсчитывали в пункте выше
// Добавить метод который будет обнулять наш счетчик

const counter = (...rest) => {
    const meter = {
        value: 0,
        increase: 0,
        get: 0
    }
    let count = 0;
    const makeCounter = (number = 0) => {
        if (number === 0)
            return count++;
        else
            count = number;
        return count;
    }
    meter.value = makeCounter();
    meter.increase = makeCounter() + 1;
    meter.get = makeCounter() - 1;
    return meter;
}
const result = counter();

console.log(result);
console.log(result.value);
console.log(result.increase);
console.log(result.get);
console.log(result.increase);





