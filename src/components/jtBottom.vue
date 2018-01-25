<template>
  <mt-tabbar class="jt-bottom-container" v-model="selectedTab">
    <!--会员-->
    <mt-tab-item id="home">
      <div slot="icon" class="jt-bottom-icon-container">
        <img class="jt-bottom-icon" src="../../static/vip-selected.png">
      </div>
    </mt-tab-item>
    <!--理财-->
    <mt-tab-item id="financing">
      <div slot="icon" class="jt-bottom-icon-container">
        <img class="jt-bottom-icon" src="../../static/financing-selected.png">
      </div>
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>

export default {
  name: 'bottom-navigation',
  data () {
    return {
      selectedTab: 'home'
    }
  },
  watch: {
    // 监听selected
    selectedTab (value) {
      // 提交mutation
      this.$store.commit('changeActive', value)
    }
  },
  computed: {
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
  /*底部tab容器*/
  .jt-bottom-container {
    height: 8vh;
  }
  /*底部tab*/
  .jt-tab {
    @include jt-flex(row, nowrap, space-around, stretch);
  }
  /*底部选项*/
  .jt-tab-item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }
  /*底部图标容器*/
  .jt-bottom-icon-container {
    margin-top: 5px;
  }
  /*底部图标图片*/
  .jt-bottom-icon {
    width: 20vw;
    position: absolute;
    transform: translate(-50%, 0);
  }

</style>
