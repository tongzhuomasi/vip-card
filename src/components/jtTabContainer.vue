<template>
  <!--tab容器-->
  <div class="jtTabContainer">
    <jt-header :title="active"></jt-header>
    <mt-tab-container v-model="active">
      <!--首页容器-->
      <mt-tab-container-item id="home">
        <!--首页-->
        <home></home>
      </mt-tab-container-item>
      <!--理财容器-->
      <mt-tab-container-item id="financing">
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
      active: 'home'
    }
  }
}
</script>

<style scoped>

</style>
