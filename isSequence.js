const isSequence = (a = '', b = '') => {
    let arrB = b.split('');
    let lastIndex = 0;
    let res = true;

    for (let char of a) {
        const indexOfEqual = arrB.indexOf(char);

        if (indexOfEqual === -1 || lastIndex > indexOfEqual) {
            return false;
        } else {
            lastIndex = indexOfEqual - 1;
            arrB.splice(indexOfEqual, 1);
        }
    }

    return res;
}

console.log(isSequence('car', 'cartwheel'))
console.log(isSequence('cwhl', 'cartwheel'))
console.log(isSequence('cwhee', 'cartwheel'))
console.log(isSequence('cartwheel', 'cartwheel'))
console.log(isSequence('cwheeel', 'cartwheel'))
console.log(isSequence('lw', 'cartwheel'))
