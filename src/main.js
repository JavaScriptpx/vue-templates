import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './services/request'

Vue.config.productionTip = false
Vue.prototype.$request = request //请求实例挂载到原型上 全局都可使用
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')