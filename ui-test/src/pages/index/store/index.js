import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state : {
        msg:'hello'
    },
    getters:{},
    mutations:{
        setMsg(state , newMsg){
            state.msg = newMsg
        }
    },
    actions:{},
    modules:{}
})

export default store