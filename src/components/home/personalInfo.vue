<template>
  <div class="personalInfo-container">
    <!--导航-->
    <jt-header :title="title"></jt-header>
    <!--个人信息列表-->
    <mu-list>
      <!--列表头容器-->
      <mu-sub-header class="mu-list-header">
        <!--子导航-->
        <personal-info-header :title="title"></personal-info-header>
      </mu-sub-header>
      <!--列表项-->
      <mu-list-item class="mu-list-item" title="Megumi">
        <mu-avatar src="../../../static/jiatenghui.jpg" slot="leftAvatar"/>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item" title="手机号码">
        <mu-icon value="13022222222" slot="right"/>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item" title="我的推荐码">
        <mu-icon value="chat_bubble" slot="right"/>
      </mu-list-item>
      <!--列表项-->
      <mu-list-item class="mu-list-item" title="修改密码">
        <mu-icon value="chat_bubble" slot="right"/>
      </mu-list-item>
    </mu-list>
    <!--推出登陆按钮-->
    <mt-button class="jt-logoff-btn" type="primary" v-on="{click: onClickBtn}">退出登陆</mt-button>
  </div>
</template>

<script>
import jtHeader from '../jtHeader'
import personalInfoHeader from './personalInfoHeader'
export default {
  name: 'personal-info',
  components: {
    jtHeader,
    personalInfoHeader
  },
  data () {
    return {
      title: '个人信息'
    }
  },
  methods: {
    onClickBtn () {
      this.$router.push({path: '/'})
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
  .mu-list-item {
    font-size: 16px;
    i {
      font-size: 16px;
      margin-right: 10vh;
    }
  }
  /*退出登陆按钮*/
  .jt-logoff-btn {
    margin-top: 10vh;
    width: 80%;
    background-color: rgb(231, 174, 110);
  }
</style>
