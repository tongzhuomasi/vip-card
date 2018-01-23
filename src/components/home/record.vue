<template>
<div>
  <jt-header :title="title"></jt-header>
  <div>消费记录</div>
</div>
</template>

<script>
import jtHeader from '../jtHeader'
export default {
  name: 'record',
  components: {
    jtHeader
  },
  data () {
    return {
      title: '消费记录'
    }
  }
}
</script>

<style scoped>

</style>
