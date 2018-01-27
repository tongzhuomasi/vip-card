<template>
    <div class="container">
      <jt-sub-header :title="title"></jt-sub-header>
      <!--上部容器-->
      <div class="top-container">
        <!--上部上容器-->
        <div class="top-top-container">
          <p class="top-top-left">国寿安鑫盈365天</p>
          <p class="top-top-right">56天后到期</p>
        </div>
        <!--上部下-->
        <p class="top-bottom">由中国人寿养老保险股份有限公司提供</p>
      </div>
      <!--中部容器-->
      <div class="middle-container">
        <div class="middle-top-container">
          <p class="middle-top-top">金额(元)</p>
          <p class="middle-top-bottom">5660</p>
        </div>
        <!--中间底部容器-->
        <div class="middle-bottom-container">
          <div class="middle-bottom-left-container">
            <p class="middle-bottom-left-top">昨日收益(元)</p>
            <p class="middle-bottom-left-bottom">+0.10</p>
          </div>
          <div class="middle-bottom-middle-container">
            <p class="middle-bottom-middle-top">持有收益(元)</p>
            <p class="middle-bottom-middle-bottom">+1.60</p>
          </div>
          <div class="middle-bottom-right-container">
            <p class="middle-bottom-right-top">持有收益率</p>
            <p class="middle-bottom-right-bottom">+8.89%</p>
          </div>
        </div>
      </div>
      <!--底部容器-->
      <div class="bottom-container">
        <div class="bottom-top-container">
          <p class="bottom-top-left">买入时间</p>
          <p class="bottom-top-right">2017/06/04</p>
        </div>
        <div class="bottom-middle-container">
          <p class="bottom-middle-left">到期时间</p>
          <p class="bottom-middle-right">2018/06/04</p>
        </div>
        <mt-button class="bottom-bottom">提前取出</mt-button>
      </div>
    </div>
</template>

<script>
import jtSubHeader from '../../jtSubHeader'
export default {
  name: 'hold-details',
  components: {
    jtSubHeader
  },
  data () {
    return {
      title: '持有详情页'
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
  /*容器*/
  .container {
    width: 100vw;
    height: 100vh;
    padding: 0 3vw;
  }
  /*上部容器*/
  .top-container {
    width: 100%;
    height: 10%;
    @include jt-flex(column, nowrap, flex-start, center);
    background-color: white;
  }
  /*上部上容器*/
  .top-top-container {
    width: 100%;
    padding: 3%;
    @include jt-flex(row, nowrap, space-between, center);
    p {
      margin: 0;
    }
  }
  .top-top-left {
    font-size: 1.2rem;
    font-weight: bolder;
  }
  .top-top-right {
    font-size: 0.75rem;
    color: red;
  }
  /*上部下*/
  .top-bottom {
    width: 100%;
    margin: 0;
    padding: 0 3%;
    font-size: 0.8rem;
    color: gray;
  }
  /*中部容器*/
  .middle-container {
    width: 100%;
    margin: 2% 0;
    height: 30%;
    background-color: white;
    @include jt-flex(column, nowrap, center, center);
  }
  /*中间顶部容器*/
  .middle-top-container {
    width: 100%;
    height: 50%;
    @include jt-flex(column, nowrap, center, center);
    p {
      margin: 0;
    }
  }
  /*中间上部上*/
  .middle-top-top {
    width: 100%;
    margin: 0;
    font-size: 0.8rem;
    color: gray;
    text-align: center;
  }
  /*中间上部下*/
  .middle-top-bottom {
    width: 100%;
    color: red;
    font-size: 1.5rem;
    text-align: center;
  }
  /*中间底部容器*/
  .middle-bottom-container {
    @include jt-flex(row, nowrap, center, center);
    width: 100%;
    height: 55%;
  }
  /*中间底部左/中/右容器*/
  .middle-bottom-left-container, .middle-bottom-middle-container, .middle-bottom-right-container {
    width: 30%;
    height: 100%;
    p {
      margin: 0;
      font-size: 0.8rem;
      text-align: center;
    }
  }
  /*中间底部左下/中下/右下*/
  .middle-bottom-left-bottom, .middle-bottom-middle-bottom, .middle-bottom-right-bottom {
    color: red;
  }
  /*底部容器*/
  .bottom-container {
    @include jt-flex(column, nowrap, flex-start, center);
    width: 100%;
    height: 47%;
    background-color: white;
  }
  /*底部上/下容器*/
  .bottom-top-container, .bottom-middle-container {
    width: 100%;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: black;
    @include jt-flex(row, nowrap, space-between, center);
    p {
      margin: 0;
      padding: 5%;
      font-size: 0.8rem;
    }
  }
  /*底部下*/
  .bottom-bottom {
    width: 80%;
    margin-top: 20%;
    color: white;
    background-color: chocolate;
  }
</style>
