
/*
// 1.原型继承
// 声明父类
function Person(name , age){
    this.name = name
    this.age = age
}
// 父类有一个公有方法
Person.prototype.sayHi = function(){
    console.log('hi')
}
// 声明子类
function Teacher(job){
    this.job = job
}
// 子类继承父类
Teacher.prototype = new Person("小明",18)
var t1 = new Teacher('教育')

// 原型继承的缺点：
//（1）引用缺陷
//（2）初始化继承属性会变成一样的

*/



/*
// 2.构造函数继承
// 声明父类
function Person(name , age){
    this.name = name
    this.age = age
    this.type = [10 , 20 , 30]
}
// 父类有一个公有方法
Person.prototype.sayHi = function(){
    console.log('hi')
}
// 声明子类
function Teacher(job , name ,age){
    Person.apply(this , [name ,age])
    this.job = job
}
// 缺点：
// 无法获取父类的公共方法
*/

/*
// 3.组合继承 ：上面两种组合在一起
// 声明父类
function Person(name , age){
    this.name = name
    this.age = age
    this.type = [10 , 20 , 30]
}
// 父类有一个公有方法
Person.prototype.sayHi = function(){
    console.log('hi')
}
// 声明子类
function Teacher(job , name ,age){
    Person.apply(this , [name ,age])
    this.job = job
}
Teacher.prototype = new Person()
// 缺点：调用了两次父类构造函数
*/

/*
// 4.寄生组合 : 在组合继承上少调用一次父类构造函数
function Person(name , age){
    this.name = name
    this.age = age
    this.type = [10 , 20 , 30]
}
// 父类有一个公有方法
Person.prototype.sayHi = function(){
    console.log('hi')
}
// 声明子类
function Teacher(job , name ,age){
    Person.apply(this , [name ,age])
    this.job = job
}
// 关键：
Teacher.prototype = Object.create(Person.prototype)
Teacher.prototype.constructor = Teacher
*/

// 5.class 和 extends