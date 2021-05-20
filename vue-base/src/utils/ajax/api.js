import { fetchData } from "./commonAjax.js";

function retry(promiseFn , times = 3){
    return function () {
        return new Promise( async (resolve , reject) => {

            while(times--){
                try{
                    console.log('run --------- ' , times)
                    console.log(...arguments)
                    const ret = await promiseFn(...arguments)
                    resolve(ret)
                }catch(err){
                    if(!times) reject
                }
            }
        })
    }
}

// template
export function queryList(requestParams, callFunc) {
  callFunc = callFunc && callFunc.constructor === Function ? callFunc : ""; // 回调校验
  return retry(fetchData)(`/api`, requestParams, "get", callFunc);
}
