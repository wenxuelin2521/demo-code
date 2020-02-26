// let obj = {
//     name:'xm',
//     age:12,
//     sex:1
// }
// console.log(Object.keys(obj));

// function defineReactive(obj, key, value) {
//     Object.defineProperty(obj, key, {
//         enumerable: true, // 可枚举
//         configurable: true, // 可配置的
//         get: function() {
//             console.log('===========触发get===========');
//             return value;
//         },
//         set: function(newValue) {
//             console.log('===========触发set===========');
//             value= newValue;
//         }
//     });
// }

// var person = {name: '张三', say: '我是路人甲', run: '我会跑步'};

// function Observer(value) {
//     const keys = Object.keys(value)
//     keys.forEach(k => {
//         defineReactive(value, k, value[k]);
//     });
// }
// Observer(person)
// console.log(person.run)
// person.say = '我是路人乙';
// person.eat = '我要吃饭';  // 没有任何输出

//运行结果：
// ===========触发get===========
// 我会跑步
// ===========触发set===========

// var arr = ['one', 'two', 'three']
// Observer(arr)
// console.log(arr[0])
// arr[1] = '2';
// arr[3] = '4';  // 没有触发set方法
// console.dir(arr)

//运行结果
// ===========触发get===========
// one
// ===========触发set===========
// [ [Getter/Setter], [Getter/Setter], [Getter/Setter], '4' ]

let target = {
    get(obj, key, receiver) {
        console.log('===========触发get===========');
        return Reflect.get(obj, key, receiver);
    },
    set(obj, key, value, receiver) {
        console.log('===========触发set===========');
        obj[key] = value;
        return Reflect.set(obj, key, value, receiver);
    },
}

var person = { name: '张三', say: '我是路人甲', run: '我会跑步' };

let newObj = new Proxy(person, target);
console.log(newObj.run)
newObj.say = '我是路人乙';
newObj.eat = '我要吃饭';
console.dir(person)

var arr = ['one', 'two', 'three']
let otherObj = new Proxy(arr, target);
console.log(otherObj[0])
otherObj[1] = 'new-two';
otherObj[3] = '4';
console.dir(arr)

//运行结果
// ===========触发get===========
// 我会跑步
// ===========触发set===========
// ===========触发set===========
// { name: '张三', say: '我是路人乙', run: '我会跑步', eat: '我要吃饭' }
// ===========触发get===========
// one
// ===========触发set===========
// ===========触发set===========
// [ 'one', 'new-two', 'three', '4' ]