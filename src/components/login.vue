<template>
  <div class="login-container">
    <!--商标-->
    <div></div>
    <!--表单-->
    <div class="login-form">
      <div class="login-input-container">
        <img class="login-input-icon" src="../../static/phoneNumber.png" alt="手机号">
        <input class="login-input login-username" type="text" placeholder="请输入用户名">
      </div>
      <div class="login-input-container">
        <img  class="login-input-icon" src="../../static/idCode.png" alt="验证码">
        <input class="login-input login-password" type="password" placeholder="请输入密码">
      </div>
      <mt-button class="login-btn" type="primary" v-on="{click: onClickBtn}">
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
    // 点击登陆按钮
    onClickBtn () {
      this.$router.push({path: '/home'})
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
  /*登陆容器*/
  .login-container {
    width: 100%;
    height: 100vh;
    @include jt-flex(column, center, center);
    background: url("../../static/bg-login.png");
    background-size: cover;
  }
  /*登陆表单*/
  .login-form {
    @include jt-flex(column, center, center);
    background: $color-transparent;
    width: 80%;
  }
  /*表单输入栏容器*/
  .login-input-container {
    width: 100%;
    @include jt-flex(row, center, center);
    border: 0 solid white;
    border-bottom-width: 1px;
  }
  /*表单输入栏图标*/
  .login-input-icon {
    width: 20px;
  }
  /*表单输入栏*/
  .login-input {
    background-color: transparent;
    width: 100%;
    color: white;
    border-width: 0;
    padding: 5px;
    margin: 5px;
    outline: none;
  }
  /*账户输入栏*/
  .login-username {
    font-size: 0.75rem;
    background: $color-transparent;
  }
  /*密码输入栏*/
  .login-password {
    font-size: 0.75rem;
    background: $color-transparent;
  }
  /*登陆按钮*/
  .login-btn {
    width: 100%;
    background: rgba(255, 255, 255, 0.3);
    margin-top: 20px;
    font-size: 0.75rem;
  }
</style>
