<template>
  <mt-tabbar v-model="selected">
    <!--会员-->
    <mt-tab-item id="vip">
      <img class="jt-bottom-icon" slot="icon" src="../../static/vip-selected.png">
    </mt-tab-item>
    <!--理财-->
    <mt-tab-item id="financing">
      <img class="jt-bottom-icon" slot="icon" src="../../static/financing.png">
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'bottom-navigation',
  data () {
    return {
      selected: 'vip'
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
  .jt-bottom-icon {
    width: 25vw;
  }

</style>
