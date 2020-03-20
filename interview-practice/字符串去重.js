//题目：返回出现最多次数的字符
var str = "aadbccbaabcndbb"
String.prototype.computeCount = function(){
    var strArr = this.split('')
    var obj = {}
    strArr.forEach((ele , i) => {
        obj[ele] ? obj[ele]++ : obj[ele] = 1
    })
    var target = {chart : '' , count : 0}
    for(var key in obj){
        if(obj[key] > target.count){
            target = {chart : key , count : obj[key]}
        }
    }
    return target
}
console.log(str.computeCount());