// function A(){
//     console.log(arguments);
// }
// var B = (...rest) => {
//     // console.log(arguments); //报错
//     console.log(rest);
// }


// A(1)
// B(2,3,4)

// var obj = {
//     a : 10,
//     b : function(n){
//         console.log(this.a , this);
//     },
//     c : (n) => {
//         console.log(this.a , this);
//     }
// }
// obj.b() // 10 
// obj.c() // undefined

var fun1 = () => {
    console.log(11);
}
function fun2() {
    console.log(22);
}
console.log(fun1.prototype); // undefined
console.log(fun2.prototype); // object...