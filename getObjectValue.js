const getObjectValue = (obj = {}, path = '') => {
    const keys = path.split('.');
    let wasIteration = false;
    let res;

    keys.forEach(key => {
        if (wasIteration && !res) {
            return res;
        }

        if (!res) {
            res = obj[key];
            wasIteration = true;
        } else {
            res = res[key];
        }
    })

    return res;
}

const obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f',
    }
}

console.log(getObjectValue(obj, 'a.b'))
console.log(getObjectValue(obj, 'a.b.c'))
console.log(getObjectValue(obj, 'a.e'))
console.log(getObjectValue(obj, 'a.x.e'))
