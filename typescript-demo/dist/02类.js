"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 基本使用
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.sayHi = function () {
        console.log("Person\u7C7B\u7684 \u3002hi ! i am " + this.name);
    };
    return Person;
}());
// let p  = new Person('小明' , 20)
// p.sayHi()
// console.log(p , Person.prototype);
// 继承
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, skill) {
        var _this = _super.call(this, name, age) || this;
        _this.skill = skill;
        return _this;
    }
    Teacher.prototype.teach = function () {
        console.log('i am a teach. i can ' + this.skill);
    };
    Teacher.prototype.sayHi = function () {
        console.log('teach类的sayHi');
        _super.prototype.sayHi.call(this);
    };
    return Teacher;
}(Person));
// let t = new Teacher('tony' , 22 , 'teach')
// t.sayHi()
// t.teach()
//public private protected修饰符
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('animal eat');
    };
    Animal.prototype.clean = function () {
        console.log('animal clean');
    };
    return Animal;
}());
// let catA = new Animal('tom')
// console.log(catA.name); //error
// catA.eat() // ok
// catA.clean() // error
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.clean = function () {
        console.log('cat----clean');
        _super.prototype.clean.call(this);
    };
    return Cat;
}(Animal));
// let catB = new Cat('jack')
// catB.clean()
// console.log(catB);
// readonly修饰符
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
var ponit1 = new Point(100, 200);
// ponit1.x = 300// error
// get 和 set
var Box = /** @class */ (function () {
    function Box() {
        this._fullname = "";
    }
    Object.defineProperty(Box.prototype, "fullname", {
        get: function () {
            return this._fullname;
        },
        set: function (name) {
            this._fullname = name;
        },
        enumerable: true,
        configurable: true
    });
    return Box;
}());
var box1 = new Box();
// console.log(box1._fullname); // error
box1.fullname = 'theB';
console.log(box1.fullname);
