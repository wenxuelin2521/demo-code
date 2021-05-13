var name = "小明", age = 18;
var person = {
    name: this.name,
    age: this.age,
    sayHi() {
        console.log(this.name, this.age)
    }
}
console.log(person);
person.sayHi() // 浏览器中运行: 小明 , 18
/*========== 分割线 ==========*/
// code 2
var dog = {
    name: '旺财',
    age: 3
}
person.sayHi.call(dog) // 旺财 3
person.sayHi.apply(dog) // 旺财 3
person.sayHi.bind(dog)() // 旺财 3

/*========== 分割线 ==========*/
var teacher = {
    desc: '我是一个教师',
    teach(subject, exp) {
        console.log(`${this.desc},我的专业是${subject}, 我有${exp}年经验`);
    }
}
teacher.teach('文学', 5) // 我是一个教师,我的专业是文学, 我有5年经验
var doctor = {
    desc: 'i am a doctor'
}
teacher.teach.call(doctor, '医学', 20) //i am a doctor,我的专业是医学, 我有20年经验
teacher.teach.apply(doctor, ['医学', 20])//i am a doctor,我的专业是医学, 我有20年经验
teacher.teach.bind(doctor, '医学', 20)()//i am a doctor,我的专业是医学, 我有20年经验

// 使用ES6语法实现一个call
Function.prototype._call = function () {
    let context = arguments[0];
    context.fn = this;

    let args = [];
    for (let i = 0, len = arguments.length; i < len; i++) {
        args.push(arguments[i]);
    }

    // 把数组转换为一个伪数组
    let res = context.fn({ ...args });

    delete context.fn;
    return res;
}




function fun(somthing){
    console.log(this.name , somthing)
}

function bindFun(fn , obj){
    return function(){
        return fn.apply(obj,arguments)
    }
}
var obj = {
    name:"LiLei"
}
var bar = bindFun(fun , obj)
var b = bar("HanMeiMei")
console.log(b)

// LiLei HanMeiMei
// undefined