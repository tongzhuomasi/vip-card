<template>
  <!--我的账户导航-->
  <mt-header class="account-header" :title="title">
    <mt-button icon="back" slot="left" @click="onClickFanhui"></mt-button>
    <mt-button class="right-btn" slot="right" @click="onClickTixianJilu">提现记录</mt-button>
  </mt-header>
</template>

<script>
export default {
  name: 'account-header',
  props: ['title'],
  methods: {
    // 点击返回
    onClickFanhui () {
      this.$router.go(-1)
    },
    // 点击提现记录
    onClickTixianJilu () {
      this.$router.push({path: '/financing/account/popRecord'})
    }
  }
}
</script>

<style scoped lang="scss">
  .account-header {
    width: 100%;
    background-color: rgba(76, 63, 54, 0.9);
    color: rgba(255, 250, 250, 0.9);
    height: 10vh;
    border: 0
  }

  .right-btn {
    color: rgb(176, 151, 121);
    font-size: 0.75em;
  }
</style>
