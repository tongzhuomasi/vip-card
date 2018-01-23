<template>
<div>
  <jt-header :title="title"></jt-header>
  <div>我的钱包</div>
</div>
</template>

<script>
import jtHeader from '../jtHeader'
export default {
  name: 'wallet',
  components: {
    jtHeader
  },
  data () {
    return {
      title: '我的钱包'
    }
  }
}
</script>

<style scoped>

</style>
