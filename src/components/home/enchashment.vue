<template>
  <!--提现-->
  <div class="enchashment-container">
    <jt-header :title="title"></jt-header>
    <!--提现列表-->
    <mu-list>
      <!--列表头容器-->
      <mu-sub-header class="mu-list-header">
        <!--子导航-->
        <jt-sub-header :title="title"></jt-sub-header>
        <!--宣传图-->
        <img class="jt-banner" src="../../../static/banner.png" alt="宣传图">
        <!--汇率说明-->
        <div class="exchange-rate-description">
          <p class="description-top">今日提现汇率{{point}}积分兑换{{money}}块钱</p>
          <p class="description-bottom">(本汇率最终解释权归本公司所有)</p>
        </div>
      </mu-sub-header>
      <!--列表项-->
      <mu-list-item class="mu-list-item">
        <p slot="left">累计积分</p>
        <p slot="right">3000积分</p>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item">
        <p slot="left">已提现积分</p>
        <p slot="right">2000积分</p>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item">
        <p slot="left">可提现积分</p>
        <p slot="right">2100积分</p>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item">
        <p slot="left">提现账户</p>
        <p slot="right">支付宝 (1316661666)</p>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item">
        <mt-button slot="right">更改收款账户</mt-button>
      </mu-list-item>
    </mu-list>
    <!--申请提现按钮-->
    <mt-button>申请提现</mt-button>
  </div>
</template>

<script>
import jtHeader from '../jtHeader'
import jtSubHeader from '../jtSubHeader'
export default {
  name: 'enchashment',
  components: {
    jtHeader,
    jtSubHeader
  },
  data () {
    return {
      title: '提现'
    }
  }
}
</script>

<style scoped lang="scss">

  /*列表头部*/
  .mu-list-header {
    width: 100%;
    padding: 0;
  }
  /*宣传图*/
  .jt-banner {
    width: 100vw;
  }
</style>
