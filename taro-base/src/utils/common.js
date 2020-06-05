export function isIPhoneX() {
    let u = navigator.userAgent;
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    let isIPhoneX = false;
  
    if (isIOS) {
      if (screen.height > 736) {
        isIPhoneX = true;
      } else {
        isIPhoneX = false;
      }
    } else {
      isIPhoneX = false;
    }
    return isIPhoneX;
  }
  
  // 生成唯一标识
  export function getUuid() {
    var len = 32; //32长度
    var radix = 16; //16进制
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
      ""
    );
    var uuid = [],
      i;
    radix = radix || chars.length;
    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | (Math.random() * 16);
          uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join("");
  }
  
  // 屏幕高度
  export function screenHeight() {
    let height = screen.height;
    return height;
  }
  
  // 函数防抖:只有在足够的空间时间,才执行一次
  export function debounce(handler, delay) {
    delay = delay || 300;
    let timer = null;
    return function () {
      let _args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        handler(..._args);
      }, delay);
    };
  }
  
  /**
   * 本地存储获取方法，若过期则返回空
   * @type {[type]}
   */
  export const getLocalStorage = (key) => {
    let data;
  
    try {
      data = JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error("get localStorage failed! " + JSON.stringify(e));
      return;
    }
  
    if (data && "object" === typeof data && data._expires) {
      let nowDate = new Date().getTime();
  
      // 已过期
      if (+data._expires < nowDate) {
        try {
          localStorage.removeItem(key);
        } catch (e) {
          // Do something when catch error
          console.error("remove storage sync failed! " + JSON.stringify(e));
        }
  
        console.info("缓存已过期！", key);
        return;
      }
  
      return data.value;
    }
  
    return data;
  };
  
  /**
   * 本地存储方法，可设置过期时间
   *
   *	 setLocalStorage('test', 1, 10);
   *
   * @param  {String} key    存储的数据的key
   * @param  {Object/String} value 存储的内容
   * @param  {[type]} expires 过期时间（单位：秒(s)）
   * @return {[type]}        [description]
   */
  export const setLocalStorage = (key, value, expires) => {
    let nowDate = new Date(),
      data;
  
    if (expires) {
      expires = nowDate.getTime() + +expires * 1000;
  
      data = {
        _expires: expires,
        value,
      };
    } else {
      data = value;
    }
  
    if (typeof data === "object") {
      data = JSON.stringify(data);
    }
  
    try {
      localStorage.setItem(key, data);
    } catch (e) {
      console.error("set storage sync failed! " + JSON.stringify(e));
    }
  };
  
  /**
   * 将一个数组存储到localStorage中
   * key 为 localStorage的key
   * item 塞入数组的对象
   * maxLength 为存储的数组的最大长度 如果不传则对长度不做限制
   * 超出最大长度的从头开始丢失数据，若原有长度超出最大长度，持续丢失数据到最大长度为止
   * @param {string} key
   * @param {any} item
   * @param {number} maxLength
   */
  export function saveLocalStorageArray(key, item, maxLength) {
    if (typeof key != "string" || (maxLength && typeof maxLength != "number")) {
      console.error("saveLocalStorageArray 无效参数");
      return;
    }
    if (!window || !window.localStorage || !JSON) {
      console.error("saveLocalStorageArray 无效的执行环境");
      return;
    }
    var dataList = JSON.parse(window.localStorage.getItem(key)) || [];
  
    while (dataList.length > 0 && dataList.length >= maxLength) {
      dataList.shift();
    }
    dataList.push(item);
  
    window.localStorage.setItem(key, JSON.stringify(dataList));
  
    return dataList;
  }
  
  /**
   * 格格式输出日期串
   * @param date      {Number/Date}   要格式化的日期
   * @param formatStr {String}        格式串(yMdHmsqS)
   * @returns {*|string}
   */
  export function formatDate(date, formatStr) {
    if (!date) {
      return "";
    }
  
    var format = formatStr || "yyyy-MM-dd";
  
    if ("number" === typeof date || "string" === typeof date) {
      date = new Date(+date);
    }
  
    var map = {
      M: date.getMonth() + 1, //月份
      d: date.getDate(), //日
      h: date.getHours(), //小时
      m: date.getMinutes(), //分
      s: date.getSeconds(), //秒
      q: Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds(), //毫秒
    };
    format = format.replace(/([yMdhmsqS])+/g, function (all, t) {
      var v = map[t];
      if (v !== undefined) {
        if (all.length > 1) {
          v = "0" + v;
          v = v.substr(v.length - 2);
        }
        return v;
      } else if (t === "y") {
        return (date.getFullYear() + "").substr(4 - all.length);
      }
      return all;
    });
    return format;
  }
  
  /**
   *
   * @param obj 监听对象
   * @param key 监听属性
   * @param value 属性对应的值
   * @param handler 设置新值的时候需要处理的方法
   */
  export function defineReactive(obj, key, value, handler) {
    Object.defineProperty(obj, key, {
      get() {
        return value;
      },
      set(newValue) {
        if(newValue != value){
          value = newValue;
          typeof handler === "function" && handler(newValue);
        }
      },
    });
  }
  