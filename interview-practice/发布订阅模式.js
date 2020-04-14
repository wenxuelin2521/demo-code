// 控制中心
let pubSub = {
    list: {},

    // 订阅
    subscribe: function (key, fn) {
        if (!this.list[key]) this.list[key] = [];

        this.list[key].push(fn);
    },

    //取消订阅
    unsubscribe: function (key, fn) {
        let fnList = this.list[key];

        if (!fnList) return false;

        if (!fn) { // 不传入指定的方法，清空所用 key 下的订阅
            fnList && (fnList.length = 0);
        } else {
            fnList.forEach((item, index) => {
                item === fn && fnList.splice(index, 1);
            });
        }
    },

    // 发布
    publish: function (key, ...args) {
        for (let fn of this.list[key]) fn.call(this, ...args);
    }
}

// 订阅
pubSub.subscribe('onwork', time => {
    console.log(`上班了：${time}`);
})
pubSub.subscribe('offwork', time => {
    console.log(`下班了：${time}`);
})
pubSub.subscribe('launch', time => {
    console.log(`吃饭了：${time}`);
})

pubSub.subscribe('onwork', work => {
    console.log(`上班了：${work}`);
})

// 发布
// pubSub.publish('offwork', '18:00:00');
// pubSub.publish('launch', '12:00:00');
let i = 0
let timer = setInterval(() => {
    // console.log(i++)
    pubSub.publish('offwork', new Date());
    pubSub.publish('launch',  new Date());
    i++
    i >3 && clearInterval(timer)
}, 2000);

// 取消订阅
// pubSub.unsubscribe('onwork');
