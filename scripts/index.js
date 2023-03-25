'use strict';

const cost = (liters, weight, price, needPot) => {
    let result = liters * needPot * weight / 1000 * price;
    if (!Number.isInteger(result)) return Math.ceil(result);
    return result;
}
console.log(`стоимость ${cost(48, 75, 13, 4)} грн`);