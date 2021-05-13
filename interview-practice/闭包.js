// for(var i = 0 ; i < 5 ; i++){
//     setTimeout(() => {
//         console.log(i);
//     } , i * 1000 )
// }

// for(var i = 0 ; i < 5 ; i++){
//     (function(j){
//         setTimeout(() => {
//             console.log(j);
//         } , j * 1000 )
//     })(i)
// }

// for(var i = 0 ; i < 5 ; i++){
//     setTimeout((j) => {
//         console.log(j);
//     } , i * 1000 , i)
// }


var name = "world";
(function(){
    console.log(typeof name)
    if(typeof name === undefined){
        var name = 'jack'
        console.log('goodbye ' + name)
    }else{
        console.log('hello ' + name)
    }
})()

// 结果：hello undefined

// 考点：
// 1. 变量提升：闭包函数中，有var name的声明提升到函数作用于顶部覆盖了最外层的生命，相当于 var name = undefined
// 2. undefined === undefined 为true；但是typeof返回的是字符串




// function logNum(num){
//     console.log("num" , num)
// }

// for(var i = 0 ; i < 2 ; i++){
//     var fun = logNum.bind(null , i)
//     setTimeout(fun , 100);
// }
// 结果： 
// num 0 
// num 1


