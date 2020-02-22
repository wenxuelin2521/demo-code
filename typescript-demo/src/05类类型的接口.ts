interface paperInterface {
    color : string ;
    draw():void
}
class Paper implements paperInterface {
    color:string = "red"
    write(){
        console.log('write');
    }
    draw(){
        console.log('draw');
    }
}

let paper1  = new Paper()
paper1.write()
paper1.draw()
console.log(paper1.color);