const getCharCounteredString = (str = '') => {
    if (!/^[A-Z]+$/.test(str)) {
        return '';
    }

    const arrStr = str.split('');
    let currentChar;
    let currentCount;
    let res = '';

    arrStr.forEach(char => {
        if (char === currentChar) {
            currentCount++;
        } else {
            if (currentChar) {
                res += `${currentChar}${currentCount > 1 ? currentCount : ''}`;
            }
            currentChar = char;
            currentCount = 1;
        }
    });

    res += `${currentChar}${currentCount > 1 ? currentCount : ''}`;

    return res;
}

const str = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB';

console.log(getCharCounteredString(str));
