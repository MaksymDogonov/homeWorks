'use strict';

const padString = (str, num, symbol, bull) => {
    if (str === undefined) {
        return 'Error string';
    } else if (num === undefined) {
        return 'Error number';
    } else if (symbol === undefined) {
        return 'Error symbol';
    } else if (bull === undefined) {
        return 'Error bullion';
    } else {
        let strAddSymbol = '';
        for (let i = str.length; i < num; i++) {
            strAddSymbol += symbol;
        }
        let strSymbolAndStr = '';
        if (bull === false) {
            strSymbolAndStr = strSymbolAndStr.concat(strAddSymbol, str);
        } else {
            strSymbolAndStr = strSymbolAndStr.concat(str, strAddSymbol);
        }
        return strSymbolAndStr.substring(0, num);
    }
};
console.log(padString('home work 17', 20, '*', false));