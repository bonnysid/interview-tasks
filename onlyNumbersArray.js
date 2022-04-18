const getMultipleNumbers = (arr = [], mult = 2) => {
    return arr.filter(item => typeof item === 'number').map(item => item * mult);
}

const testArr = [1, '2', '3px', { a: 4 }, 5, null, false, true];

console.log(getMultipleNumbers(testArr));
