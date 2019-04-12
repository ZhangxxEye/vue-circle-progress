<template>
    <div class="circle-container">
        <div class="circle-bar" id="circle-bar">
            <div class="circle-bar-left"></div>
            <div class="circle-bar-right"></div>
            <!-- 遮罩层，显示百分比 -->
            <div class="mask">
                <span class="percent"></span>
            </div>
        </div>
    </div>
</template>

<script>
  import * as utils from './common/utils/utils';

  export default {
    name: "vue-circle-progress",
    props: {
      percent: {
        type: Number,
        default: 0
      },
      progressColor: {
        type: String,
        default: ''
      },
      progressBarColor: {
        type: String,
        default: ''
      }
    },
    mounted() {
      let circleBar = document.getElementById('circle-bar');
      let color = utils.css(circleBar, 'background-color');
      let left_circle = circleBar.getElementsByClassName('circle-bar-left')[0];
      let right_circle = circleBar.getElementsByClassName('circle-bar-right')[0];

      if (this.percent <= 50) {
        let rotate = 'rotate(' + (this.percent * 3.6) + 'deg)';
        utils.css3(right_circle, 'transform', rotate);
      } else {
        let rotate = 'rotate(' + ((this.percent - 50) * 3.6) + 'deg)';
        utils.css(right_circle, 'background-color', color);//背景色设置为进度条的颜色
        utils.css3(right_circle, 'transform', 'rotate(0deg)');//右侧不旋转
        utils.css3(left_circle, 'transform', rotate);//左侧旋转
      }
    }
  }
</script>

<style scoped lang="less">
    /*支持IE9及以上*/
    .circle-container{
        width: 68px;
        height: 68px;
        background-color: #FFE83C;
        position: relative;
        border-radius: 50%;
    }
    .circle-bar {
        /*font-size: 200px;*/
        width: 64px;
        height: 64px;
        position: absolute;
        left: 2px;
        top: 2px;
        background-color: #FFFFFF;
    }

    .circle-bar-left, .circle-bar-right {
        width: 64px;
        height: 64px;
        background-color: #FFE83C;
    }

    /*
        这里采用clip剪切了圆，实现左右两个半圆，右半圆在后面，因此在更上一层，
        clip的用法参考：http://www.w3school.com.cn/cssref/pr_pos_clip.asp
     */
    .circle-bar-right {
        clip: rect(0, auto, auto, .5em);
    }

    .circle-bar-left {
        clip: rect(0, .5em, auto, 0);
    }

    .mask {
        width: 0.8em;
        height: 0.8em;
        background-color: #FFE83C;
        text-align: center;
        line-height: 0.2em;
        color: rgba(0, 0, 0, 0.5);
    }

    .mask :first-child {
        font-size: 0.3em;
        height: 0.8em;
        line-height: 0.8em;
        display: block;
    }

    /*所有的后代都水平垂直居中，这样就是同心圆了*/
    .circle-bar * {
        position: absolute;
        left: 2px;
        top: 2px;
        margin: auto;
    }

    /*自身以及子元素都是圆*/
    .circle-bar, .circle-bar > * {
        border-radius: 50%;
    }

</style>