<template>
  <div class="my-invitation-code-container">
    <jt-header :title="title"></jt-header>
    <jt-subheader :title="title"></jt-subheader>
    <div class="invitation-code-body">
      <div class="img-container">
        <img class="invitation-bg-img" src="../../../static/invitation-code-bg.png" alt="推荐码背景">
        <h1 class="invitation-number">{{invitationNumber}}</h1>
      </div>
      <h2>您的推荐码</h2>
      <div class="text-container">
        <p>邀请新人注册钻石会员卡</p>
        <p>您可得到积分奖励</p>
        <p>积分可以兑换现金</p>
        <p>提现到支付宝或者微信账户</p>
      </div>
    </div>
  </div>
</template>

<script>
import jtHeader from '../jtHeader'
import jtSubheader from '../jtSubHeader'
export default {
  name: 'my-invitation-code',
  components: {
    jtHeader,
    jtSubheader
  },
  data () {
    return {
      title: '我的推荐码',
      invitationNumber: 545445
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
  /*页面容器*/
  .my-invitation-code-container {
    width: 100vw;
    height: 100vh;
    position: relative;
  }
  /*页面主体*/
  .invitation-code-body {
    width: 100vw;
    @include jt-flex(column, nowrap, center, center);
    position: absolute;
    top: 100px;
    bottom: 0;
    h2 {
      font-size: 20px;
      margin: 5px;
    }
  }
  /*邀请码背景图容器*/
  .img-container {
    width: 70vw;
    @include jt-flex(column, nowrap, center, center);
    position: relative;
  }
  /*邀请码背景图*/
  .invitation-bg-img {
    width: 100%;
    max-width: 270px;
    min-width: 220px;
  }
  /*邀请码数字*/
  .invitation-number {
    margin: 0;
    position: absolute;
    bottom: 40%;
  }
  /*底部说明文字*/
  .text-container {
    margin-bottom: 10vh;
    @include jt-flex(column, nowrap, center, center);
    p {
      font-size: 14px;
      color: dimgrey;
      margin: 0;
    }
  }
</style>
