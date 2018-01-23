<template>
  <div class="myGroup-container">
    <!--导航-->
    <jt-header :title="title"></jt-header>
    <!--我的团队列表-->
    <mu-list>
      <!--列表头容器-->
      <mu-sub-header class="mu-list-header">
        <!--子导航-->
        <my-group-header :title="title"></my-group-header>
      </mu-sub-header>
      <!--列表项-->
      <mu-list-item class="mu-list-item-special">
        <div class="mu-list-item-special-container">
          <div class="special-top">
            <img class="special-img" src="../../../static/money.png" alt="金币">
            <p>{{money}}</p>
          </div>
        </div>
        <button class="special-bottom">提现</button>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item">
        <button class="referral-btn">我的下线</button>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item" title="Chloe">
        <mu-avatar src="../../../static/jiatenghui.jpg" slot="leftAvatar"/>
        <p class="mu-list-item-point" slot="right">+25积分</p>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
import jtHeader from '../jtHeader'
import myGroupHeader from './myGroupHeader'

export default {
  name: 'my-group',
  components: {
    jtHeader,
    myGroupHeader
  },
  data () {
    return {
      title: '我的团队',
      money: 3100
    }
  },
  methods: {
    onClickBtn () {
      this.$router.go(-1)
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
  /*个人信息容器*/
  .myGroup-container {
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
  /*列表第一项*/
  .mu-list-item-special {
    height: 20vh;
    background-color: rgba(76, 63, 54, 0.9);
    @include jt-flex(column, nowrap, space-around, center)
  }

  /*列表第一项容器*/
  .mu-list-item-special-container {
    width: 100%;
    @include jt-flex(column, nowrap, center, center)
  }
  /*第一项上部*/
  .special-top {
    @include jt-flex(row, nowrap, space-around, baseline);
    img {
      color: rgb(231, 174, 110);
      width: 16px;
      margin: 0 5px;
    }
    p {
      font-size: 2rem;
      color: rgb(231, 174, 110);
      margin: 0;
    }
  }

  /*第一项下部*/
  .special-bottom {
    width: 100%;
    color: rgb(231, 174, 110);
    background-color: transparent;
    border-width: 1px;
    border-radius: 30px;
    border-color: rgb(231, 174, 110);
    outline:none;
  }

  /*我的下线按钮*/
  .referral-btn {
    background-color: transparent;
    border-width: 0 0 0 3px;
    border-color: #a3762f;
    outline:none;
  }

  /*列表项*/
  .mu-list-item {
    font-size: 16px;
    i {
      font-size: 16px;
      margin-right: 10vh;
    }
  }

  /*列表项积分*/
  .mu-list-item-point {
    width: 90px;
  }
</style>
