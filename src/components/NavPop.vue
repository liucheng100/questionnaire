<template>
  <div @mouseenter="state=false" @mouseleave="state=true" :class="{navpop:true,stateOn:state}">
    <div class="show0">
      <div class="title">
        评价进度 -- {{per_0}} / {{per_1}}
      </div>
      <div class="listBox">
        <div @click="clickFn(0, i)" :class="{navItem:true, item_active: !leaderSelect?(selectedKey==i):false}" v-for="(i,index) in comment_keys">
          <div class="left-er">
            {{ i }}
          </div>
          <div class="right-er">
            <div v-if="comment[comment_keys[index]]">未完成</div>
            <div v-else class="finish iconfont icon-finish"></div>
          </div>
        </div>
        <div @click="clickFn(1)" :class="{navItem:true, item_active: leaderSelect}" v-if="current.isLeader">
          <div class="left-er">
            {{ current.role }}辅导员 -- 领导评分
          </div>
          <div class="right-er">
            <div v-if="leader">未完成</div>
            <div v-else class="finish iconfont icon-finish"></div>
          </div>
        </div>
      </div>
    </div>
    <transition name="ani1">
      <div class="show1" v-if="state">
        <div class="proDotBox">
          <proDot :per="per"></proDot>
        </div>
        <div class="info"> 
          <div>完成进度</div>
          <div>{{per_0}} / {{per_1}}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import getAssetsFile from "@/utils/pub-use";
import proDot from "@/components/progressCircle.vue"
export default {
  emits:['selectFn'],
  components:{
    proDot
  },
  props:{
    selectedKey:{
      required: true,
      type: String
    },
    leaderSelect:{
      required: true,
      type: Boolean
    },
    comment:{
      required: true,
      type: Object
    },
    leader:{
      required: true,
      // type: Array
    },
    current:{
      required: true,
      type: Object
    }
  },
  computed:{
    comment_keys(){
      // return Object.keys(this.comment)
      let sortList = [
        '学工办主任、团委书记组',
        '3年以上辅导员1组',
        '3年以上辅导员2组',
        '2021年入职人员',
        '2022年入职人员',
        '学工部机关辅导员',
        '学工部教辅辅导员',
        '团委机关辅导员',
        '团委教辅辅导员',
      ]

      return Object.keys(this.comment).sort((a,b)=>{
        return sortList.indexOf(a) - sortList.indexOf(b);
      })
      // 此处改顺序
    },
    comment_values(){
      return Object.values(this.comment)
    },
    per(){
      return (this.per_0 / this.per_1)*100;
    },
    per_0(){
      let n = 0;
      this.comment_values.forEach(element => {
        if(!element) n++;
      });
      if(this.current.isLeader){
        if(!this.leader) n++;
      }
      return n;
    },
    per_1(){
      if(this.current.isLeader){
        return this.comment_values.length+1;
      }else{
        
      return this.comment_values.length;
      }
    }
  },
  data() {
    return {
      state: false,
    };
  },
  watch:{
     
  },
  methods: {
    clickFn(op, key){
      if(op){
        if(!this.leader){
          ElMessage.warning('已完成该测评')
          return
        }
      }else{
        if(!this.comment[key]){
          ElMessage.warning('已完成该测评')
          return
        }
      }
      this.$emit('selectFn', {
        op:op,
        key:key
      })
    }
  },
};
</script>

<style scoped>
.navpop{
  box-shadow: 0 0 16px rgba(0,0,0,0.03);
  background-color: #fff;
  border-radius: 14px;
  overflow: hidden;
  transition: .3s;
  height: 400px;
  width: 85%;
  position: relative;
}
.stateOn{
  height: 236px;
}
.show0{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding: 0 20px;
}
.title{
  padding: 16px 0;
  color: rgb(136, 159, 180);
  font-size: 19px;
}
.listBox{
  padding-right: 10px;
  overflow: overlay;
  margin-bottom: 20px;
  flex: 1;
  width: 100%;
}
.listBox::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
}
.navItem{
  padding: 0 9px;
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  font-size: 15px;
  transition: .26s;
  border-radius: 6px;
  cursor: pointer;
  color: rgba(68, 86, 106, 0.9);
}
.navItem:hover{
  background-color: rgba(148,171,192,0.06);
}
.navItem:active{
  background-color: rgba(0,0,0,0.05);
}
.item_active{
  color: rgb(0,161,233);
  background-color: rgb(148,171,192,.08) !important;
}
.item_active .right-er{
  color: rgb(0,161,233);
}
.left-er{
  flex: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-right: 20px;
}
.right-er{
  color: rgba(101, 116, 130, 0.5);
  font-size: 14px;
  user-select: none;
}
.finish{
  color: rgb(50, 215, 160);
  font-size: 16px;
}
.show1{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.proDotBox{
  height: 140px;
  width: 140px;
}
.info{
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 50px;
  font-size: 24px;
  color: rgb(130, 151, 172);
}

</style>