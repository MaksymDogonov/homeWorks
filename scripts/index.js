'use strict';

void function () {
    const numbersToGenerate = 100;

    const randomNumGenerator = () => {
        const arrOfNumber = [];
        const numberGenerator = () => {
            if (arrOfNumber.length === numbersToGenerate) return NaN;
            const randomNumber = Math.floor(Math.random() * numbersToGenerate) + 1;
            if (arrOfNumber.includes(randomNumber)) {
                return numberGenerator;
            }
            arrOfNumber.push(randomNumber);
            return randomNumber;
        }
        return numberGenerator;
    }
    const randomizer = randomNumGenerator();
    for (let result = randomizer(); !isNaN(result); result = randomizer()) {
        console.log(result);
    }
    console.log(`Length > ${numbersToGenerate}`);
}();