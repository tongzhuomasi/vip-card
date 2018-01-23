<template>
<div>
  <jt-header :title="title"></jt-header>
  <div>我的团队</div>
</div>
</template>

<script>
import jtHeader from '../jtHeader'
export default {
  name: 'my-group',
  components: {
    jtHeader
  },
  data () {
    return {
      title: '我的团队'
    }
  }
}
</script>

<style scoped>

</style>
