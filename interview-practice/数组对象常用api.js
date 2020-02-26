// let arr = [1,2,3,4,5]

// // concat
// let arr1 = arr.concat([6,7])
// console.log(arr1);

// //join
// let res = arr.join('@')
// console.log(res);

// // slice
// let res = arr.slice(1,3)
// console.log(res,arr);

// //splice
// let res = arr.splice(1,1)//删除（start,delnum）
// console.log(res,arr);

// let res = arr.splice(1,2,'r','s')//替换（start,替换个数，用什么替换）
// console.log(res,arr);

// let res = arr.splice(1,0,'q','w','e')//新增（start , 0 , 替换元素）
// console.log(res,arr);

// //indexof
// console.log(arr.indexOf('r'))

// //push pop shift unshift
// let res1 = arr.push('q')
// console.log(res1,arr);

// let res2 = arr.pop()
// console.log(res2,arr);

// let res3 = arr.shift()
// console.log(res3,arr);

// let res4 = arr.unshift(['q','d','s'])
// console.log(res4,arr);

// //reverse
// let res = arr.reverse()
// console.log(res,arr,arr===res);

//sort
// arr = [2,1,4,69,33,13,20,78,0]
// let res = arr.sort((a,b) => {return b - a})
// let res = arr.sort()
// console.log(res , arr , res === arr);


// let arr = [2,1,3,0,5,30,10]
// let res = arr.lastIndexOf(1)
// console.log(res);

// let arr = [2,1,3,0,5,30,10]
// let flag = arr.every((val,i,arr) => {
//     return val > 100
// })
// console.log(flag,arr);
// let flag = arr.some(val => {
//     return val < 3
// })
// console.log(flag);
arr = [3,4,5,5]
let res = arr.reduce((v1,v2) => {
    return v1 + v2
},20)
console.log(res);
