<template>
  <mt-header class="personal-info-header" :title="title">
    <mt-button icon="back" slot="left" @click="onClickBack"></mt-button>
  </mt-header>
</template>

<script>
export default {
  name: 'jt-sub-header',
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
  .personal-info-header {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    color: rgba(0, 0, 0, 0.7);
    height: 50px;
  }
</style>
