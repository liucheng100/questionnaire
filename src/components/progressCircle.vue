<template>
  <div class="pC">
    <canvas ref="canvas" class="canvas" :width="width" :height="height"></canvas>
    <div class="textshow">
      {{p}}%
    </div>
  </div>
</template>

<script>
export default {
  props:{
    per:{
      require: true,
    }
  },
  data(){
    return{
      p: 0,
      init_width: 250,
      init_height: 250,
      width: 1000,
      height: 1000,
      ctx: '',
    }
  },
  watch:{
    per(){
      this.perChange()
    },
    p(){
      this.pChange()
    }
  },
  computed:{
  },
  methods: {
    setScale(){
      let canvas = this.$refs.canvas
      // 获取绘画上下文
      this.ctx = canvas.getContext("2d")
      if (window.devicePixelRatio) {
        this.height = this.init_height * window.devicePixelRatio;
        this.width = this.init_width * window.devicePixelRatio;
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }else{
        canvas.height = this.height * 4;
        canvas.width = this.width * 4;
        this.ctx.scale(4, 4);
      }
    },
    perChange(){
      if(parseInt(this.per - this.p)>0){
        this.p++;
        setTimeout(() => {
          this.perChange()
        }, 16);
      }else if(parseInt(this.per - this.p)<0){
        this.p--;
        setTimeout(() => {
          this.perChange()
        }, 16);
      }
    },
    pChange(){
      let canvas = this.$refs.canvas
      if(this.ctx) {
        // this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        // clear
        this.ctx.clearRect(0,0,this.width,this.height);
        // 开始绘画
        this.ctx.beginPath()
        // 画圆的函数，四个参数分别为x, y（坐标）, radius（半径）, angle（环形半径）, direction（环形方向，顺时针或者逆时针）
        // angle是我定义的一个变量，控制角度用的。一个完整的圆是Math.PI*2，angle把2均分之后的对应值
        this.ctx.arc(this.width/2, this.height/2, this.width/2, 0, Math.PI*this.p*0.02, false)
        // 移动笔触到圆心
        this.ctx.lineTo(this.width/2, this.width/2)
        // 闭合路径
        this.ctx.closePath()
        // 根据弧度选择填色色彩
        this.ctx.fillStyle = 'rgb(75,191,245)'
      // 填色
        this.ctx.fill()

        this.ctx.beginPath()
        this.ctx.arc(this.width/2, this.width/2, this.width*.34 , 0, Math.PI*2, false)
        // 移动笔触到圆心
        this.ctx.lineTo(this.width/2, this.width/2)
        // 闭合路径
        this.ctx.closePath()
        // 根据弧度选择填色色彩
        this.ctx.fillStyle = 'rgba(250,250,250)'
      // 填色
        this.ctx.fill()
      }
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.setScale()
      this.perChange()
    })
  }
}
</script>

<style scoped>
.pC{
  height: 100%;
  width: 100%;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  background-color: rgb(250,250,250);
}
.canvas{
  height: 100%;
  width: 100%;
  transform: rotateZ(-90deg) rotateX(180deg);
}
.textshow{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 28px;
  color: rgb(81, 91, 100);
  transform: translate(-50%, -50%);
}

@keyframes big{
  50%{
    transform: scale(1.5) translateY(-3px);
  }
  100%{
    transform: scale(1) translateY(-1px);
  }
}
</style>
