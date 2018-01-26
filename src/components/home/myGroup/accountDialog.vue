<template>
  <!--更改收款账户弹出框-->
  <div>
    <mu-dialog :open="accountDialog" @close="switchDialog">
      <div class="dialog-body">
        <div class="body-top">
          <p class="top-left">收款方式:</p>
          <div class="top-right">
            <mu-radio name="account" nativeValue="weixin" v-model="account" class="radio"/> <br/>
            <p style="margin-right: 5vw">微信</p>
            <mu-radio name="account" nativeValue="zhifubao" v-model="account"  class="radio"/> <br/>
            <p>支付宝</p>
          </div>
        </div>
        <div class="body-bottom">
          <p class="bottom-left">收款账户:</p>
          <input class="bottom-right" type="text" placeholder="钱款会将在两个小时内到账">
        </div>
      </div>
      <mu-flat-button slot="actions" @click="switchDialog" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="switchDialog" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>

export default {
  name: 'account-dialog',
  data () {
    return {
      account: 'weixin' // 弹出框账户单选
    }
  },
  computed: {
    accountDialog () {
      return this.$store.state.accountDialog
    }
  },
  methods: {
    switchDialog () {
      this.$store.commit('switchAccountDialog')
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
  /*弹出框主体*/
  .dialog-body {
    width: 110%;
    height: 110%;
  }
  /*主体上部容器/主体下部容器*/
  .body-top, .body-bottom {
  @include jt-flex(row, nowrap, space-between, center)
  }
  /*上部左侧内容/下部左侧内容*/
  .top-left, .bottom-left {
    margin: 0;
    width: 30%;
    font-size: 0.8rem;
    font-weight: bolder;
  }
  /*上部右侧内容/下部右侧内容*/
  .top-right, .bottom-right {
    width: 72%;
    outline: none;
    border: 0;
    font-size: 0.75rem;
  }
  /* 顶部右侧 */
  .top-right {
    @include jt-flex(row, nowrap, flex-start, center)
  }
</style>
