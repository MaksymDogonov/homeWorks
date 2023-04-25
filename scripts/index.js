'use strict';
const bind = (fn, context, ...rest) => {
    return (...args) => {
        context.fn = fn;
        const res = context.fn(...rest, ...args);
        delete context.fn;
        return res;
    }
}