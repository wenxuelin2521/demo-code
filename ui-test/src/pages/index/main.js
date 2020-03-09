import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ui from '@/vue-ui-demo'
console.log(ui);
Vue.use(ui)

new Vue({
  render: h => h(App),
}).$mount('#app')
