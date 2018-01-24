import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login' // 登陆
import home from '../components/home' // 首页
// 个人信息及其子页面
import personalInfo from '../components/home/personalInfo' // 个人信息
import myInvitationCode from '../components/home/myInvitationCode' // 我的邀请码
// 我的团队及其子页面
import myGroup from '../components/home/myGroup' // 我的团队
import enchashmentRecord from '../components/home/enchashmentRecord' // 提现记录
// 消费记录及其子页面
import purchaseRecord from '../components/home/purchaseRecord' // 消费记录
// 我的钱包及其子页面
import wallet from '../components/home/wallet' // 我的钱包

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'login', component: login }, // 登陆页面
    { path: '/home', name: 'home', component: home }, // 首页
    // 个人信息及其子页面
    { path: '/home/personalInfo', component: personalInfo }, // 个人信息
    { path: '/home/personalInfo/myInvitationCode', component: myInvitationCode }, // 我的邀请码
    // 我的团队及其子页面
    { path: '/home/myGroup', component: myGroup }, // 我的团队
    { path: '/home/myGroup/enchashmentRecord', component: enchashmentRecord }, // 提现记录
    // 消费记录及其子页面
    { path: '/home/purchaseRecord', component: purchaseRecord }, // 消费记录
    // 我的钱包及其子页面
    { path: '/home/wallet', component: wallet } // 我的钱包
  ]
})
