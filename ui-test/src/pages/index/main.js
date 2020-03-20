import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ui from '@/vue-ui-demo'
Vue.use(ui)

import store from './store/index.js'

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
