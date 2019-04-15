<template>
    <div class="progress" :style="progressStyle">
        <canvas id="canvas1" :height="height" :width="width"></canvas>
    </div>
</template>

<script>
  export default {
    name: "vue-circle-progress",
    data () {
      return {
        progressStyle: {
          width: this.width + 'px',
          height: this.height + 'px',
          backgroundColor: this.progressBarColor
        },
        canvas: null,
        canvasContext: null
      }
    },
    props: {
      width: {
        type: Number,
        default: 68
      },
      height: {
        type: Number,
        default: 68
      },
      percent: {
        type: Number,
        default: 0
      },
      progressColor: {
        type: String,
        default: '#FFFFFF'
      },
      progressBarColor: {
        type: String,
        default: '#FFE83C'
      }
    },
    watch: {
      // percent () {
      //   console.log('change ', this.percent);
      //   console.log('context ', this.canvasContext);
      //   this.drawCircle(this.percent);
      // }
    },
    mounted() {
      this.initCanvas();
      this.drawCircle(this.percent);
    },
    methods: {
      $id(id) {
        return typeof id === "string" ? document.getElementById(id) : id;
      },
      initCanvas () {
        this.canvas = this.$id("canvas1");
        // let canvas2 = this.$id("canvas2");
        this.canvasContext = this.canvas.getContext("2d"); //2d对象
        this.canvasContext.lineWidth = 2;
        this.canvasContext.strokeStyle = this.progressColor;
      },
      drawCircle (percent) {
        console.log('drawCircle', percent);
        let x = this.width / 2;
        let angle = percent * 360; //角度

        this.canvasContext.beginPath();
        console.log('angle * Math.PI / 180', angle);
        this.canvasContext.arc(x, x, x-3, 0, angle * Math.PI / 180, false);
        this.canvasContext.clearRect(0, 0, x, x); //走完一次清空一次
        this.canvasContext.stroke();
        this.canvasContext.closePath();
        this.canvasContext.rotate(90 * Math.PI / 180) //旋转的弧度
        this.canvasContext.closePath();
        this.canvasContext.restore(); //返回之前保存过的路径状态和属性
      }
    }
  }
</script>

<style scoped lang="less">
    .progress {
        position: absolute;
        transform: rotate(-90deg);
        border-radius: 50%;
    }

    #canvas1 {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
    }
</style>