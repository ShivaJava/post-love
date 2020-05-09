import Vue from 'vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import './assets/scss/b-custom.scss'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
  Vue.prototype.$http.defaults.headers.common['Accept'] = 'application/json'
  // Vue.prototype.$http.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
