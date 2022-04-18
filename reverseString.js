const reverseString = (str = '') => {
    return str.split('').reverse().join('');
}

const reverseStringWithoutArr = (str = '') => {
    let res = '';
    for (let char of str) {
        res = char + res;
    }
    return res;
}

const str = 'Hello!';

console.log(reverseString(str));
console.log(reverseStringWithoutArr(str));
