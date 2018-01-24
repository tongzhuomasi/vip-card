<template>
  <!--外部容器-->
  <div class="home-container">
    <!--头部导航-->
    <jt-header class="jt-header" title="home"/>
    <!--中间主体-->
    <div class="home-body">
      <!--会员卡二维码-->
      <mu-paper class="jt-qrcode" :zDepth="2"></mu-paper>
      <!--选项表容器-->
      <div class="jt-options1">
        <!--选项-->
        <button class="jt-option" v-for="(option, index) in options1" :key="index" @click="onClickOption(option)">
          <!--图片-->
          <img class="jt-icon" :src="option.icon"/>
          <!--选项标题-->
          <p class="jt-title">{{option.title}}</p>
        </button>
      </div>
      <!--选项表容器-->
      <div class="jt-options2">
        <!--选项-->
        <button class="jt-option" v-for="(option, index) in options2" :key="index" @click="onClickOption(option)">
          <!--图片-->
          <img class="jt-icon" :src="option.icon"/>
          <!--选项标题-->
          <p class="jt-title">{{option.title}}</p>
        </button>
      </div>
      <!--背景图片-->
      <img class="bg-img" src="../../../static/bg-home.png" alt="背景图">
    </div>
    <!--尾部选项卡-->
    <jt-bottom/>
  </div>
</template>

<script>
import jtHeader from '../jtHeader'
import jtBottom from '../jtBottom'

export default {
  name: 'home',
  components: {
    jtHeader,
    jtBottom
  },
  data () {
    return {
      // 主页选项
      options1: [
        {
          path: 'personalInfo',
          icon: '../../static/opt1.png',
          title: '个人信息'
        }, {
          path: 'myGroup',
          icon: '../../static/opt2.png',
          title: '我的团队'
        }
      ],
      options2: [
        {
          path: 'purchaseRecord',
          icon: '../../static/opt3.png',
          title: '消费记录'
        }, {
          path: 'wallet',
          icon: '../../static/opt4.png',
          title: '我的钱包'
        }
      ]
    }
  },
  methods: {
    onClickOption ({path}) {
      console.log(`/home/${path}`)
      // 路由跳转
      this.$router.push({path: `/home/${path}`})
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

  /*首页容器*/
  .home-container {
    width: 100%;
    height: 100vh;
    @include jt-flex(column, nowrap, space-between, stretch);
  }

  /*首页主体*/
  .home-body {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    @include jt-flex(column, nowrap, space-around, center)
  }
  /*背景图*/
  .bg-img {
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  /*二维码*/
  .jt-qrcode {
    width: 80vw;
    height: 20vh;
    border-radius: 5px;
  }

  /*选项容器上*/
  .jt-options1 {
    width: 80vw;
    height: 20vh;
    @include jt-flex(row, nowrap, space-around, center);
    background-color: transparent;
  }

  /*选项容器下*/
  .jt-options2 {
    width: 80vw;
    height: 20vh;
    @include jt-flex(row, nowrap, space-around, center);
    background-color: transparent;
    margin-bottom: 10vh;
  }

  /*选项*/
  .jt-option {
    @include jt-flex(column, nowrap, space-between, center);
    background-color: transparent;
    width: 100%;
    border: 0;
    margin: 0 0.5%;
    padding: 0;
    outline: none;
  }

  /*图标*/
  .jt-icon {
    width: 20vw;
    max-width: 100px;
    min-width: 70px;
    /*height: 100px;*/
  }

  /*选项标题*/
  .jt-title {
    background-color: transparent;
    margin: 5px 0;
  }
</style>
