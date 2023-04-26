'use strict';

const counter = (value = 0) => {
    let count = value;
    const statistic = {
        counterValue: 0,
        counterDecrease: 0,
        counterIncrease: 0
    }
    return {
        value() {
            statistic.counterValue++;
            return count;
        },
        increase() {
            statistic.counterIncrease++;
            count += 1
        },
        decrease() {
            statistic.counterDecrease++;
            count -= 1
        },
        getStatistic() {
            return statistic;
        },
        reset() {
            statistic.counterValue = 0;
            statistic.counterDecrease = 0;
            statistic.counterIncrease = 0;
            count = value;
        }
    }
}

const result = counter();
const result2 = counter(10);
