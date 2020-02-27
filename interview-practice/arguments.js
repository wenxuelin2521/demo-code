function test(){
    console.log(Array.isArray(arguments)) // false
}

// test(1,2,3)

var listobj = {
    0 : '00',
    1 : '01',
    2 : '02',
    3 : '03',
    length : 4
}
// 调用数组的方法：
// Array.prototype.push.call(listobj , '04')
// let res = Array.prototype.map.call(listobj , function(item){
//     return item + 'ok'
// })
// console.log(listobj);
// console.log(res);

// 转换成真正的数组

// 1.遍历
let res = Array.prototype.map.call(listobj , (item) => {
    return item
})
console.log(res);

// 2. slice splice
let res2 = Array.prototype.slice.call(listobj)
console.log(res2);

// 用splice会改变原数据
// let res3 = Array.prototype.splice.call(listobj , 0) 
// console.log(res3 , listobj);

// 3. Array.from
let res4 = Array.from(listobj)
console.log(res4);