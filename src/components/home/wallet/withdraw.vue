<template>
  <!--提现-->
  <div class="withdraw-container">
    <!--提现列表-->
    <mu-list>
      <!--列表头容器-->
      <mu-sub-header class="mu-list-header">
        <!--子导航-->
        <jt-sub-header :title="title"></jt-sub-header>
      </mu-sub-header>
      <!--列表项-->
      <div class="mu-list-item">
        <p class="record-item-left" slot="left">账户总额</p>
        <p class="record-item-right" slot="right">12000</p>
      </div>
      <!--列表项-->
      <div class="mu-list-item">
        <p class="record-item-left" slot="left">可提现余额</p>
        <p class="record-item-right" slot="right">10000</p>
      </div>
      <!--列表项-->
      <div class="mu-list-item">
        <p class="record-item-left" slot="left">赠送余额</p>
        <p class="record-item-right" slot="right">2000</p>
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
    <mt-button class="withdraw-apply-btn" @click="onWithdrawApply">申请提现</mt-button>
  </div>
</template>

<script>
import jtSubHeader from '../../jtSubHeader'

export default {
  name: 'withdraw',
  components: {
    jtSubHeader
  },
  data () {
    return {
      title: '提现'
    }
  },
  methods: {
    // 点击更改账户
    onChangeAccount () {
      console.log('点击更改账户！')
    },
    // 点击申请提现
    onWithdrawApply () {
      console.log('点击申请提现...')
      this.enchashmentApplyDialog = true
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
  $text-color: gray;
  $line-color: gray;
  /*提现容器*/
  .withdraw-container {
    width: 100%;
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
    padding: 7px;
    margin: 5px 10px;
    border: 0 solid $line-color;
    border-top-width: 1px;
  @include jt-flex(row, nowrap, space-between, center);
  p {
    font-size: 0.9rem;
    width: 49vw;
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
  .withdraw-apply-btn {
    width: 80vw;
    background-color: chocolate;
    color: white;
  }
</style>
