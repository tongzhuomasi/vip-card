<template>
  <!--我的钱包导航-->
  <mt-header class="my-group-header" :title="title">
    <mt-button icon="back" slot="left" @click="onClickBack"></mt-button>
    <mt-button class="account-details" slot="right" @click="onClickAccountDetails">账户明细</mt-button>
  </mt-header>
</template>

<script>
export default {
  name: 'wallet-header',
  props: ['title'],
  methods: {
    // 点击返回
    onClickBack () {
      this.$router.go(-1)
    },
    onClickAccountDetails () {
      this.$router.push({path: '/home/wallet/accountDetail'})
    }
  }
}
</script>

<style scoped lang="scss">
  .my-group-header {
    width: 100%;
    background-color: rgba(76, 63, 54, 0.9);
    color: rgba(255, 250, 250, 0.9);
    height: 10vh;
  }

  .account-details {
    color: rgb(176, 151, 121);
    font-size: 0.75em;
  }
</style>
