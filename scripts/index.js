'use strict';
// Вам нужно написать реализацию функции padString, которая принимает 4 аргумента:
//
//     строку
// число, которое является длинной строки, которую мы хотим получить в результате выполнения функции
// символ (строка длинной 1 символ) — которым дополнится строка, если это будет необходимо
// параметр булеан (true или false), который определяет, добавлять символы слева или справа (по умолчанию справа)
// Обязательно при написании функции необходимо проверить аргументы, которые мы передали, и если каких-то аргументов нет,
//     то вернуть из функции строку с ошибкой (return ‘some error’). Сообщение с ошибкой должно быть разное в зависимости от
// того условия, по которому не прошла проверка.
//
//     Результат вызова функции нужно вывести в консоль — после завершения функции.
//
//     Например:
// Вызов padString(‘hello’, 8, ‘*’) вернет строку hello***
//
// А вызов padString(‘hello’, 6, ‘*’, false) вернет строку *hello
//
// Вызов padString(‘hello’, 2) вернет ‘he’ — если число меньше, чем размер введенной строки, нужно строку обрезать при
// помощи метода substr
const padString = (str, num, symbol, bull) => {
    if (str === undefined) {
        return 'Error string';
    } else if (num === undefined) {
        return 'Error number';
    } else if (symbol === undefined) {
        return 'Error symbol';
    } else if (bull === undefined) {
        return 'Error bullion';
    } else{
        let string = null;
        string = str.substring(0, num);
        if (bull === false){

        } else {
            for(let i = str.length; i < num; i++){

            }
        }

        return string;
    }
};
console.log(padString('home work 17', 20, '!', false ));
