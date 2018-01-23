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
      <div class="jt-options">
        <!--选项-->
        <button class="jt-option" v-for="(option, index) in options1" :key="index" @click="onClickOption(index)">
          <!--图片-->
          <img class="jt-icon" :src="option.icon"/>
          <!--选项标题-->
          <p class="jt-title">{{option.title}}</p>
        </button>
      </div>
      <!--选项表容器-->
      <div class="jt-options">
        <!--选项-->
        <button class="jt-option" v-for="(option, index) in options2" :key="index" @click="onClickOption(index)">
          <!--图片-->
          <img class="jt-icon" :src="option.icon"/>
          <!--选项标题-->
          <p class="jt-title">{{option.title}}</p>
        </button>
      </div>
      <!--选项表容器-->
      <!--<mu-grid-list class="jt-options" :cellHeight=100 :cols=2 :padding=4>-->
      <!--&lt;!&ndash;选项&ndash;&gt;-->
      <!--<mu-grid-tile class="jt-option" v-for="(option, index) in options" :key="index">-->
      <!--<button @click="onClickOption(index)">-->
      <!--&lt;!&ndash;图片容器&ndash;&gt;-->
      <!--<mu-paper class="jt-paper" circle :zDepth="2">-->
      <!--&lt;!&ndash;图片&ndash;&gt;-->
      <!--<img class="jt-icon" :src="option.icon"/>-->
      <!--</mu-paper>-->
      <!--&lt;!&ndash;选项标题&ndash;&gt;-->
      <!--&lt;!&ndash;<p slot="jt-title">{{option.title}}</p>&ndash;&gt;-->
      <!--</button>-->
      <!--</mu-grid-tile>-->
      <!--</mu-grid-list>-->
    </div>
    <!--尾部选项卡-->
    <jt-bottom/>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import jtHeader from './jtHeader'
import jtBottom from './jtBottom'

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
          icon: '../../static/opt1.png',
          title: '个人信息'
        }, {
          icon: '../../static/opt2.png',
          title: '我的团队'
        }
      ],
      options2: [
        {
          icon: '../../static/opt3.png',
          title: '消费记录'
        }, {
          icon: '../../static/opt4.png',
          title: '我的钱包'
        }
      ]
    }
  },
  methods: {
    onClickOption (index) {
      //  根据index判断点击了哪个选项
      console.log(index)
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
    background: url("../../static/bg-home.png");
    background-size: cover;
  }

  .home-body {
    height: 100%;
    @include jt-flex(column, nowrap, space-around, center)
  }

  /*二维码*/
  .jt-qrcode {
    width: 80vw;
    height: 20vh;
  }

  /*选项容器*/
  .jt-options {
    width: 80vw;
    height: 20vh;
    @include jt-flex(row, nowrap, space-around, center);
    background-color: transparent;
  }

  /*选项*/
  .jt-option {
    @include jt-flex(column, nowrap, space-between, center);
    background-color: transparent;
    border: 0;
    margin: 20px 0.5%;
  }

  /*图标*/
  .jt-icon {
    width: 20vw;
    max-width: 114px;
    min-width: 62px;
    /*height: 100px;*/
  }

  /*选项标题*/
  .jt-title {
    background-color: transparent;
  }
</style>
