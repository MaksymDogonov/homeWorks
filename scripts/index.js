'use strict';

const padString = (str, num, symbol, bool = true) => {
    if (typeof str !== 'string') return 'Error string';
    if (typeof num !== 'number' || Number.isNaN(num)) return 'Error number';
    if (typeof symbol !== 'string' || symbol.length !== 1) return 'Error symbol';
    if (typeof bool !== 'boolean') return 'Error boolean';
    if (str.length === num) return str;
    if (str.length > num) return str.substring(0, num);

    let strAddSymbol = '';
    for (let i = str.length; i < num; i++) {
        strAddSymbol += symbol;
    }
        return bool ? str + strAddSymbol : strAddSymbol + str;
};
console.log(padString('home work 17', 20, '*', false));