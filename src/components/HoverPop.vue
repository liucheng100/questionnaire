<template>
  <teleport to="body">
    <transition :name="'bili'+type">
      <div v-if="popOX" :class="{
        HoverPop: true,
        type1: type==1,
        type2: type==2,
        type3: type==3,
      }" :style="{top:pos.y+'px',left:pos.x+'px'}">
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default{
  name: 'HoverPop',
  props:{
    type:{
      required: false,
      type: Number,
      default: 1,
    },
    pos:{
      required: true,
      type: Object,
    },
    ox:{
      required: true,
      // type: Boolean,
    },
    force:{
      required: false,
      type: Boolean,
      default: true,
    }
  },
  watch:{
    ox(to){
      if(to){
        if(this.timeouter!='clear'){
          clearTimeout(this.timeouter)
          this.timeouter = 'clear'
          this.popOX = true
        }else{
          if(this.force){
            this.popOX = true
          }
        }
      }else{
        this.timeouter = setTimeout(() => {
          this.timeouter = 'clear'
          this.popOX = false
        }, this.type===3?120:250);
      }
    }
  },
  data(){
    return{
      popOX:false,
      timeouter: '',
    }
  },
  methods:{

  },
  mounted(){
    
  }
}
</script>

<style scoped>
.HoverPop{
  position: fixed;
  z-index: 9000;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0,0,0,.1);
  /* background-color: #fff; */
  transition: .3s;
  overflow: hidden;
}
.type1{
  transform: translate(-100%,-50%);
}
.type2{
  transform: translate(-50%,0%);
  transform-origin: 50% 0;
}
.type3{
  transform: translate(-50%,-100%);
  transform-origin: 50% 100%;
}
.bili1-enter-from,
.bili1-leave-to {
  opacity: 0;
  transform: translate(calc(-34px - 100%), -50%);
}
.bili1-enter-to,
.bili1-leave-from {
  opacity: 1;
  transform: translate(-100%,-50%);
}
.bili2-enter-from,
.bili2-leave-to {
  opacity: 0;
  transform: translate(-50%, 0) scaleY(.8);
}
.bili2-enter-to,
.bili2-leave-from {
  opacity: 1;
  transform: translate(-50%, 0%);
}
.bili3-enter-from,
.bili3-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%) scaleY(.75);
}
.bili3-enter-to,
.bili3-leave-from {
  opacity: 1;
  transform: translate(-50%, -100%) scaleY(1);
}
</style>

