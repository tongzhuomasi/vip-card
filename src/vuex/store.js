import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeTab: 'home', // 当前tab选项
    dialog: true // 是否弹出提示框
  },
  getters: {
  },
  mutations: {
    // 更改tab选项卡
    changeActive (state, value) {
      state.activeTab = value
    },
    // 开关弹出框
    switchDialog (state) {
      state.dialog = !state.dialog
    }
  },
  actions: {
  }
})

export default store
