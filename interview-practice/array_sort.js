var arr = [1, 3, 2, 11, 32, 21, 44, 78, 4]

// 当前面的数大于后面的数的时候交换位置
// arr.sort((a , b) => {
//     return a - b
// })
// console.log(arr);

// 当后面的数大于前面的数的时候交换位置
arr.sort((a , b) => {
    return b - a
})
console.log(arr);