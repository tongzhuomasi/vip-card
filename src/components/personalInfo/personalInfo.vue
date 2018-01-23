<template>
  <div>
    <jt-header :title="title"></jt-header>
    <div>个人信息</div>
  </div>
</template>

<script>
import jtHeader from '../jtHeader'
export default {
  name: 'personal-info',
  components: {
    jtHeader
  },
  data () {
    return {
      title: '个人信息'
    }
  }
}
</script>

<style scoped>

</style>
