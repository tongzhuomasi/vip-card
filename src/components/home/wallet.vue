<template>
  <!--我的钱包-->
  <div class="wallet-container">
    <!--导航-->
    <jt-header :title="title"></jt-header>
    <!--我的钱包列表-->
    <mu-list>
      <!--列表头容器-->
      <mu-sub-header class="mu-list-header">
        <!--子导航-->
        <wallet-header :title="title"></wallet-header>
      </mu-sub-header>
      <!--列表项-->
      <mu-list-item class="mu-list-item-special">
        <div class="mu-list-item-special-container">
          <p class="special-small">账户余额(元)</p>
          <p class="special-large">{{money}}</p>
        </div>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item" title="充值" @click="onCharge">
        <img src="../../../static/charge.png" alt="充值" slot="left">
        <img src="../../../static/arrow.png" alt="图标" slot="right">
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item" title="提现" @click="onWithdraw">
        <img src="../../../static/pop.png" alt="提现" slot="left">
        <img src="../../../static/arrow.png" alt="图标" slot="right">
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
import jtHeader from '../jtHeader'
import walletHeader from './walletHeader'

export default {
  name: 'wallet',
  components: {
    jtHeader,
    walletHeader
  },
  data () {
    return {
      title: '我的钱包',
      money: '3100.00'
    }
  },
  methods: {
    onCharge () {
      console.log('充值了')
    },
    onWithdraw () {
      console.log('提现了')
    }
  }
}
</script>

<style scoped lang="scss">
  @mixin jt-flex($dir, $wrap, $main, $cross) {
    display: flex;
    flex-flow: $dir $wrap;
    justify-content: $main;
    align-items: $cross;
  }
  /*个人钱包容器*/
  .wallet-container {
    width: 100%;
    height: 100vh;
    @include jt-flex(column, nowrap, flex-start, center);
    background-color: white;
  }
  /*列表头部*/
  .mu-list-header {
    width: 100%;
    padding: 0;
  }
  /*列表第一项*/
  .mu-list-item-special {
    background-color: rgba(76, 63, 54, 0.9);
    @include jt-flex(column, nowrap, space-around, center)
  }
  /*列表第一项容器*/
  .mu-list-item-special-container {
    width: 90vw;
    @include jt-flex(column, nowrap, center, flex-start);
    p {
      color: rgb(231, 174, 110);
      margin: 0;
    }
    .special-small {
      font-size: 1rem;
    }
    .special-large {
      font-size: 2rem;
    }
  }
</style>
