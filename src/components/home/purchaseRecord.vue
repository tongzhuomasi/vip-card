<template>
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
          <p class="record-date">2018/01/16 10:30</p>
          <p class="record-type">刷卡消费</p>
        </div>
        <div class="record-item-right" slot="right">-200</div>
      </div>
    </mu-list-item>
  </mu-list>
</div>
</template>

<script>
import jtHeader from '../jtHeader'
import jtSubHeader from '../jtSubHeader'
export default {
  name: 'purchaseRecord',
  components: {
    jtHeader,
    jtSubHeader
  },
  data () {
    return {
      title: '消费记录'
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
  /*消费记录容器*/
  .record-container {
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
  /*列表项*/
  .record-item {
    padding: 5px;
    @include jt-flex(row, nowrap, space-between, center)
  }
  /*列表项左侧容器*/
  .record-item-left {
    width: 40vw;
    @include jt-flex(column, nowrap, center, center);
    p {
      margin: 0;
      width: 40vw;
    }
  }

</style>
