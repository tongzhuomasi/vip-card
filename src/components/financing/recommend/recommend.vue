<template>
  <!--精选推荐-->
  <div class="recommend-container">
    <!--导航-->
    <jt-header :title="title"></jt-header>
    <!--子导航-->
    <jt-sub-header :title="title"></jt-sub-header>
    <!--顶部容器-->
    <div class="top-container">
      <div class="top-left-container">
        <p class="top-left-top">5.4130%</p>
        <p class="top-left-bottom">七日年化</p>
      </div>
      <div class="top-right-container">
        <p class="top-right-top">360天</p>
        <p class="top-right-bottom">产品期限</p>
      </div>
    </div>
    <!--中部容器-->
    <div class="middle-container">
      <!--中部上容器-->
      <div class="middle-top-container">
        <p class="middle-top-left">七日年化收益率</p>
        <p class="middle-top-right">万份收益:1.4645元</p>
      </div>
      <!--中部下容器-->
      <div class="middle-bottom"></div>
    </div>
    <!--底部容器-->
    <div class="bottom-container">
      <mt-button class="bottom-top" @click="onClickBuy">买入</mt-button>
      <div class="bottom-bottom-container">
        <mu-checkbox class="bottom-bottom-top"/>
        <p class="bottom-bottom-bottom">已经同意<a class="bottom-bottom-bottom-right">《产品服务协议》</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import jtHeader from '../../jtHeader'
import jtSubHeader from '../../jtSubHeader'

export default {
  name: 'recommend',
  components: {
    jtHeader,
    jtSubHeader
  },
  data () {
    return {
      title: '国寿安营365天'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    // 绘制图表
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('middle-bottom')[0])
      // 绘制图表
      myChart.setOption({
        xAxis: {
          type: 'category',
          data: ['01-08', '01-11', '01-16']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [0.00, 1.35, 2.71, 4.06, 5.41, 6.77],
          type: 'line',
          smooth: true
        }]
      })
    },
    // 点击买入
    onClickBuy () {
      this.$router.push({path: '/financing/recommend/buy'})
    }
  }
}
</script>

<style scoped lang="scss">
  // 弹性布局
  @mixin jt-flex($dir, $wrap, $main, $cross) {
    display: flex;
    flex-flow: $dir $wrap;
    justify-content: $main;
    align-items: $cross;
  }
  // 顶部容器高度
  $top-container-height: 20%;
  // 中间容器高度
  $middle-container-height: 50%;
  // 底部容器高度
  $bottom-container-height: 20%;
  /*精选推荐容器*/
  .recommend-container {
    width: 100vw;
    height: 100vh;
    @include jt-flex(column, nowrap, flex-start, center)
  }
  /*顶部容器*/
  .top-container {
    width: 100%;
    height: $top-container-height;
    @include jt-flex(row, nowrap, space-between, center)
  }
  /*顶部左侧容器/顶部右侧容器*/
  .top-left-container, .top-right-container {
    width: 48%;
    @include jt-flex(column, nowrap, center, center);
    p {
      margin: 0;
    }
  }
  /*顶部左侧上/顶部右侧上*/
  .top-left-top, .top-right-top {
    font-size: 2rem;
  }
  /*顶部左侧上*/
  .top-left-top {
    color: rgb(232, 84, 30);
  }
  /*顶部右侧上*/
  .top-right-top {
    color: rgb(51, 51, 51);
  }
  /*顶部左侧下/顶部右侧下*/
  .top-left-bottom, .top-right-bottom {
    font-size: 0.8rem;
    color: gray;
  }
  /*中部容器*/
  .middle-container {
    width: 100%;
    height: $middle-container-height;
    @include jt-flex(column, nowrap, flex-start, center)
  }
  /*中部上容器*/
  .middle-top-container {
    width: 100%;
    height: 15%;
    padding: 0 5% 0 5%;
    @include jt-flex(row, nowrap, space-between, center);
    p {
      margin: 0;
    }
  }
  /*中部上左侧*/
  .middle-top-left {
    font-size: 1.2rem;
    font-weight: bolder;
  }
  /*中部上右侧*/
  .middle-top-right {
    font-size: 1rem;
    color: gray;
  }
  /*中部下*/
  .middle-bottom {
    width: 100%;
    height: 90%;
  }
  /*底部容器*/
  .bottom-container {
    width: 100%;
    height: $bottom-container-height;
    @include jt-flex(column, nowrap, flex-start, center)
  }
  /*底部上*/
  .bottom-top {
    width: 80%;
    height: 40%;
    color: white;
    background-color: rgba(255, 156, 56, 0.74);
  }
  /*底部下容器*/
  .bottom-bottom-container {
    width: 100%;
    @include jt-flex(row, nowrap, flex-start, center);
    padding: 0 0 0 10%;
  }
  /*底部下侧下*/
  .bottom-bottom-bottom {
    font-size: 0.75rem;
  }
  /*底部下侧下右*/
  .bottom-bottom-bottom-right {
    color: cornflowerblue;
  }
</style>
