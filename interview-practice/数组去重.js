const set = new Set([1, 2, 3, 4, 4]);
console.log([...set])

var obj1 = {
    name:'xm',
    age:18
}
var obj2 = {
    name:'xh',
    age:19
}
var obj3 = {
    name:'xg',
    age:20
}
const set1 = new Set([obj1,obj2,obj3,obj1,obj2,obj3])
console.log([...set1]);