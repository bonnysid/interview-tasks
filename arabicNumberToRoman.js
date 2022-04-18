const RomanArabic = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}

const convertToRoman = (num = 0) => {
    let res = '';

    for (let key in RomanArabic) {
        while (num >= RomanArabic[key]) {
            res += key;
            num -= RomanArabic[key];
        }
    }

    return res;
}

console.log(convertToRoman(1905));
