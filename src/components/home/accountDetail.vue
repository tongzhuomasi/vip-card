<template>
  <!--账户明细-->
  <div class="account-container">
    <jt-header :title="title"></jt-header>
    <!--消费记录列表-->
    <mu-list>
      <!--列表头容器-->
      <mu-sub-header class="mu-list-header">
        <!--子导航-->
        <jt-sub-header :title="title"></jt-sub-header>
      </mu-sub-header>
      <!--列表项-->
      <mu-list-item class="mu-list-item">
        <div class="account-item">
          <div class="account-item-left" slot="left">
            <p class="account-serialNumber">{{purchaseRecordItem.purchaseSerial}}</p>  <!--流水号-->
            <p class="account-type">提现到{{purchaseRecordItem.purchaseType}}</p> <!--提现类型-->
          </div>
          <div class="account-item-right" slot="right">
            <p class="account-date">{{purchaseRecordItem.purchaseDate}}</p> <!--提现日期-->
            <p class="account-money">{{purchaseRecordItem.purchaseMoney}}</p> <!--提现金额-->
          </div>
        </div>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
import jtHeader from '../jtHeader'
import jtSubHeader from '../jtSubHeader'
export default {
  name: 'enchashment-record',
  components: {
    jtHeader,
    jtSubHeader
  },
  data () {
    return {
      title: '账户明细',
      purchaseRecordItem: {
        purchaseSerial: '45236548569',
        purchaseType: '微信',
        purchaseDate: '2018/01/16  10:30',
        purchaseMoney: -500
      }
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
  /*列表头部*/
  .mu-list-header {
    width: 100%;
    padding: 0;
  }
  /*列表项*/
  .account-item {
    padding: 5px;
    @include jt-flex(row, nowrap, space-between, center)
  }
  /*列表项左侧*/
  .account-item-left {
    width: 40vw;
    @include jt-flex(column, nowrap, center, center);
    /*左侧内p标签*/
    p {
      font-size: 0.75rem;
      margin: 0;
      width: 40vw;
      color: dimgrey;
    }
    /*覆盖提现类型*/
    .record-type {
      font-size: 0.9rem;
      color: black;
      font-weight: 500;
    }
  }
  /*列表项右侧*/
  .account-item-right {
    width: 40vw;
    @include jt-flex(column, nowrap, center, center);
    /*右侧内p标签*/
    p {
      font-size: 0.75rem;
      margin: 0;
      width: 40vw;
      text-align: right;
      color: dimgrey;
    }
    /*覆盖提现积分*/
    .record-money {
      font-size: 0.9rem;
      color: black;
      font-weight: 500;
    }
  }
</style>
