import axios from "axios";
import qs from "qs";

// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    if (response.data) {
      return response.data;
    } else {
      return Promise.reject(response);
    }
  },
  function(error) {
    // 对响应错误做点什么
    if (error.response) {
    }
    return Promise.reject(error);
  }
);
/**
 *
 * @param {string} url
 * @param {object} data
 * @param {string} type
 * @param {function} callFunc
 * @param {function} filter
 */

/**
 * 公共获取接口数据方法
 * url:接口路径
 * data ：参数对象
 * callFunc: 数据回调
 * filter：过滤数据
 * type ：请求方式
 */
export function fetchData(url, data, type, callFunc, filter) {
  let sendData = "";
  if (filter && filter.constructor === Function) {
    sendData = filter(data);
  }
  const config = {};
  config.method = type || "post";
  config.url = url;
  config.headers = {};
  if (type === "get") {
    config.url = url + "?r=" + Math.random() * 1000;
  }
  if (type === "get") {
    config.params = data;
  } else if (type === "put") {
    config.data = data;
  } else {
    config.data = sendData || qs.stringify(data);
  }
  if (!callFunc) {
    return axios(config);
  }
  axios(config)
    .then((res) => {
      callFunc(res);
    })
    .catch((err) => {
      callFunc({
        desc: "axios统一拦截，捕获错误",
        err: err
      });
      console.log("axios统一拦截，捕获错误：", err);
    });
}
