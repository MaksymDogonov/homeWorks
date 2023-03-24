'use strict';

const cost = (liters) => {
    const weight = 75;
    const price = 13;
    const needPot = 4;
    let result = liters * needPot * weight/ 1000 * price;
    if (!Number.isInteger(result)) return Math.ceil(result);
    return result;
}
console.log(`стоимость ${cost(48)} грн`);