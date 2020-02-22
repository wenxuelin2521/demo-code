
interface AjaxOptions{
    url: string;
    // 给属性加上？之后，这个属性就是可选的！
    type?: string;
    data?: object;
    success(data: object): void
}


// option参数中 需要包含 url type data success
function ajax(options: AjaxOptions) {
    
}

ajax({
    url: "http://www.baidu.com",
    type: "get", // 定义的时候使用了可选属性
    // data: {}, 
    success(data) {
        
    }
})

interface PointRules {
    readonly coordx : number; // 只读属性
    coordy : number; 
    [keyName : string] : any  //可配置属性
}
let p1 : PointRules = {
    coordx : 10,
    coordy : 20
}
// p1.coordx = 100 //error readonly
p1.coordy = 200

let p2 : PointRules = {
    coordx : 10 ,
    coordy : 20 ,
    coordz : 30
}