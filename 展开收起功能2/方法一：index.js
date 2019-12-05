

    /**
     * @desc:实现历史搜索超过两行使用展开收起功能
     * 给父盒子做一个高度限制，如果子盒子的内容超过这个限制，就显示展开收起按钮
     * 点击展开将父盒子的高度限制去掉，点击收起重新赋予父盒子高度限制
     */
    handleHistoryShowMore(){
        let mainbox = document.querySelector('#main-box')
        let childbox = document.querySelector('#main-content')
        let showmorebtn = document.querySelector('#showmore-btn')
        if(!mainbox || !childbox || !showmorebtn){
            return null
        }
        
        let mainboxHeight = mainbox.clientHeight
        let childboxHeight = childbox.clientHeight
        let btnCls = showmorebtn.getAttribute('class')
        if(childboxHeight > mainboxHeight){
            btnCls = btnCls.replace('show-none','show-block')
            showmorebtn.setAttribute('class',btnCls)
        }else{
            let mainboxCls = mainbox.getAttribute('class')
            mainboxCls = mainboxCls.replace('height-limit','')
            mainbox.setAttribute('class',mainboxCls)
        }
        showmorebtn.onclick = ()=>{
            if(this.state.currHistoryShowMoreType == 'close'){
                let mainboxCls = mainbox.getAttribute('class')
                mainboxCls = mainboxCls.replace('height-limit','')
                mainbox.setAttribute('class',mainboxCls)
                showmorebtn.setAttribute('class',showmorebtn.getAttribute('class').replace('iconCombinedShape','iconicon-test'))
            this.setState({
                    currHistoryShowMoreType:'show'
                })
            }else{
                let mainboxCls = mainbox.getAttribute('class')
                mainboxCls += ' height-limit'
                mainbox.setAttribute('class',mainboxCls)
                showmorebtn.setAttribute('class',showmorebtn.getAttribute('class').replace('iconicon-test','iconCombinedShape'))
                this.setState({
                    currHistoryShowMoreType:'close'
                })
            }
        }
    }
