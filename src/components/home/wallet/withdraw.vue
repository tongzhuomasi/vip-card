<template>
  <div class="withdraw-container">
    <jt-header :title="title"></jt-header>
    <div>提现页面</div>
  </div>
</template>

<script>
import jtHeader from '../../jtHeader'
import jtSubHeader from '../../jtSubHeader'

export default {
  name: 'withdraw',
  components: {
    jtHeader,
    jtSubHeader
  },
  data () {
    return {
      title: '提现'
    }
  }
}
</script>

<style scoped>

</style>
