const getStringRange = (arr = []) => {
    const sortedArr = arr.sort((a, b) => a - b);
    let startNumber;
    let prevNumber;
    let res = '';

    sortedArr.forEach((num, i) => {
        if (!i) {
            startNumber = num;
            prevNumber = num;
        } else {
            if (num - 1 === prevNumber) {
                prevNumber = num;
            } else {
                res += `${startNumber}${prevNumber === startNumber ? '' : `-${prevNumber}`},`;
                startNumber = num;
                prevNumber = num;
            }
        }
    })

    res += `${startNumber}${prevNumber === startNumber ? '' : `-${prevNumber}`}`;

    return res;
}

const arr = [1,4,5,2,3,9,8,11,0];
const arr2 = [1,4,3,2];
const arr3 = [1,4]

console.log(getStringRange(arr))
console.log(getStringRange(arr2))
console.log(getStringRange(arr3))
