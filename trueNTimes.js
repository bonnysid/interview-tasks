const canGet = (times = 2) => {
    return () => {
        let res = times > 0 ? 'yes' : 'no';
        times--;
        return res;
    }
}

const getOne = canGet(2);

console.log(getOne() === 'yes');
console.log(getOne() === 'yes');
console.log(getOne() === 'no');
