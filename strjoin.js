const strjoinSimple = (div, ...chars) => {
    return chars.join(div);
}

const strjoin = (div, ...chars) => {
    let res = '';
    chars.forEach((char, i) => {
        res += i === chars.length - 1 ? char : `${char}${div}`;
    })
    return res;
}

const strjoinReduce = (div, ...chars) => {
    return chars.reduce((res, item, i) => res + (i === chars.length - 1 ? item : `${item}${div}`), '')
}

console.log(strjoinSimple('.', 'a', 'b', 'c'))
console.log(strjoinSimple('-', 'a', 'b', 'c', 'd', 'e', 'f'))

console.log(strjoin('.', 'a', 'b', 'c'))
console.log(strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f'))

console.log(strjoinReduce('.', 'a', 'b', 'c'))
console.log(strjoinReduce('-', 'a', 'b', 'c', 'd', 'e', 'f'))
