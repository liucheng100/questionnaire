<template>
  <div class="mainVol">
    <div class="color-Box">
      <div @mousewheel.passive="wheelFn" :class="{'slider-box':true, 'slider-box-active':DRAG_START, 'drag-region':true}">
        <div class="slider-box-box" @mousedown="drag_start($event,1)">
          <div ref="vol-progress" class="vol-progress">
            <div :style="{height: audio_volume*100+'%'}" :class="{'vol-pro-er':true, 'vol-pro-er-active':DRAG_START}"></div>
            <div :style="{top: (1-audio_volume)*100+'%'}" :class="{'vol-pro-dot':true, 'vol-pro-dot-active':DRAG_START}"
            @mousedown.stop="drag_start"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits:['pasteVal'],
  props:{
    c_scope:{
      require: true,
      type: Array
    },
    c_abled:{
      require: false,
      default: undefined,
      type: Array
    },
    c_h:{
      require: false,
    },
  },
  computed:{
    audio_volume(){
      return parseInt((this.set_value||this.c_scope[0])-this.c_scope[0])/(this.c_scope[1]-this.c_scope[0])
    },
    set_value(){
      if(this.set_value_===''){
        return this.c_scope[0]
      }else{
        return parseInt(this.set_value_)
      }
    }
  },
  data(){
    return{
      DRAG_START:false,
      START_offsetY: '',
      START_CLIENTY: '',
      set_value_: typeof this.c_h == "undefined" ? this.c_scope[0] : (this.c_h || this.c_scope[0]),
    }
  },
  watch:{
    c_h(to){
      // console.log(to)
      this.set_value_ = to
    },
    set_value_(to){
      // console.log(to)
      if(this.c_h !== to){
        this.$emit('pasteVal', to)
      }
      // console.log(`hsl(${to*360}, 100%, 50%)`)
      // this.$emit('change', `hsla(${to*360}, 100%, 50%, ${this.alph})`)
    }
  },
  methods: {
    Normalize(v){
      let len = this.c_scope[1]-this.c_scope[0]
      let val = v*(len)+this.c_scope[0]
      let arr = this.c_abled || (new Array(len+1).fill(0)).map((v,idx)=>{
        return this.c_scope[0]+idx;
      })
      let temp = 0
      let end = false
      arr.forEach((ele,idx)=>{
        if(end) return;
        if(idx){
          if(Math.abs(ele - val)<temp){
            temp = Math.abs(ele - val)
          }else{
            end = true;
            this.set_value_ = arr[idx-1]
            // console.log(this.audio_volume )
          }
        }else{
          temp = Math.abs(ele - val)
        }
      })
      if(!end){
        this.set_value_ = arr[arr.length-1]
      }
      
    },
    wheelFn(event){
      // console.log(event.wheelDelta)
      if(event.wheelDelta>0){
        let end = false;
        // console.log(this.c_h)
        ;(new Array(this.c_scope[1]-(this.c_h?this.set_value:this.set_value-1))
          .fill(0).map((v,idx)=>{
            return (this.c_h?this.set_value:this.c_scope[0]-1)+idx+1;
        }).forEach((v,idx)=>{
          if(end) return;
          if(this.c_abled){
            if((this.c_abled).includes(v)){
              this.set_value_ = v
              if(!this.c_h){
                this.$emit('pasteVal', v)
              }
              end = true
            }
          }else{
            this.set_value_ = v
            if(!this.c_h){
              this.$emit('pasteVal', v)
            }
            end = true
          }
        }))
      }else{
        let end = false;
        if(!this.c_h){
          ;(new Array(this.c_scope[1]-(this.c_h?this.set_value:this.set_value-1))
            .fill(0).map((v,idx)=>{
              return (this.c_h?this.set_value:this.c_scope[0]-1)+idx+1;
          }).forEach((v,idx)=>{
            if(end) return;
            if(this.c_abled){
              if((this.c_abled).includes(v)){
                this.set_value_ = v
                if(!this.c_h){
                  this.$emit('pasteVal', v)
                }
                end = true
              }
            }else{
              this.set_value_ = v
              if(!this.c_h){
                this.$emit('pasteVal', v)
              }
              end = true
            }
          }))
        }
        ;(new Array(this.set_value-this.c_scope[0])
          .fill(0).map((v,idx)=>{
            return this.set_value-idx-1;
        }).forEach((v,idx)=>{
          if(end) return;
          if(this.c_abled){
            if((this.c_abled).indexOf(v)!=-1){
              this.set_value_ = v
              // console.log(v)
              end = true
            }
          }else{
            this.set_value_ = v
            // console.log(v)
            end = true
          }
        }))
      }
    },
    drag_on(event){
      if(!this.$refs['vol-progress']) return;
      let curOffset = (event.clientY - this.START_CLIENTY) + this.START_offsetY
      if(curOffset>this.$refs['vol-progress'].offsetHeight){
        curOffset = this.$refs['vol-progress'].offsetHeight
      }else if(curOffset<0){
        curOffset = 0
      }
      this.Normalize(1-(curOffset / this.$refs['vol-progress'].offsetHeight))
    },
    drag_end(){
      this.DRAG_START = false
      window.removeEventListener('mousemove', this.drag_on)
      window.removeEventListener('mouseup', this.drag_end)
    },
    drag_start(event, opt){
      if(opt==1){
        this.START_offsetY = event.offsetY
        this.Normalize(1-(event.offsetY / this.$refs['vol-progress'].offsetHeight))
      }else{
        this.START_offsetY = event.target.offsetTop
      }
      setTimeout(() => {
        this.DRAG_START = true
      }, 0);
      this.START_CLIENTY = event.clientY
      // console.log(event.offsetY)
      // console.log(event.clientY)
      // console.log(event.target.className)
      window.addEventListener('mousemove', this.drag_on)
      window.addEventListener('mouseup', this.drag_end)
    }
  },
  mounted(){

  }
}
</script>

<style scoped>
.mainVol{
  transition: .6s;
  position: relative;
  height: 100%;
  --volW: 30px;
}
.color-Box{
  display: flex;
  align-items: center;
  height: 100%;
}
.slider-box{
  display: flex;
  align-items: center;
  height: 100%;
  width: var(--volW);
  /* width: 160px; */
  /* padding-left: 4px; */
  box-sizing: border-box;
  z-index: 9;
  /* border-radius: 8px; */
  /* overflow: hidden; */
  /* box-shadow: 2px 2px 6px rgba(0, 0, 0, .1); */
  /* background-color: rgba(250,250,250, 1); */
  
}
.slider-box-box{
  position: relative;
  height: 100%;
  width: 100%;
}
.vol-progress{
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  background-color: rgb(240,242,245);
}
.vol-pro-er{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  background-color: hsla(0, 0%, 88%, .9);
  transition: .3s;
  pointer-events: none;
}
.vol-pro-dot{
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transition: .3s;
  transform: translate(-50%,-50%);
  height: calc(var(--volW) - 6px);
  width: calc(var(--volW) - 6px);
  border-radius: 50%;
  background-color: hsla(0, 0%, 100%, 1);
  box-shadow: 0 0 4px rgba(0, 0, 0, .14);
  user-select: none;
}

.vol-pro-dot:active{
  box-shadow: 0 0 6px rgba(0, 0, 0, .2);
  height: calc(var(--volW) - 2px);
  width: calc(var(--volW) - 2px);
  /* transition: 0s; */

}
.vol-pro-er-active,.vol-pro-dot-active{
  transition: 0s;
}
.slider-box-active{
  display: flex !important;
}
.single-color-btn{
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  cursor: pointer;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, .1);
}
.white-color{
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);
}
.dot-2{
  background-color: #faa;
  /* box-shadow: 0 0 2px black; */
  width: 14px;
  height: 14px;
  box-sizing: border-box;
  border-radius: 50%;
}
.alph-Box{
  margin-left: 22px;
  height: 17.5px;
  /* width: 200px; */
  flex: 1;
  border-radius: 3px;
  /* overflow: hidden; */
  position: relative;
  /* background-color: red; */
}
.alph-linear{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 3px;
  background-image: linear-gradient(
    90deg,
    rgba(0,0,0,0) 0,
    rgba(0,0,0,1)
  );
  cursor: pointer;
}
.dot-alph{
  position: absolute;
  top: 50%;
  left: 40%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  box-shadow: 0 0 5px 2px rgba(0,0,0,.2);
  background-color: white;
  /* transition: .3s; */
}
</style>
