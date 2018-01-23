<template>
  <mu-paper>
    <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <mu-bottom-nav-item value="huiyuan" title="会员" icon="restore"/>
      <mu-bottom-nav-item value="licai" title="理财" icon="favorite"/>
    </mu-bottom-nav>
  </mu-paper>
</template>

<script>
export default {
  name: 'bottom-navigation',
  data () {
    return {
      bottomNav: 'huiyuan'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style scoped>

</style>
