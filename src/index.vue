<template>
    <div class="progress" :style="progressStyle">
        <canvas id="canvas1" :height="height" :width="width"></canvas>
        <div class="middle">
            <slot></slot>
        </div>
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
      percent () {
        this.drawCircle(this.percent);
      }
    },
    mounted() {
      // this.initCanvas();
      this.drawCircle(this.percent);
    },
    methods: {
      $id(id) {
        return typeof id === "string" ? document.getElementById(id) : id;
      },
      initCanvas () {
        this.canvas = this.$id("canvas1");
        this.canvasContext = this.canvas.getContext("2d"); //2d对象
        this.canvasContext.lineWidth = 2;
        this.canvasContext.strokeStyle = this.progressColor;
      },
      drawCircle (percent) {
        this.canvas = this.$id("canvas1");
        this.canvasContext = this.canvas.getContext("2d"); //2d对象
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height); //走完一次清空一次
        this.canvasContext.lineWidth = 2;
        this.canvasContext.strokeStyle = this.progressColor;
        let x = this.width / 2;
        let angle = percent * 360; //角度
        this.canvasContext.beginPath();
        this.canvasContext.arc(x, x, x-3, 0, angle * Math.PI / 180, false);
        this.canvasContext.stroke();
        this.canvasContext.closePath();
      }
    }
  }
</script>

<style scoped lang="less">
    .progress {
        transform: rotate(-90deg);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        .middle{
            transform: rotate(90deg);
        }
    }

    #canvas1 {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
    }
</style>