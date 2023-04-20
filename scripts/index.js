'use strict';
// Task #1
// Реализовать рекурсивную функцию которая находит факториал переданного в нее числа
// getFactorial(3) // в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1
//
// Task #2
// Реализовать рекурсивную функцию которая находит возводит число в степень.
//     Число которое нужно возвести в степень передается как первый аргумент в функцию
// Степень передается как второй аргумент в функцию
// pow(num, degree)
//
// Task #3
// Рекурсивное суммирование
// Задача: напишите рекурсивную функцию для вычисления суммы заданных положительных целых чисел a и b без прямого
// использования оператора +.
//
// Необходимо инкрементировать одно число на единицу до тех пор, пока другое число не окажется равным нулю.
const task1 = (num) => {
    let result = 1;
    const getFactorial = (number) => {
        if (number > 0) {
            result *= number;
            number = number - 1;
            getFactorial(number);
        }
        return result;
    }
    return getFactorial(num)
}
console.log(task1(3));

const task2 = (num, deg) => {
    let result = 1;
    const pow = (number, degree) => {
        if (degree > 0) {
            result *= number;
            degree = degree - 1;
            pow(number, degree);
        }
        if (degree < 0) {
            result /= number;
            degree = degree + 1;
            pow(number, degree);
        }
        return result;
    }
    return pow(num, deg)
}
console.log(task2(5, -1));