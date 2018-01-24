<template>
  <div class="charge-container">
    <jt-header :title="title"></jt-header>
    <div class="jt-charge-container">
      <jt-sub-header></jt-sub-header>
    </div>
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

<style scoped lang="scss">

</style>
