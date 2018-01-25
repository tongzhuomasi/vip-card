<template>
  <!--理财容器-->
  <div class="financing-container">
    <!--顶部容器-->
    <div class="top-container">
      <div class="top-left-container">
        <p class="top-left-top">昨日收益(元)</p>
        <p class="top-left-middle">2.14</p>
        <p class="top-left-bottom">总金额(元): 24000</p>
      </div>
      <mt-button class="top-right" @click="onClickAccount">钱包账户</mt-button>
    </div>
    <!--精选推荐按钮-->
    <button class="middle-button">精选推荐</button>
    <!--列表容器-->
    <div class="list-container">
      <!--列表项-->
      <div class="list-item" @click="onClickItem(i)" v-for="i in 3" :key="i">
        <div class="item-left-container">
          <p class="item-left-top">国寿安鑫盈360天</p>
          <p class="item-left-middle">5.63{{i}}%</p>
          <p class="item-left-bottom">七日年化</p>
        </div>
        <div class="item-middle-container">
          <p class="item-middle-top">360天</p>
          <p class="item-middle-bottom">锁定期</p>
        </div>
        <p class="item-right">1000起购</p>
      </div>
    </div>
    <!--持有按钮-->
    <mt-button class="right-btn" @click="onClickHold"></mt-button>
  </div>
</template>

<script>
export default {
  name: 'financing',
  methods: {
    // 跳转我的持有页面
    onClickHold () {
      this.$router.push({path: '/financing/hold'})
    },
    // 跳转钱包账户页面
    onClickAccount () {
      this.$router.push({path: '/financing/account'})
    },
    // 点击了列表项
    onClickItem (i) {
      this.$router.push({path: '/financing/recommend'})
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

  /*理财容器*/
  .financing-container {
    width: 100vw;
    height: 100%;
  }

  /*顶部容器*/
  .top-container {
    @include jt-flex(row, nowrap, space-between, center);
    background: url("../../../static/bg-f.png");
    background-size: cover;
    height: 25vh;
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
    background-color: transparent;
    font-size: 0.75rem;
    border: 1px solid white;
    outline: none;
    padding: 0 20px;
    height: 30px;
    border-radius: 15px;
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
    height: 45vh;
    overflow: scroll;
  }
  /*列表项容器*/
  .list-item {
    margin: 0 3vw;
    padding: 10px;
    @include jt-flex(row, nowrap, space-between, center);
    box-shadow: -1px -1px 2px rgba(0, 0, 0, 0.2);
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

  /*列表项右侧*/
  .item-right {
    margin: 0;
    text-align: center;
  }

  /*底部右侧按钮*/
  .right-btn {
    float: right;
    width: 40px;
    height: 40px;
    margin-right: 10vw;
    border-radius: 25px;
    background: url("../../../static/btn-archive.png");
    background-position: center, center;
    background-size: cover;
  }
</style>
