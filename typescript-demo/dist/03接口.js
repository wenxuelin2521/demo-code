"use strict";
// option参数中 需要包含 url type data success
function ajax(options) {
}
ajax({
    url: "http://www.baidu.com",
    type: "get",
    // data: {}, 
    success: function (data) {
    }
});
var p1 = {
    coordx: 10,
    coordy: 20
};
// p1.coordx = 100 //error readonly
p1.coordy = 200;
var p2 = {
    coordx: 10,
    coordy: 20,
    coordz: 30
};
