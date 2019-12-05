
    handleHistoryShowMore(){
        let historyList = [...this.state.history]
        let mainBox = document.querySelector('#main-box')
        let childBox = document.querySelector('#main-content')
        let hiddenBtn = document.querySelector('#showmore-btn-hidden')
        let historyItemList = document.querySelectorAll('.history-item')
        if(!mainBox || !childBox || ! hiddenBtn || !historyItemList.length){
            return null
        }
        let mainBoxWidth = mainBox.clientWidth * 2
        let allChildWidth = 0
        let isOverflow = false
        let overflowIndex = -1
        let marginRight = this.getStyle(historyItemList[0],'marginRight').split('px')[0] - 0
        let hiddenBtnWidth = hiddenBtn.clientWidth
        for(let i = 0 ; i < historyItemList.length ; i++){
            let itemWidth =  marginRight + historyItemList[i].clientWidth
            allChildWidth += itemWidth
            if(allChildWidth + (marginRight + hiddenBtnWidth) > mainBoxWidth){
                isOverflow = true
                overflowIndex = i
                break;
            }
        }
        if(isOverflow){
            historyList.splice(overflowIndex-1,0,{btnItemFlag:true})
            this.setState({
                newHistory:historyList,
                history:historyList,
                currHistoryShowMoreType:'close',
                overflowIndex:overflowIndex
            })
        }else{
            let mainboxCls = mainBox.getAttribute('class')
            mainboxCls = mainboxCls.replace('height-limit','')
            mainBox.setAttribute('class',mainboxCls)
        }
    }
    showMore(){
        let mainbox = document.querySelector('#main-box')
        let mainboxCls = mainbox.getAttribute('class')
        mainboxCls = mainboxCls.replace('height-limit','')
        mainbox.setAttribute('class',mainboxCls)
        const { history ,overflowIndex} = this.state
        let tempList = [...history]
        let btnItem = tempList.splice(overflowIndex-1,1)
        tempList = tempList.concat(btnItem)
        this.setState({
            newHistory:tempList,
            history:tempList,
            currHistoryShowMoreType:'show',
        })
        
    }
    showLess(){
        let mainbox = document.querySelector('#main-box')
        let mainboxCls = mainbox.getAttribute('class')
        mainboxCls += ' height-limit'
        mainbox.setAttribute('class',mainboxCls)
        const { history ,overflowIndex} = this.state
        let tempList = [...history]
        let btnItem = tempList.pop()
        tempList.splice(overflowIndex-1,0,btnItem)
        this.setState({
            newHistory:tempList,
            history:tempList,
            currHistoryShowMoreType:'close',
        })

    }
    //获取dom元素样式
    getStyle(element, attr) {
      if(element.currentStyle) {
        return element.currentStyle[attr];
      } else {
        return getComputedStyle(element, false)[attr];
      }
    }
