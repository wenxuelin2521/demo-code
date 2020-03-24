// var a = {name:'xm',sex:1 , age :18}
// var b = Object.create(a)
// b.age = 19
// console.log(b);
// console.log(b.__proto__);

"use strict"
var banana= {
    color: 'yellow',
    getColor: function(){
        return this.color
    }
}
var sub_banana= Object.create(banana, {
　　//添加taste属性
    taste: {
　　　　//详细解释
        writeable: false,
        get: function(){
            console.log('getTaste')
            return 'good'
        }
    },
　　//添加weight
　　weight: {
　　　　value: 600
　　}
})
sub_banana.color = 'red'
console.log(sub_banana)
console.log(sub_banana.color)
console.log(sub_banana.getColor())
console.log(sub_banana.taste) //good
console.log(sub_banana.weight) //600