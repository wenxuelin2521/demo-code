import React from 'react'
import html2canvas from 'html2canvas';

export default class Com1 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'this is components4',
            list:[
                {id:1,content:'11111111'},
                {id:2,content:'22222222'},
                {id:3,content:'33333333'},
                {id:4,content:'44444444'},
                {id:5,content:'55555555'}
            ],
            isShow:false,
            msg:'init'
        }
    }
    componentDidMount(){

    }
    screenShot(){
        var w = document.getElementById('com1').clientWidth;
	    var h = document.getElementById('com1').clientHeight;
			html2canvas(document.querySelector('#com1'), {
                scale:1
			}).then(canvas => {
                var image = canvas.toDataURL('image/png');
                var imgDom = document.getElementById('img')
                imgDom.setAttribute('style',`display:inline-block;width:${w};height:${h};`)
                imgDom.setAttribute('src',image)
            })
    }
    render(){
        return <div className="root">
            <span style={{cursor:'pointer',backgroundColor:'orange'}} onClick={() => {this.screenShot()}}>截屏</span>
            <hr/>

            {/* --------------------1：测试元素超出屏幕能否正常截图----------------------- */}
            {/* <div id="com1" style={{height:'1000px',width:'800px',backgroundColor:'#ccc',border:'1px solid #000',boxSizing:'border-box',position:'relative'}}>
                <div style={{height:'50px',width:'100px',backgroundColor:'cyan',position:'absolute',right:0,bottom:0}}></div>
            </div> */}
            {/* --------------------2：测试元素隐藏是否能够正常截图----------------------- */}
            <div id="father-box" style={{height:'0px',overflow:'hidden'}}>
                <div id="com1" style={{height:'1000px',width:'800px',backgroundColor:'#ccc',border:'1px solid #000',boxSizing:'border-box',position:'relative'}}>
                    <div style={{height:'50px',width:'100px',backgroundColor:'cyan',position:'absolute',right:0,bottom:0}}></div>
                </div>
            </div>
            <hr/>
            {/* <img id="html2canvas"></img> */}
            <img id="img" style={{display:'inline-block'}} src=''/>
        </div>
    }
}