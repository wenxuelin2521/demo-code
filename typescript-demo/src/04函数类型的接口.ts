interface SumInterFace{
    (a: number, b: number): number
}

let sumFunc: SumInterFace = function (param1: number, param2:number) {
    return param1 + param2;
}
console.log(sumFunc(10 , 20));