export const indexOf = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};

export const lastIndexOf = (array, value) => {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
};

export const includes = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
};

export const some = (array, predicate) => {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            return true;
        }
    }
    return false;
};

