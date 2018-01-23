// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

// MintUI
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(MuseUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 路由
  store, // store
  components: { App },
  template: '<App/>'
})
