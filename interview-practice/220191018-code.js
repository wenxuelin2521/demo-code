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

function sum(){
    let sum = 0 ;
    if(!arguments.length){
        return sum
    }
    for(let i = 0 ; i < arguments.length ; i++){
        sum += arguments[i]
    }
    return sum;
}

console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum());