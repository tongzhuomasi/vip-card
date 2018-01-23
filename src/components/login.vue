<template>
  <div class="jt-container">
    <!--商标-->
    <div></div>
    <!--表单-->
    <div class="jt-form">
      <input class="jt-input jt-username" type="text" placeholder="请输入用户名">
      <input class="jt-input jt-password" type="password" placeholder="请输入密码">
      <mt-button class="jt-login-btn" type="primary" v-on="{click: onClickBtn}">
        登陆
      </mt-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {}
  },
  computed: {},
  methods: {
    onClickBtn () {
      console.log('登陆！！！')
      this.$router.push({path: 'home'})
    }
  }

}
</script>

<style scoped lang="scss">
  $color-transparent : rgba(255, 255, 255, 0);
  @mixin jt-flex ($dir, $main, $cross) {
    display: flex;
    flex-flow: $dir nowrap;
    justify-content: $main;
    align-items: $cross;
  }
  .jt-container {
    width: 100%;
    height: 100vh;
    @include jt-flex(column, center, center);
    background: url("../../static/bg-login.png");
    background-size: cover;
  }
  /*表单*/
  .jt-form {
    @include jt-flex(column, center, center);
    background: $color-transparent;
    width: 80%;
  }
  .jt-input {
    background-color: transparent;
    width: 100%;
    color: white;
    border-width: 0 0 1px 0;
    padding: 5px;
    margin: 5px;
  }
  .jt-username {
    font-size: 0.75rem;
    background: $color-transparent;
  }
  .jt-password {
    font-size: 0.75rem;
    background: $color-transparent;
  }
  input {
    background-color: transparent !important;
  }
  /*登陆按钮*/
  .jt-login-btn {
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    margin-top: 20px;
    font-size: 0.75rem;
  }
</style>
