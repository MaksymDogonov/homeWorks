'use strict';

const array = [2, 4, 8, 6, 7 , 5 ,9];

//indexOf
const indexOf = (arr, element) => {
    if (arr.includes(element) === true) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === element) {
                return i;
            }
        }
    } else {
        return -1;
    }
}
indexOf(array, 9);

//lastIndexOf
const lastIndexOf = (arr, element) => {
    let result;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === element) {
            return result = i;
        }
    }
    if( result === undefined){
        return -1;
    }
}
lastIndexOf(array, 7);

//find
const find = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}
find(array, (it) => it === 9);

//findIndex
const findIndex = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}
findIndex(array, (it) => it === 6);

//includes
const includes = (arr, element) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
includes(array, 9);

//every
const every = (arr, callback) => {
    if (arr.length === 0) {
        return true;
    }
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            continue;
        }
        return false;
    }
    return true;
}
every(array, (it) => it % 2);

//some
const some = (arr, callback) => {
    if (arr.length === 0) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}
some(array, (it) => it === 7);