<template>
  <mt-tabbar v-model="selected">
    <mt-tab-item id="会员">
      <img slot="icon" src="../../static/vip-selected.png">
    </mt-tab-item>
    <mt-tab-item id="理财">
      <img slot="icon" src="../../static/financing.png">
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'bottom-navigation',
  data () {
    return {
      selected: '会员'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
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
  .jt-tab {
    @include jt-flex(row, nowrap, space-around, stretch);
  }
  .jt-tab-item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

</style>
