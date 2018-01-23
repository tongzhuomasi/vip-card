<template>
  <mt-header class="jt-header" fixed :title="title">
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

<style scoped>

</style>
