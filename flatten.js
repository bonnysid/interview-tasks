const flatten = (arr = []) => {
    let res = [];

    arr.forEach(item => {
        if (Array.isArray(item)) {
            res = [...res, ...flatten(item)];
        } else {
            res = [...res, item];
        }
    })

    return res;
}

console.log(flatten([[1, 2], [3, [4, [5]]], 'a', false]));
console.log(flatten([1, ['a'], function() {}, [[null]], { a: 'b', c: 3 }]));
