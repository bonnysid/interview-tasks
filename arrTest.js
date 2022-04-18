let i = 10;
var array = [];

while (i--) {
    let j = i;
    array.push(function() {
        return j + j;
    })
}

console.log(array[0]())
console.log(array[1]())
