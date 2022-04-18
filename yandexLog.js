function f() {
    console.log(this.x);
}

var obj = { x: 'yandex' }

f.call(obj)
