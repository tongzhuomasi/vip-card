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
        <img class="jt-banner" src="../../../../static/banner.png" alt="宣传图">
        <!--汇率说明-->
        <div class="exchange-rate-description">
          <p class="description-top">今日提现汇率{{point}}积分兑换{{money}}块钱</p>
          <p class="description-bottom">(本汇率最终解释权归本公司所有)</p>
        </div>
      </mu-sub-header>
      <!--列表项-->
      <div class="mu-list-item">
        <p class="record-item-left" slot="left">累计积分</p>
        <p class="record-item-right" slot="right">3000积分</p>
      </div>
      <!--列表项-->
      <div class="mu-list-item">
        <p class="record-item-left" slot="left">已提现积分</p>
        <p class="record-item-right" slot="right">2000积分</p>
      </div>
      <!--列表项-->
      <div class="mu-list-item">
        <p class="record-item-left" slot="left">可提现积分</p>
        <p class="record-item-right" slot="right">2100积分</p>
      </div>
      <!--列表项-->
      <div class="mu-list-item">
        <p class="record-item-left" slot="left">提现账户</p>
        <p class="record-item-right" slot="right">支付宝 (1316661666)</p>
      </div>
      <!--列表项-->
      <div class="mu-list-item">
        <!--占位符-->
        <div slot="left"></div>
        <button class="change-account-btn record-item-right" slot="right" @click="onChangeAccount">更改收款账户</button>
      </div>
    </mu-list>
    <!--申请提现按钮-->
    <mt-button class="enchashment-apply-btn" @click="switchApplyDialog">申请提现</mt-button>
    <!--申请提现弹出框-->
    <apply-dialog></apply-dialog>
    <!--更改收款账户弹出框-->
    <account-dialog></account-dialog>
  </div>
</template>

<script>
import jtHeader from '../../jtHeader'
import jtSubHeader from '../../jtSubHeader'
import applyDialog from './applyDialog'
import accountDialog from './accountDialog'

export default {
  name: 'enchashment',
  components: {
    jtHeader,
    jtSubHeader,
    applyDialog,
    accountDialog
  },
  data () {
    return {
      title: '提现', // 导航标题
      point: 1, // 兑换比率
      money: 1 // 兑换比率
    }
  },
  methods: {
    // 点击更改账户
    onChangeAccount () {
      this.$store.commit('switchAccountDialog')
    },
    // 点击申请提现
    switchApplyDialog () {
      this.$store.commit('switchApplyDialog')
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
  $text-color: black;
  $line-color: gray;
  /*提现容器*/
  .enchashment-container {
    position: absolute;
    top: 0;
    bottom: 0;
    @include jt-flex(column, nowrap, flex-start, center);
  }
  /*列表头部*/
  .mu-list-header {
    width: 100%;
    padding: 0;
    @include jt-flex(column, nowrap, flex-start, center);
  }
  /*宣传图*/
  .jt-banner {
    width: 100vw;
  }
  /*汇率说明*/
  .exchange-rate-description {
    padding: 5px 0;
    @include jt-flex(column, nowrap, flex-start, center);
    /*内部所有p标签*/
    p {
      color: $text-color;
      margin: 0;
      padding: 0;
      width: 100%;
      text-align: center;
      line-height: normal;
    }
    /*描述上部分*/
    .description-top {
      font-size: 1rem;
    }
    /*描述下部分*/
    .description-bottom {
      font-size: 0.75rem;
    }
  }
  /*列表项*/
  .mu-list-item {
    padding: 5px;
    border: 0 solid $line-color;
    border-top-width: 1px;
    @include jt-flex(row, nowrap, space-between, center);
    p {
      font-size: 0.9rem;
      width: 45vw;
      margin: 0;
      color: $text-color;
    }
    /*列表项左侧*/
    .record-item-left {
      text-align: left;
    }
    /*列表项右侧*/
    .record-item-right {
      text-align: right;
    }
    /*更改账户按钮*/
    .change-account-btn {
      border: 0 solid white;
      background-color: transparent;
      outline: none;
      color: chocolate;
      font-size: 0.75rem;
    }
  }
  /*申请提现按钮*/
  .enchashment-apply-btn {
    width: 80vw;
    background-color: chocolate;
    color: white;
  }
</style>
