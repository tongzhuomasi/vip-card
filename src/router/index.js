import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import home from '../components/home'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'login', component: login }, // 登陆页面
    { path: '/home', name: 'home', component: home } // 登陆页面
  ]
})
