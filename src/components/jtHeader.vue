<template>
  <mt-header class="jt-header" :title="title">
    <mt-button icon="back" slot="left" @click="onClickBack">返回</mt-button>
    <mt-button slot="left" @click="onClickClose">关闭</mt-button>
  </mt-header>
</template>

<script>
export default {
  name: 'jtHeader',
  props: ['title'],
  methods: {
    // 点击返回
    onClickBack () {
      this.$router.go(-1)
    },
    // 点击关闭
    onClickClose () {
      console.log('点击关闭')
    }
  }
}
</script>

<style scoped lang="scss">
.jt-header {
  background-color: rgba(0, 0, 0, 0.7);
  color: rgba(255, 255, 255, 0.7);
  height: 50px;
}
</style>
