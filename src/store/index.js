/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    MainTabDefaultColor: '#999', // 页底tab默认色值
    MainTabActiveColor: 'red', // 页底tab选中色值
    HideMainTab: false, // 隐藏页底tab
    MainTabActiveId: 1, // 页底tab选中id
    MainTabArr: [ // 页底tab数据
      { name: 'Tab1', id: 1, img: require('@/assets/img/icon.png'), activeImg: require('@/assets/img/icon-active.png'), router: null },
      { name: 'Tab2', id: 2, img: require('@/assets/img/icon.png'), activeImg: require('@/assets/img/icon-active.png'), router: null },
      { name: 'Tab3', id: 3, img: require('@/assets/img/icon.png'), activeImg: require('@/assets/img/icon-active.png'), router: null },
      { name: 'Tab4', id: 4, img: require('@/assets/img/icon.png'), activeImg: require('@/assets/img/icon-active.png'), router: null }
    ]
  },
  mutations: {
    EditHideMainTab (state, data) { // 编辑隐藏页底tab
      state.HideMainTab = data
    },
    EditMainTabActiveId (state, data) { // 编辑页底tab选中id
      state.MainTabActiveId = data
    }
  },
  actions: {
  }
})
export const modules = {
  user: () => require('./user/index').default
}

Object.keys(modules).forEach((modKey) => {
  const modNS = modKey.split('/')
  const getMod = modules[modKey]
  store.registerModule(...modNS, getMod())
})

export default store
