import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeTab: 'home' // 当前tab选项
  },
  getters: {
  },
  mutations: {
    // 更改tab选项卡
    changeActive (state, value) {
      this.state.activeTab = value
    }
  },
  actions: {
  }
})

export default store
