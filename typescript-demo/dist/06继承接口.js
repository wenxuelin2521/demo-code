"use strict";
var poi2 = {
    z: 100,
    x: 100,
    y: 100,
    time: new Date()
};
//接口继承类
var Bird = /** @class */ (function () {
    function Bird() {
        this.type = "黄雀";
    }
    Bird.prototype.fly = function () {
    };
    return Bird;
}());
var flyingBird = {
    type: "燕子",
    fly: function () {
    }
};
