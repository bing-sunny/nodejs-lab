function* test(p){
    console.log(p); // 1
    var a = yield p + 1;  // == yield ( p + 1 )
    console.log(a); // 3
    // 不同
    // var a = (yield p) + 1;
    //console.log(a); // 4
}

var g = test(1);
var ret = g.next();
console.log(ret); // { value: 2, done: false }
ret = g.next(3);
console.log(ret); // { value: undefined, done: true }

