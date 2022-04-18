const getEntries = (a = [], b = []) => {
    const bCopy = [...b];
    return a.filter(item => {
        const indexOfEntry = bCopy.indexOf(item);
        if (indexOfEntry !== -1) {
            bCopy.splice(indexOfEntry, 1);
            return true;
        }
        return false;
    })
}

const a = [1, 2, 3, 2, 0];
const b = [5, 1, 2, 7, 3, 2];

console.log(getEntries(a, b));
