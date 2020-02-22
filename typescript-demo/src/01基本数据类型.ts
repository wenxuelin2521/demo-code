// 布尔值
let flag: boolean = true
flag = 1 > 2
console.log(`flag=${flag}`);

// 数字
let sum: number = 100 // 十进制
let bin: number = 0x0101 // 二进制
let oct: number = 0o271 // 八进制
let hex: number = 0xfff // 十六进制
console.log(sum, bin, oct, hex);


// 字符串
let desc: string = "hello world"
desc = `typescript + ${desc}`
console.log(desc)

// 数组
let strArr: string[] = ['a', 'b', 'c'] //字符数组
let numArr: number[] = [1, 2, 3, 4] // 数字数组
let objArr: object[] = [{ name: 'xm', age: 18 }] // 对象数组
let bolArr: Array<boolean> = [true, false] // 范式的写法

// 元祖：已知每一个元素类型和元素数量的数组
let x: [number, string] = [10, 'hello']
console.log('元祖====使用', x[0]);
// x[3] = 100;  // error

// 枚举 enum
enum Color {
    Red = 1,
    Green,
    Blue
}
let color1: Color = Color.Red
let color2: string = Color[2]
console.log(color1, color2); // 1 Green

// 任意值 any
let unknowVal: any
unknowVal = 1
unknowVal = "hello"
unknowVal = { name: 'xx' }
let anyList: any[] = [1, 'hello', {}, []]

// 控制 void
function func1(x: number): void {
    console.log(x++);
    // return 0 // error
}
let voidVal: void = undefined

// null 和 undefined
let u: undefined = undefined;
let n: null = null;

// never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
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
let str : any= "hello world!"
// let strlen : number = (<string>str).length // 方式一：尖括号+类型
let strlen : number = (str as string).length // 方式二： as语法。A as Type
console.log(`类型断言：${strlen}`);

