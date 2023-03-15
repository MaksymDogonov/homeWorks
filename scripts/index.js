'use strict';

const a = {
    x: 4,
    y: 9
};
const r = 10;
const message = 'лежит внутри окружност';
const result = a.x ** 2 + a.y ** 2 <= r ** 2 ? alert(message) : alert(`не ${message}`);
