// console.log(typeof(a))  // undefined
// console.log(typeof(null))//object
// console.log(typeof(true))//boolean
// console.log(typeof(123))//number
// // console.log(typeof(a))
// console.log(typeof('a'))//string
// // console.log(typeof(a))
// var b = function(){
//     console.log('hello');
// }
// console.log(typeof(b))//function
// var c = {
//     name:'xm'
// }
// console.log(typeof(c))//object

// function sum(){
//     let sum = 0 ;
//     if(!arguments.length){
//         return sum
//     }
//     for(let i = 0 ; i < arguments.length ; i++){
//         sum += arguments[i]
//     }
//     return sum;
// }

// console.log(sum(1,2,3));
// console.log(sum(1,2));
// console.log(sum());


function getSum(arr , n){
    if(arr.length < n || n <= 0){
        return null
    }
    if(arr.length == n){
        let sum = 0 
        arr.forEach(item => {
            sum += item
        })
        return sum
    }
    let sum = 0 , targetArr = []
    for(let i = n ; i > 0 ; i--){
        let rIndex = Math.round(Math.random() * i)
        let ele = arr.splice(rIndex ,1)
        targetArr.push(ele[0])
        sum += ele[0]
    }
    return sum
    

}

let list = [1 , 2 , 3 , 4 ,5 ,6 , 7 , 8 , 9 ,10]
let result = getSum(list , 3)
console.log('====',result);


var A = function(){}
A.prototype = {}
var a = new A()
A.prototype = {}
var b = new A()
console.log(a instanceof A)
console.log(b instanceof A)

// var A
// var a
// var b
// A = function(){}
// A.prototype = {}
// a = new A()
// A.prototype = {}
// b = new A()
// console.log(a instanceof A) // false
// console.log(b instanceof A) // true

var a = {n:1}
var b = a
a.x = a = {n:2}
console.log(a.x) // {n:2}
console.log(b.x); // undefined