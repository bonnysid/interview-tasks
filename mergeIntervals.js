const mergeIntervals = (arr = [[]]) => {
    const sortedArr = arr.sort((a, b) => a[0] - b[0]);
    const res = [];

    sortedArr.forEach((item) => {
        const startRange = item[0];
        const endRange = item[1];
        const prevElem = res[res.length - 1];

        if (!prevElem) {
            res.push(item);
        } else {
            const prevEndRange = prevElem[1];
            if (prevEndRange >= startRange && endRange > prevEndRange) {
                prevElem[1] = endRange;
            } else {
                res.push(item);
            }
        }
    });

    return res;
}

const intervalsA = [
    [4, 8],
    [3, 5],
    [1, 2],
    [7, 12],
];

const intervalsB = [
    [3, 4],
    [1, 2],
    [4, 5],
    [2, 3],
];

console.log(mergeIntervals(intervalsA));
console.log(mergeIntervals(intervalsB));
