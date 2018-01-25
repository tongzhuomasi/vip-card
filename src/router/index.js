import Vue from 'vue'
import Router from 'vue-router'

import login from '../components/login' // 登陆
import jtTabContainer from '../components/jtTabContainer' // tab容器
// 个人信息及其子页面
import personalInfo from '../components/home/personalInfo/personalInfo' // 个人信息
import myInvitationCode from '../components/home/personalInfo/myInvitationCode' // 我的邀请码
// 我的团队及其子页面
import myGroup from '../components/home/myGroup/myGroup' // 我的团队
import enchashmentRecord from '../components/home/myGroup/enchashmentRecord' // 提现记录
import enchashment from '../components/home/myGroup/enchashment' // 提现
// 消费记录及其子页面
import purchaseRecord from '../components/home/purchaseRecord/purchaseRecord' // 消费记录
// 我的钱包及其子页面
import wallet from '../components/home/wallet/wallet' // 我的钱包
import accountDetail from '../components/home/wallet/accountDetail' // 账户明细
import charge from '../components/home/wallet/charge' // 充值
import withdraw from '../components/home/wallet/withdraw' // 提现
// 理财
import financing from '../components/financing/financing' // 理财
import hold from '../components/financing/hold' // 持有

Vue.use(Router)

export default new Router({
  routes: [
    // 登陆页面
    { path: '/', name: 'login', component: login }, // 登陆页面
    // tab容器
    { path: '/tab', name: 'tab', component: jtTabContainer }, // tab容器
    // 个人信息及其子页面
    { path: '/home/personalInfo', component: personalInfo }, // 个人信息
    { path: '/home/personalInfo/myInvitationCode', component: myInvitationCode }, // 我的邀请码
    // 我的团队及其子页面
    { path: '/home/myGroup', component: myGroup }, // 我的团队
    { path: '/home/myGroup/enchashmentRecord', component: enchashmentRecord }, // 提现记录
    { path: '/home/myGroup/enchashment', component: enchashment }, // 提现
    // 消费记录及其子页面
    { path: '/home/purchaseRecord', component: purchaseRecord }, // 消费记录
    // 我的钱包及其子页面
    { path: '/home/wallet', component: wallet }, // 我的钱包
    { path: '/home/wallet/accountDetail', component: accountDetail }, // 账户明细
    { path: '/home/wallet/charge', component: charge }, // 充值
    { path: '/home/wallet/withdraw', component: withdraw }, // 提现
    // 理财
    { path: '/financing', name: 'financing', component: financing }, // 理财
    { path: '/financing/hold', name: 'hold', component: hold } // 理财
  ]
})
