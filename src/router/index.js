/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/', // 框架页
    name: 'sys',
    redirect: '/index',
    component: resolve => (require(['@/App'], resolve)),
    children: [{
      path: '/index', // 首页
      name: 'index',
      component: resolve => (require(['@/pages/index'], resolve)),
      children: []
    }]
  }]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router