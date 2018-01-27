<template>
  <div class="charge-container">
    <!--子导航-->
    <jt-sub-header :title="title"></jt-sub-header>
    <!--下部容器-->
    <div class="bottom-container">
      <div class="bottom-top-container">
        <p class="bottom-top-top">充值金额</p>
        <div class="bottom-top-middle-container">
          <img class="bottom-top-middle-left" src="../../../../static/rmb.png" alt="钱币图标">
          <input class="bottom-top-middle-right" type="text">
        </div>
        <div class="extra-container">
          <div class="extra-item-container" v-for="i in 3" :key="i">
            <div class="extra-item-inner-container" v-for="j in 2" :key="j">
              <p class="extra-item-inner-left">充值</p>
              <p class="extra-item-inner-right">1000</p>
            </div>
          </div>
        </div>
        <p class="bottom-top-bottom">支付方式</p>
      </div>
      <div class="bottom-middle-container">
        <img class="bottom-middle-left" src="../../../../static/weixin.png" alt="微信">
        <img class="bottom-middle-right" src="../../../../static/zhifubao.png" alt="支付宝">
      </div>
      <mt-button class="bottom-bottom">确认充值</mt-button>
    </div>
  </div>
</template>

<script>
import jtSubHeader from '../../jtSubHeader'

export default {
  name: 'charge',
  components: {
    jtSubHeader
  },
  data () {
    return {
      title: '充值'
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
  .charge-container {
    width: 100vw;
    height: 100vh;
    @include jt-flex(column, nowrap, flex-start, center)
  }
  /*上部容器*/
  .top-container {
    width: 100%;
    height: $top-container-height;
    padding: 1% 5%;
    @include jt-flex(column, nowrap, flex-start, flex-start);
    p {
      margin: 0;
    }
  }
  /*上部上*/
  .top-top {
    font-weight: bolder;
    font-size: 1.25rem;
  }
  /*上部下*/
  .top-bottom {
    font-size: 0.75rem;
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
  /*追加容器*/
  .extra-container {
    margin: 5% 0;
    width: 100%;
    height: 15%;
    @include jt-flex(row, nowrap, space-around, center)
  }
  /*追加项容器*/
  .extra-item-container {
    width: 30%;
    height: 100%;
    box-shadow: 0 0 5px cornflowerblue;
    border-radius: 5px;
    @include jt-flex(column, nowrap, flex-start, center)

  }
  /*追加项容器内容器*/
  .extra-item-inner-container {
    width: 100%;
    @include jt-flex(row, nowrap, center, baseline);
    p {
      margin: 0;
    }
  }
  /*追加项左侧文字*/
  .extra-item-inner-left {
    font-size: 0.75rem;
    color: gray;
  }
  /*追加项右侧文字*/
  .extra-item-inner-right {
    font-size: 1.5rem;
    color: rgba(255,74,35,0.74);
  }

</style>
