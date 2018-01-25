<template>
  <!--持有容器-->
  <div class="hold-container">
    <!--导航-->
    <jt-header :title="title"></jt-header>
    <!--顶部容器-->
    <div class="top-container">
      <div class="top-left-container">
        <p class="top-left-top">昨日收益(元)</p>
        <p class="top-left-middle">2.14</p>
        <p class="top-left-bottom">总金额(元): 24000</p>
      </div>
      <div class="top-right">
        <p class="top-right-top">持有收益(元)</p>
        <p class="top-right-bottom">88.6</p>
      </div>
    </div>
    <!--我的持有按钮-->
    <button class="middle-button">我的持有</button>
    <!--列表容器-->
    <div class="list-container">
      <!--列表项-->
      <div class="list-item" v-for="i in 3" :key="i">
        <div class="item-left-container">
          <p class="item-left-top">{{i}}国寿安鑫盈360天</p>
          <p class="item-left-middle">5.631%</p>
          <p class="item-left-bottom">七日年化</p>
          <p class="item-left-four">56天后到期</p>
        </div>
        <div class="item-middle-container">
          <p class="item-middle-top">360天</p>
          <p class="item-middle-bottom">锁定期</p>
        </div>
        <!--列表项右侧-->
        <div class="item-right-container">
          <!--列表项右侧左-->
          <div class="item-right-left-container">
            <p class="item-right-left-top">购买金额(元): </p>
            <p class="item-right-left-middle">昨日收益(元): </p>
            <p class="item-right-left-bottom">累计收益(元): </p>
          </div>
          <!--列表项右侧右-->
          <div class="item-right-right-container">
            <p class="item-right-right-top">12000</p>
            <p class="item-right-right-middle">0.12</p>
            <p class="item-right-right-bottom">8.12</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jtHeader from '../../jtHeader'
export default {
  name: 'hold',
  components: {
    jtHeader
  },
  data () {
    return {
      title: '持有'
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

  /*持有容器*/
  .hold-container {
    width: 100vw;
    height: 100%;
  }

  /*顶部容器*/
  .top-container {
    @include jt-flex(row, nowrap, space-between, center);
    background: url("../../../../static/bg-f.png");
    background-size: cover;
    height: 24vh;
    padding: 5vw;
  }

  /*顶部左侧容器*/
  .top-left-container {
    @include jt-flex(column, nowrap, center, flex-start);
    p {
      margin: 0;
      color: white;
    }
  }

  /*顶部左侧上*/
  .top-left-top {
    font-size: 0.75rem;
    color: rgba(240, 140, 42, 0.74);
  }

  /*顶部左侧中*/
  .top-left-middle {
    font-size: 1.5rem;
  }

  /*顶部左侧下*/
  .top-left-bottom {
    font-size: 1rem;
  }

  /*顶部右侧*/
  .top-right {
    color: white;
    p {
      margin: 0;
    }
  }
  /*顶部右侧上*/
  .top-right-top {
    font-size: 0.75rem;
  }
  /*顶部右侧下*/
  .top-right-bottom {
    font-size: 1.5rem;
  }
  /*中间精选推荐按钮*/
  .middle-button {
    color: gray;
    background-color: transparent;
    font-size: 1rem;
    font-weight: bold;
    border-width: 0 0 0 3px;
    border-color: chocolate;
    outline: none;
    margin: 1vh 5vw;
  }
  /*列表容器*/
  .list-container {
    width: 100%;
    height: 60vh;
    overflow: scroll;
  }
  /*列表项容器*/
  .list-item {
    margin: 1vh 2vw;
    padding: 2vw;
    border: 1px solid rgba(0, 0, 0, 0.2);
    @include jt-flex(row, nowrap, space-between, center);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  /*列表项左侧容器*/
  .item-left-container {
    @include jt-flex(column, nowrap, center, flex-start);
    p {
      margin: 0;
    }
  }

  /*列表左侧上部*/
  .item-left-top {
    font-size: 0.75rem;
  }

  /*列表左侧中部*/
  .item-left-middle {
    font-size: 1.25rem;
    color: coral;
  }

  /*列表项左侧底部*/
  .item-left-bottom {
    font-size: 0.75rem;
  }
  /*列表项左侧第四个*/
  .item-left-four {
    font-size: 0.75rem;
    color: darkred;
  }

  /*列表项中间容器*/
  .item-middle-container {
    @include jt-flex(column, nowrap, center, center);
    p {
      margin: 0;
    }
  }

  /*列表项中间上部*/
  .item-middle-top {
    font-size: 1rem;
    font-weight: bolder;
  }

  /*列表项中间下部*/
  .item-middle-bottom {
    font-size: 0.75rem;
  }
  /*列表项右侧容器*/
  .item-right-container {
    @include jt-flex(row, nowrap, center, center);
  }
  /*列表项右侧左容器*/
  .item-right-left-container {
    @include jt-flex(column, nowrap, center, flex-start);
    margin: 1vw;
    p {
      margin: 0;
      font-size: 0.75rem;
    }
    /*列表项右侧左中/列表项右侧左下*/
    .item-right-left-middle, .item-right-left-bottom {
      color: gray;
    }
  }
  /*列表项右侧右容器*/
  .item-right-right-container {
    @include jt-flex(column, nowrap, center, flex-start);
    margin: 1vw;
    p {
      margin: 0;
      font-size: 0.75rem;
    }
  }
  /*列表项右侧右中/列表项右侧右下*/
  .item-right-right-middle, .item-right-right-bottom{
    color: red;
  }
</style>
