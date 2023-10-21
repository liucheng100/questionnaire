<template>
  <div class="header">
    <div class="lefter">
      <div class="logo noSelect">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="title">
        天津大学2022年度辅导员个人测评系统
      </div>
    </div>
    <div class="righter">
      <div ref="HoverPop" :style="{backgroundColor:HoverPop_ox?'transparent':''}" class="HoverPopBtn" @mouseenter="HoverPop_ox=true" @mouseleave="HoverPop_ox=false">
        <div class="iconfont icon-user"></div>
        <div>{{username || '请重新登陆'}}</div>
        <div class="iconfont icon-array" :style="{transform:HoverPop_ox?`rotate(180deg)`:''}"></div>
      </div>
    </div>
    <HoverPop :type="2" :ox="HoverPop_ox" :pos="HoverPop_pos">
      <div @mouseenter.native="HoverPop_ox=true" @mouseleave.native="HoverPop_ox=false" class="HoverPopBox">
        <div @click="logout" class="itemBtn">
          <div class="iconfont icon-logout"></div>
          <div>退出账号</div>
        </div>
      </div>
    </HoverPop>
  </div>
</template>

<script>
import getAssetsFile from "@/utils/pub-use";
import HoverPop from "@/components/HoverPop.vue"
import { removeToken } from "@/utils/auth";
export default {
  props:{
    username:{
      required: true,
      default: '请重新登陆'
    }
  },
  components:{
    HoverPop
  },
  data() {
    return {
      HoverPop_ox: false,
      HoverPop_pos: {x:500,y:500},
    };
  },
  watch:{
    HoverPop_ox(){
      let rect = this.$refs.HoverPop.getBoundingClientRect()
      let offset = 12
      this.HoverPop_pos.x = rect.left+rect.width - 96
      this.HoverPop_pos.y = rect.top+rect.height + offset
    }
  },
  methods: {
    getAssetsFile(url) {
      return getAssetsFile(url);
    },
    logout() {
      ElMessage.success("退出登录成功");
      removeToken();
      this.$router.push("/login");
    },
    goBack() {
      if (this.$route.meta.title?.split("-").length >= 2) {
        if (this.$router.options.history.state.back) {
          this.$router.back();
        } else {
          this.$router.push("/");
        }
      }
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: #fff;
  box-shadow: 0 2px 4px #00000014;
  color: rgba(0, 0, 0, 0.65);
  transition: .2s;
}
.lefter{
  display: flex;
  align-items: center;
}
img{
  height: 100%;
  filter: hue-rotate(19deg) saturate(10000%);
}
.logo{
  height: 46px;
}
.title {
  font-size: 19px;
  /* font-style:italic; */
  margin-left: 34px;
}
.righter{
  display: flex;
  margin-right: 40px;
}
.HoverPopBtn{
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  /* width: 180px; */
  min-width: 180px;
  padding: 6px 20px;
  height: 52px;
  color: rgb(1, 132, 233);
  border-radius: 17px;
  background-color: rgba(0, 0, 0,.056);
  transition: .6s;
  cursor: pointer;
}
.icon-user{
  margin-left: 5px;
  margin-right: 14px;
  font-size: 12px;
}
.icon-array{
  margin-left: 10px;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.6);
  transition: .3s;
}
.HoverPopBox{
  padding: 10px 0;
  background-color: #fffa;
}
.itemBtn{
  width: 200px;
  height: 53px;
  display: flex;
  align-items: center;
  font-size: 18px;
  transition: .2s;
  cursor: pointer;
  user-select: none;
}
.itemBtn:hover{
  background-color: rgba(0,0,0,0.04);
}
.itemBtn:active{
  background-color: rgba(0,0,0,0.06);
}
.icon-logout{
  font-size: 26px;
  margin: 0 10px 0 16px;
  color: rgba(148,171,192, 1);
}
</style>