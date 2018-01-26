import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeTab: 'home', // 当前tab选项
    applyDialog: false, // 是否弹出申请提现提示框
    accountDialog: false // 是否弹出更改收款账户弹出框
  },
  getters: {
  },
  mutations: {
    // 更改tab选项卡
    changeActive (state, value) {
      state.activeTab = value
    },
    // 开关申请提现弹出框
    switchApplyDialog (state) {
      state.applyDialog = !state.applyDialog
    },
    // 开关更改账户弹出框
    switchAccountDialog (state) {
      state.accountDialog = !state.accountDialog
    }
  },
  actions: {
  }
})

export default store
