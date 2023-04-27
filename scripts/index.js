'use strict';

const bind = (fn, context, ...rest) => {
     return (...args) => {
          return fn.apply(context, [...rest, ...args]);
     }
}