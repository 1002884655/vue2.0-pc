import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ToolClass from './util/PublicMethods'
import './assets/css/reset.scss'
import VueScroller from 'vue-scroller'

Vue.use(VueScroller)
Vue.prototype.ToolClass = ToolClass
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
