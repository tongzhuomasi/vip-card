<template>
  <!--申请提现弹出框-->
  <div>
    <mu-dialog :open="applyDialog" title="申请提现" @close="switchDialog">
      <div class="dialog-body-container">
        <div class="body-top">
          <p class="top-left">提现金额:</p>
          <input class="top-right" type="text" placeholder="0.00">
        </div>
        <div class="body-bottom">
          <p class="bottom-left">消费积分:</p>
          <input class="bottom-right" type="text" placeholder="0.00">
        </div>
      </div>
      <mu-flat-button slot="actions" @click="switchDialog" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="switchDialog" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>

export default {
  name: 'apply-dialog',
  data () {
    return {
    }
  },
  computed: {
    applyDialog () {
      return this.$store.state.applyDialog
    }
  },
  methods: {
    switchDialog () {
      this.$store.commit('switchApplyDialog')
    }
  }
}
</script>

<style scoped lang="scss">
  @mixin jt-flex($dir, $wrap, $main, $cross) {
    display: flex;
    flex-flow: $dir $wrap;
    justify-content: $main;
    align-items: $cross;
  }
  /*主体上部容器/主体下部容器*/
  .body-top, .body-bottom {
    @include jt-flex(row, nowrap, space-between, center)
  }
  /*上部左侧内容/下部左侧内容*/
  .top-left, .bottom-left {
    width: 40%;
  }
  /*上部右侧内容/下部右侧内容*/
  .top-right, .bottom-right {
    width: 40%;
    outline: none;
    border: 0;
  }
</style>
