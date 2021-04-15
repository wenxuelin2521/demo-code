/**
 * 实现add
 * console.log(add())
 * console.log(add(1)(2)())
 * console.log(add(2)(4)(7)())
 * console.log(add(5)(-1)(3)(6)())
 */
function add(){
    let sum = 0
    if(!arguments.length){
        return sum
    }
    sum += arguments[0]

    return function(){
        if(arguments.length){
            return add(arguments[0]+sum)
        }
        return sum
    }

}
console.log(add())
console.log(add(1)(2)())
console.log(add(2)(4)(7)())
console.log(add(5)(-1)(3)(6)())