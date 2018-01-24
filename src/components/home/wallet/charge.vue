<template>
  <div class="charge-container">
    <jt-header :title="title"></jt-header>
    <div>充值页面</div>
  </div>
</template>

<script>
import jtHeader from '../../jtHeader'
import jtSubHeader from '../../jtSubHeader'

export default {
  name: 'charge',
  components: {
    jtHeader,
    jtSubHeader
  },
  data () {
    return {
      title: '充值'
    }
  }
}
</script>

<style scoped>

</style>
