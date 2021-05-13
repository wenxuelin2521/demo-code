new Vue({
    el: "#app",
    data: {
        messageList: [
            { info: '111', cls: "" },
            { info: '222', cls: "" },
            { info: '333', cls: "" },
            { info: '444', cls: "" },
            { info: '555', cls: "" },
        ],
        curMsgIndex: "",
        messageCls: "",
        messageInfo: "",
        timer: null
    },
    mounted() {
        this.$nextTick(() => {
            this.timer = setInterval(this.scrollMessage, 3000);
        })
    },
    beforeDestroy() {
        this.timer && clearInterval(this.timer)

    },
    methods: {
        // 轮播message
        scrollMessage() {
            let c1 = 'animate__fadeInUp animate__delay';
            let c2 = 'animate__fadeOutUp';
            let { curMsgIndex, messageList } = this;

            let next = curMsgIndex + 1 >= messageList.length ? 0 : curMsgIndex + 1;


            if (curMsgIndex === "") {
                messageList[0].cls = c1
                curMsgIndex = 0
            } else {
                messageList[curMsgIndex].cls = c2
                messageList[next].cls = c1
                curMsgIndex = curMsgIndex + 1 >= messageList.length ? 0 : curMsgIndex + 1

            }

            this.messageList = messageList
            this.curMsgIndex = curMsgIndex

        }
    },
})