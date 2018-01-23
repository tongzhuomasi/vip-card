import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import home from '../components/home'
import personalInfo from '../components/home/personalInfo'
import myGroup from '../components/home/myGroup'
import record from '../components/home/record'
import wallet from '../components/home/wallet'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'login', component: login }, // 登陆页面
    { path: '/home', name: 'home', component: home }, // 首页
    { path: '/home/home', component: personalInfo }, // 个人信息
    { path: '/home/myGroup', component: myGroup }, // 我的团队
    { path: '/home/record', component: record }, // 消费记录
    { path: '/home/wallet', component: wallet } // 我的钱包
  ]
})
