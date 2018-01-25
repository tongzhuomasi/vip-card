<template>
  <!--我的账户容器-->
  <div class="hold-container">
    <!--导航-->
    <jt-header :title="title"></jt-header>
    <!--子导航-->
    <account-header :title="title"></account-header>
    <!--顶部容器-->
    <div class="top-container">
      <div class="top-left-container">
        <p class="top-left-top">24000</p>
        <p class="top-left-bottom">总资产(元)</p>
      </div>
      <div class="top-right">
        <p class="top-right-top">2.15</p>
        <p class="top-right-bottom">昨日收益(元)</p>
      </div>
    </div>
    <!--我的持有按钮-->
    <button class="middle-button">资产详情</button>
    <!--列表容器-->
    <div class="list-container">
      <!--列表项-->
      <div class="list-item">
        <!--列表项左侧-->
        <div class="item-left-container">
          <p class="item-left-top">余额</p>
          <p class="item-left-bottom">5000</p>
        </div>
        <!--列表项右侧-->
        <div class="item-right-container">
          <mt-button class="item-right" @click="onClickTixian">提现</mt-button>
        </div>
      </div>
      <!--列表项-->
      <div class="list-item">
        <!--列表项左侧-->
        <div class="item-left-container">
          <p class="item-left-top">定期</p>
          <p class="item-left-bottom">19000</p>
        </div>
        <!--列表项右侧-->
        <div class="item-right-container">
          <mt-button class="item-right" @click="onClickChakan">查看</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jtHeader from '../../jtHeader'
import accountHeader from './accountHeader'
export default {
  name: 'hold',
  components: {
    jtHeader,
    accountHeader
  },
  data () {
    return {
      title: '我的账户'
    }
  },
  methods: {
    onClickTixian () {
      console.log('点击了提现')
    },
    onClickChakan () {
      console.log('点击了查看')
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
    @include jt-flex(column, nowrap, flex-start, flex-start);
  }

  /*顶部容器*/
  .top-container {
    @include jt-flex(row, nowrap, space-between, center);
    background: rgba(76, 63, 54, 0.9);
    width: 100vw;
    height: 20vh;
    padding: 5vw;
    border: 0;
  }

  /*顶部左侧容器*/
  .top-left-container {
    @include jt-flex(column, nowrap, center, flex-start);
    p {
      margin: 0;
    }
  }
  /*顶部右侧*/
  .top-right {
    color: white;
    p {
      margin: 0;
    }
  }

  /*顶部左侧上/顶部右侧上*/
  .top-left-top, .top-right-top {
    font-size: 2rem;
    color: rgb(213, 162, 107);
  }

  /*顶部左侧下/顶部右侧下*/
  .top-left-bottom, .top-right-bottom {
    font-size: 0.75rem;
    color: rgb(153, 153, 153);
  }
  /*中间按钮*/
  .middle-button {
    color: gray;
    background-color: transparent;
    font-size: 1rem;
    font-weight: bold;
    border-width: 0 0 0 3px;
    border-color: rgb(213, 162, 107);
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
    border-right: 0;
    border-left: 0;
    @include jt-flex(row, nowrap, space-between, center);
  }

  /*列表项左侧容器*/
  .item-left-container {
    width: 30vw;
    @include jt-flex(column, nowrap, center, flex-start);
    p {
      margin: 0;
    }
  }

  /*列表左侧上部*/
  .item-left-top {
    color: rgb(102, 102, 102);
    font-size: 1rem;
  }

  /*列表项左侧底部*/
  .item-left-bottom {
    font-size: 2rem;
  }

   /*列表项右侧容器*/
  .item-right-container {
    width: 30vw;
    @include jt-flex(row, nowrap, center, center);
  }
  /*列表项右侧上*/
  .item-right {
    width: 100%;
    color: rgb(213, 162, 107);
    border: 1px solid rgb(213, 162, 107);
    border-radius: 21px;
    background-color: transparent;
  }
</style>
