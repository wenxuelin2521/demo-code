import { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';

/**
 * @desc : 利用html2canvas插件实现一个截屏功能
 * @param: 想要截图的dom节点
 * @return: 返回一个image标签
 */
function useH2C(parmas = {}) {
    const [ dom, setDom ] = useState(null)
    const [ imageDom, setImageDom ] = useState(null);
    useEffect(() => {
        if(dom) {
            html2canvas(dom, Object.assign({
                scale: 1.2,
                useCORS: true,
            }, parmas)).then(canvas => {
                var image = canvas.toDataURL('image/png');
                setImageDom(image)
            })
        }
    },[dom])
    return [ imageDom, setDom ]
}

export default useH2C

// 外界调用

// import useH2C from '../../hook/html-canvas'
// function click(){
//     const [ imageDom, setDom ] = useH2C();
//     setDom(dom) //传入dom节点
//     useEffect(() => {
//         if(!!imageDom) {
//             //do something
//         }
//     },[imageDom])
// }
