<template>
  <mt-header class="record-header" :title="title">
    <mt-button icon="back" slot="left" @click="onClickBack">返回</mt-button>
  </mt-header>
</template>

<script>
export default {
  name: 'record-header',
  props: ['title'],
  methods: {
    // 点击返回
    onClickBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
  .record-header {
    width: 100%;
    background-color: rgba(76, 63, 54, 0.9);
    color: rgba(255, 250, 250, 0.9);
    height: 50px;
  }
</style>
