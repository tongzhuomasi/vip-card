<template>
  <!--提现记录-->
  <div class="record-container">
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
        <div class="record-item">
          <div class="record-item-left" slot="left">
            <p class="record-serialNumber">{{purchaseRecordItem.purchaseSerial}}</p>  <!--流水号-->
            <p class="record-type">{{purchaseRecordItem.purchaseType.type}}提现{{purchaseRecordItem.purchaseType.money}}元</p> <!--提现类型-->
          </div>
          <div class="record-item-right" slot="right">
            <p class="record-date">{{purchaseRecordItem.purchaseDate}}</p> <!--提现日期-->
            <p class="record-point">{{purchaseRecordItem.purchasePoint}}积分</p> <!--积分-->
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
      title: '提现记录',
      purchaseRecordItem: {
        purchaseSerial: '45236548569',
        purchaseType: {
          type: '微信',
          money: 500
        },
        purchaseDate: '2018/01/16  10:30',
        purchasePoint: -500
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
  /*列表项*/
  .record-item {
    padding: 5px;
    @include jt-flex(row, nowrap, space-between, center)
  }
  /*列表项左侧*/
  .record-item-left {
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
  .record-item-right {
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
    .record-point {
      font-size: 0.9rem;
      color: black;
      font-weight: 500;
    }
  }
</style>
