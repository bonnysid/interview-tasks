const fill = (arr = [], value, start, end) => {
    const copiedArr = [...arr];

    if (typeof start === 'undefined' || start < 0) {
        start = 0
    }

    if (typeof end === 'undefined' || end > copiedArr.length - 1) {
        end = copiedArr.length - 1;
    }

    for (let i = start; i <= end; i++) {
        copiedArr[i] = value;
    }

    return copiedArr;
}

console.log(fill([1, 2, 3], '*'))
console.log(fill([1, 2, 3, 4, 5], '*', 1, 3))
console.log(fill([1, 2, 3, 4, 5], '*', -2, 2))
