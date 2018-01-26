<template>
  <div class="pop-container">
    <!--主导航-->
    <!--<jt-header :title="title"></jt-header>-->
    <!--子导航-->
    <jt-sub-header :title="title"></jt-sub-header>
    <!--下部容器-->
    <div class="bottom-container">
      <div class="bottom-top-container">
        <p class="bottom-top-top">提现金额</p>
        <div class="bottom-top-middle-container">
          <img class="bottom-top-middle-left" src="../../../../static/rmb.png" alt="钱币图标">
          <input class="bottom-top-middle-right" type="text" value="15000">
        </div>
        <p class="bottom-top-bottom">收款方式</p>
      </div>
      <div class="bottom-middle-container">
        <img class="bottom-middle-left" src="../../../../static/weixin.png" alt="微信">
        <img class="bottom-middle-right" src="../../../../static/zhifubao.png" alt="支付宝">
      </div>
      <div class="extra-container">
        <p class="extra-top">收款账户</p>
        <input class="bottom-top-middle-right extra-bottom" type="text">
      </div>
      <mt-button class="bottom-bottom">确认提现</mt-button>
    </div>
  </div>
</template>

<script>
import jtHeader from '../../jtHeader'
import jtSubHeader from '../../jtSubHeader'

export default {
  name: 'buy',
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
  // 弹性布局
  @mixin jt-flex($dir, $wrap, $main, $cross) {
    display: flex;
    flex-flow: $dir $wrap;
    justify-content: $main;
    align-items: $cross;
  }
  /*顶部容器高度*/
  $top-container-height: 10%;
  $bottom-container-height: 65%;
  /*买入容器*/
  .pop-container {
    width: 100vw;
    height: 100vh;
    @include jt-flex(column, nowrap, flex-start, center)
  }
  /*底部容器*/
  .bottom-container {
    width: 100%;
    height: $bottom-container-height;
  }
  /*底部上容器*/
  .bottom-top-container {
    width: 100%;
  }
  /*底部上部上*/
  .bottom-top-top {
    margin: 2% 0;
    font-size: 0.75rem;
    color: gray;
    padding: 0 5%;
  }
  /*底部上部中容器*/
  .bottom-top-middle-container {
    width: 100%;
    padding: 0 5%;
    @include jt-flex(row, nowrap, flex-start, center)
  }
  /*底部上部中左*/
  .bottom-top-middle-left {
    height: 33px;
  }
  /*底部上部中右*/
  .bottom-top-middle-right {
    width: 100%;
    outline: none;
    border-width: 0 0 1px 0;
    text-align: right;
    padding: 2px ;
    font-size: 1.5rem;
    font-weight: bolder;
  }
  /*底部上部下*/
  .bottom-top-bottom {
    margin: 2% 0;
    font-size: 0.75rem;
    color: gray;
    padding: 0 5%;
  }
  /*底部中部容器*/
  .bottom-middle-container {
    width: 100%;
    @include jt-flex(row, nowrap, space-around, center)
  }
  /*底部中部左/底部中部右*/
  .bottom-middle-left, .bottom-middle-right {
    width: 40%;
    margin: 5% 0;
    box-shadow: 0 0 5px black;
    border-radius: 5px;
  }
  /*底部底侧*/
  .bottom-bottom {
    width: 80%;
    margin: 20% 10%;
    background-color: chocolate;
    color: white;
  }
  /*额外添加上部*/
  .extra-top {
    width: 100%;
    margin: 5%;
    font-size: 0.75rem;
    color: gray;
  }
  /*额外添加下部*/
  .extra-bottom {
    width: 90%;
    margin: 10px;
  }
</style>
