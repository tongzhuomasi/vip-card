<template>
  <!--个人信息-->
  <div class="personalInfo-container">
    <!--导航-->
    <jt-header :title="title"></jt-header>
    <!--个人信息列表-->
    <mu-list>
      <!--列表头容器-->
      <mu-sub-header class="mu-list-header">
        <!--子导航-->
        <jt-sub-header :title="title"></jt-sub-header>
      </mu-sub-header>
      <!--列表项-->
      <mu-list-item class="mu-list-item" title="Megumi">
        <mu-avatar src="../../../static/jiatenghui.jpg" slot="leftAvatar"/>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item">
        <div class="list-item">
          <p class="list-item-left" slot="left">手机号码</p>
          <p class="list-item-right" slot="right">13016661666</p>
        </div>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item" @click="onClickInvitationCode">
        <div class="list-item">
          <p class="list-item-left" slot="left">我的推荐码</p>
          <img src="../../../../static/arrow.png" alt="图标" slot="right">
        </div>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item">
        <div class="list-item">
          <p class="list-item-left" slot="left">修改密码</p>
          <img src="../../../../static/arrow.png" alt="图标" slot="right">
        </div>
      </mu-list-item>
    </mu-list>
    <!--退出登陆按钮-->
    <mt-button class="jt-logoff-btn" type="primary" v-on="{click: onClickLogoffBtn}">退出登陆</mt-button>
  </div>
</template>

<script>
import jtHeader from '../../jtHeader'
import jtSubHeader from '../../jtSubHeader'
export default {
  name: 'personal-info',
  components: {
    jtHeader,
    jtSubHeader
  },
  data () {
    return {
      title: '个人信息'
    }
  },
  methods: {
    // 点击退出登陆
    onClickLogoffBtn () {
      this.$router.push({path: '/'})
    },
    // 点击我的邀请码
    onClickInvitationCode () {
      this.$router.push({path: '/home/personalInfo/myInvitationCode'})
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
  .personalInfo-container {
    width: 100%;
    height: 100vh;
    @include jt-flex(column, nowrap, flex-start, center);
  }
  /*列表头部*/
  .mu-list-header {
    width: 100%;
    padding: 0;
  }
  /*列表项*/
  .list-item {
    @include jt-flex(row, nowrap, space-between, center);
    p {
      font-size: 0.75rem;
      margin: 0;
    }
  }
  /*列表项左侧*/
  .list-item-left {
    width: 40vw;
  }
  /*列表项右侧*/
  .list-item-right {
    width: 40vw;
    text-align: right;
  }
  /*退出登陆按钮*/
  .jt-logoff-btn {
    margin-top: 10vh;
    width: 80%;
    background-color: rgb(231, 174, 110);
  }
</style>
