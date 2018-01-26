<template>
  <!--tab容器-->
  <div class="jtTabContainer">
    <!--<jt-header :title="activeTab"></jt-header>-->
    <mt-tab-container v-model="activeTab">
      <!--首页容器-->
      <mt-tab-container-item class="tab-container" id="home">
        <!--首页-->
        <home></home>
      </mt-tab-container-item>
      <!--理财容器-->
      <mt-tab-container-item class="tab-container" id="financing">
        <!--理财-->
        <financing></financing>
      </mt-tab-container-item>
    </mt-tab-container>
    <jt-bottom></jt-bottom>
  </div>
</template>

<script>
import jtHeader from './jtHeader'
import jtBottom from './jtBottom'
import home from './home/home'
import financing from './financing/financing'

export default {
  name: 'jt-tab-container',
  components: {
    jtHeader,
    jtBottom,
    home,
    financing
  },
  data () {
    return {

    }
  },
  computed: {
    activeTab: {
      get () {
        return this.$store.state.activeTab
      },
      set () {
      }
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
  .jtTabContainer {
    height: 100%;
  }
  .tab-container {
    @include jt-flex(row, nowrap, center, stretch);
    height: 84vh
  }
</style>
