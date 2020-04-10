import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import ui from '@/vue-ui-demo'
// Vue.use(ui)

import store from './store/index.js'

var EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})


new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
