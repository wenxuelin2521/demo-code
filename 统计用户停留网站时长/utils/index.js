class VisitLogs {

    logsStroage = {}

    constructor() {}

    static instance = null

    static getInstance(){
        if(!VisitLogs.instance){
            VisitLogs.instance = new VisitLogs()
        }
        return VisitLogs.instance
    }

    // 获取当前时间的毫秒数
    getNowTime() {
        let currentTime = new Date().getTime()
        return currentTime
    }

    // 记录进入时间
    entryTimeLog(page) {
        let pageObj = this.logsStroage[page] || {
            count: 0,
            startTime: 0,
            stayTime: 0
        }
        pageObj.count += 1
        pageObj.startTime = this.getNowTime()
        this.logsStroage[page] = pageObj
    }

    // 记录离开时间
    leaveTimeLog(page) {
        let pageObj = this.logsStroage[page]
        let leaveTime = this.getNowTime()
        pageObj.stayTime = leaveTime - pageObj.startTime
        pageObj.startTime = 0
    }

    // 将数据传递给接口，然后清掉数据
    preserveData() {
        // do something.....
        console.log(this.logsStroage)
    }



}


export default VisitLogs.getInstance()