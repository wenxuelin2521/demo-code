// 基本使用
class Person{
    name:string
    age:number
    constructor(name:string , age:number){
        this.name = name
        this.age = age
    }
    sayHi():void{
        console.log(`Person类的 。hi ! i am ${this.name}`);
    }
}
// let p  = new Person('小明' , 20)
// p.sayHi()
// console.log(p , Person.prototype);


// 继承
class Teacher extends Person{
    skill:string
    constructor(name:string , age:number , skill:string){
        super(name , age)
        this.skill = skill
    }
    teach():void{
        console.log('i am a teach. i can ' + this.skill);
    }
    sayHi():void{
        console.log('teach类的sayHi');
        super.sayHi()
    }
}
// let t = new Teacher('tony' , 22 , 'teach')
// t.sayHi()
// t.teach()


//public private protected修饰符
class Animal{
    private name : string
    constructor(name:string){
        this.name = name
    }
    public eat():void{
        console.log('animal eat');
    }
    protected clean():void{
        console.log('animal clean');
    }
}
// let catA = new Animal('tom')
// console.log(catA.name); //error
// catA.eat() // ok
// catA.clean() // error

class Cat extends Animal{
    constructor(name : string){
        super(name)
    }
    public clean(){
        console.log('cat----clean');
        super.clean()
    }
}

// let catB = new Cat('jack')
// catB.clean()
// console.log(catB);


// readonly修饰符
class Point{
    readonly x:number
    readonly y:number
    constructor(x:number , y:number){
        this.x = x
        this.y = y
    }
}
let ponit1 = new Point(100 , 200)
// ponit1.x = 300// error


// get 和 set
class Box {
    private _fullname:string = ""
    get fullname():string{
        return this._fullname
    }
    set fullname(name:string){
        this._fullname = name
    }
}
let box1 = new Box()
// console.log(box1._fullname); // error
box1.fullname = 'theB'
console.log(box1.fullname)