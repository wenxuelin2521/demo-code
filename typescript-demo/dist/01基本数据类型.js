"use strict";
// 布尔值
var flag = true;
flag = 1 > 2;
console.log("flag=" + flag);
// 数字
var sum = 100; // 十进制
var bin = 0x0101; // 二进制
var oct = 185; // 八进制
var hex = 0xfff; // 十六进制
console.log(sum, bin, oct, hex);
// 字符串
var desc = "hello world";
desc = "typescript + " + desc;
console.log(desc);
// 数组
var strArr = ['a', 'b', 'c']; //字符数组
var numArr = [1, 2, 3, 4]; // 数字数组
var objArr = [{ name: 'xm', age: 18 }]; // 对象数组
var bolArr = [true, false]; // 范式的写法
// 元祖：已知每一个元素类型和元素数量的数组
var x = [10, 'hello'];
console.log('元祖====使用', x[0]);
// x[3] = 100;  // error
// 枚举 enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var color1 = Color.Red;
var color2 = Color[2];
console.log(color1, color2); // 1 Green
// 任意值 any
var unknowVal;
unknowVal = 1;
unknowVal = "hello";
unknowVal = { name: 'xx' };
var anyList = [1, 'hello', {}, []];
// 控制 void
function func1(x) {
    console.log(x++);
    // return 0 // error
}
var voidVal = undefined;
// null 和 undefined
var u = undefined;
var n = null;
// never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
//Object
// declare function create(o: object | null): void;
// create({ prop: 0 }); // OK
// create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// 类型断言
var str = "hello world!";
// let strlen : number = (<string>str).length // 方式一：尖括号+类型
var strlen = str.length; // 方式二： as语法。A as Type
console.log("\u7C7B\u578B\u65AD\u8A00\uFF1A" + strlen);
