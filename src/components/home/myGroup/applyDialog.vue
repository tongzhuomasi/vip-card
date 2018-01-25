<template>
  <!--申请提现弹出框-->
  <div>
    <mu-dialog :open="dialog" title="Dialog" @close="switchDialog">
      申请提现弹出框
      <mu-flat-button slot="actions" @click="switchDialog" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="switchDialog" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>
import {mapState, mapMutations} from '../../../vuex/store'
export default {
  name: 'apply-dialog',
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['dialog'])
  },
  methods: {
    ...mapMutations(['switchDialog'])
  }
}
</script>

<style scoped>

</style>
