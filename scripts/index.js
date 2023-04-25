'use strict';

let calculator = {
    read: () => {
        this.element1 = +prompt('add element 1');
        this.element2 = +prompt('add element 2');
        if (isNaN(this.element1) || isNaN(this.element2)) {
            alert('add number');
        }
    },
    sum: () => {return this.element1 + this.element2},
    mul: () => {return this.element1 * this.element2}
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
