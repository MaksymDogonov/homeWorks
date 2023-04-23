'use strict';

void function () {
    const arrOfNumber = [];
    const randomNumGenerator = () => {
        const numberGenerator = () => {
            if(arrOfNumber.length === 100) return NaN;
        }
            const randomNumber = Math.floor(Math.random() * 100) + 1;

            if (arrOfNumber.includes(randomNumber)) {
                return numberGenerator;
            }
            arrOfNumber.push(randomNumber);
            return randomNumber;
        }
        return randomNumGenerator;
    }
    const result = randomNumGenerator();
    console.log(result);
    let res = null;
    for (let i = 0;)