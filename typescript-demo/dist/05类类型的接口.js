"use strict";
var Paper = /** @class */ (function () {
    function Paper() {
        this.color = "red";
    }
    Paper.prototype.write = function () {
        console.log('write');
    };
    Paper.prototype.draw = function () {
        console.log('draw');
    };
    return Paper;
}());
var paper1 = new Paper();
paper1.write();
paper1.draw();
console.log(paper1.color);
