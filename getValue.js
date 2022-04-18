const getValue = (obj = {}) => {
    const res = [];

    if (typeof obj.value !== 'undefined') {
        res.push(obj.value);
    }

    if (typeof obj.next !== 'undefined') {
        return [...res, ...getValue(obj.next)];
    }

    return res;
}

const data = {
    value: 123,
    next: {
        value: 321,
        next: {
            value: 348,
            next: {
                value: 981,
                next: {
                    value: 712,
                    next: {
                        value: 331
                    }
                }
            }
        }
    }
}

console.log(getValue(data));
