// 布尔值
let flag : boolean = true
flag = 1 > 2
console.log(`flag=${flag}`);

// 数字
let sum : number = 100 // 十进制
let bin : number = 0x0101 // 二进制
let oct : number = 0o271 // 八进制
let hex : number = 0xfff // 十六进制
console.log(sum , bin , oct , hex);


// 字符串
let desc : string = "hello world"
desc = `typescript + ${desc}`
console.log(desc)

// 数组
let strArr : string[] = ['a', 'b' , 'c'] //字符数组
let numArr : number[] = [1,2,3,4] // 数字数组
let objArr : object[] = [{name:'xm',age:18}] // 对象数组
let bolArr : Array<boolean> = [true , false] // 范式的写法