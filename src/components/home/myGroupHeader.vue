<template>
  <mt-header class="my-group-header" :title="title">
    <mt-button icon="back" slot="left" @click="onClickBack">返回</mt-button>
    <mt-button class="record-btn" slot="right" @click="onClickEnchashmentRecord">提现记录</mt-button>
  </mt-header>
</template>

<script>
export default {
  name: 'my-group-header',
  props: ['title'],
  methods: {
    // 点击返回
    onClickBack () {
      this.$router.go(-1)
    },
    // 点击提现记录
    onClickEnchashmentRecord () {
      this.$router.push({path: '/home/myGroup/enchashmentRecord'})
    }
  }
}
</script>

<style scoped lang="scss">
  .my-group-header {
    width: 100%;
    background-color: rgba(76, 63, 54, 0.9);
    color: rgba(255, 250, 250, 0.9);
    height: 50px;
  }
  .record-btn {
    color: rgb(176, 151, 121);
    font-size: 0.75em;
  }
</style>
