import { useState, useEffect, useMemo, useCallback } from 'react';
import {getCookie} from 'components/util'

const convertTime = (nowDate,Deadline) => {
    // 分割参数Deadline
    var _dateArr = Deadline.split(':');
    // 分别获取参数中对应的时、分、秒
    var hours = parseInt(_dateArr[0]);
    var minutes = parseInt(_dateArr[1]);
    var seconds = parseInt(_dateArr[2]);
    // 设置对应时分秒
    nowDate.setHours(hours); 
    nowDate.setMinutes(minutes); 
    nowDate.setSeconds(seconds);
    // 获取当前天中指定时分秒对应的毫秒数
    var result =  Date.parse(nowDate);
    return result;
}

//以毫秒为单位设置cookie
export const setCookieBySec = (c_name, value, deatline, path = '/') => {
    var curDate = new Date();
    var curTime = curDate.getTime();
    // 获取指定时间的时间戳
    var endTime = convertTime(curDate,deatline);
    // 计算出指定时间与当前时间的时间差
    // var disTime = endTime - curTime;
    // 设置cookie过期时间
    var exp = new Date(endTime); 
    document.cookie = c_name + "=" + encodeURIComponent(value) + ((deatline == null) ? "" : ";expires=" + exp.toGMTString()) + ";path=" + path;
}
// 备注：
    //  刚开始使用了hook实现，后面发现引用的组件都是类组件
    //  所以使用封装函数的方法，对外暴露一个方法出去给调用
    //  注释的代码是hook方法实现的，还没用用于测试

// 外面组件调用的代码
// 处理点赞引导分享
// handleLikeShare(){
//     let [needShowTips,tips] = addLikeNum()
//     if(needShowTips){
//         this.setState({
//             needShowTips:needShowTips,
//             tips:tips
//         },() => {
//             setTimeout(() => {
//                 this.setState({
//                     needShowTips:false,
//                     tips:''
//                 })
//             },2000)
//         })
//     }
// }


// 需求：
// 1、每天首次点赞必显示提示语
// 2、当天后续每隔5次点赞，出现一次提示语
// 3、提示语从以下模板轮流取文案：
    // -生成长图海报，发给其他人看看吧~
    // -最大的认可就是分享哦！
    // -点这里可以生成长图海报
    // -喜欢这个想法就扩散出去吧！

/**
 * @desc:利用cookie有效性
 * 1、点赞后判断cookie中有没有有效值，如果没有说明是当天第一次点赞
 * 2、如果有，说明不是当天第一次点赞，根据cookie值判断当前点击次数是不是5的倍数
 * 3、点赞自己的，不需要显示提示语
 * @return:是否需要展示提示needShowTips，提示语tips
 * 外面根据这两个返回值决定操作
 */
const shareTipsList = [
    "生成长图海报，发给其他人看看吧",
    "最大的认可就是分享哦！",
    "点这里可以生成长图海报",
    "喜欢这个想法就扩散出去吧！"
]
const getTips = () => {
    let i = Math.floor(Math.random()*shareTipsList.length)
    return shareTipsList[i]
}

export function addLikeNum() {
    let clickLikeNum = Number(getCookie('clickLikeNum')) || 0
    let needShowTips = false
    let tips = ''

    clickLikeNum += 1

    if(clickLikeNum == 1 || clickLikeNum % 5 == 0){
        tips = getTips()
        needShowTips = true
    } else {
        needShowTips = false
    }
    setCookieBySec('clickLikeNum',clickLikeNum,'24:00:00')
    
    return [needShowTips,tips]
}

// export function useLikeShare(params){
//     const shareTipsList = [
//         "生成长图海报，发给其他人看看吧",
//         "最大的认可就是分享哦！",
//         "点这里可以生成长图海报",
//         "喜欢这个想法就扩散出去吧！"
//     ]
//     const [clickLikeNum , setClickLikeNum] = useState(getCookie('clickLikeNum') || 0)
//     const [needShowTips,setNeedShowTips] = useState(false)
//     const [tips,setTips] = useState('')

//     let addLikeNum = () => {
//         setClickLikeNum(clickLikeNum + 1)
//     }

//     let getTips = () => {
//         let i = Math.floor(Math.random()*shareTipsList.length)
//         setTips(shareTipsList[i])
//     }

//     useEffect(() => {
//         if(clickLikeNum == 1 || clickLikeNum % 5 == 0){
//             getTips()
//             setNeedShowTips(true)
//         } else {
//             setNeedShowTips(false)
//         }
//         setCookieBySec('clickLikeNum',clickLikeNum,'24:00:00')
//     },[clickLikeNum])

//     return [addLikeNum,needShowTips,tips]

    
// }

