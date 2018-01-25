<template>
  <!--更改账户弹出框-->
  <div>
    <mu-raised-button label="dialog" @click="open"/>
    <mu-dialog :open="dialog" title="Dialog" @close="close">
      更改账户弹出框
      <mu-flat-button slot="actions" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  name: 'account-dialog'
}
</script>

<style scoped>

</style>
