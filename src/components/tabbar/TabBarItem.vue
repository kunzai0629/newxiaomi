<template>
        <div class="tabbar-item" @click="itemClick">
            <slot v-if="!isActive" name="item-icon"></slot>
            <slot v-else name="item-icon-active"></slot>
            <div :style="activeStyle"> <slot  name="item-text"></slot></div>   
        </div>
</template>
<style>
.tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 10px;
}
.tabbar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
}
.tabbar-item i{
  font-size: 25px;
}
/* .active{
    color: pink;
} */
</style>
<script>

export default {
   name:'TabBarItem', 
   computed:{
     isActive(){
       //判断当前活动的路由路径是否是当前路径，如果值为false就不显示
       return this.$route.path.indexOf(this.path)!==-1
     },
     activeStyle(){
       //如果isActive条件存在 给style添加文字样式
       return this.isActive?{color:this.activeColor} : {}
     }
   },
  components: {  },
  props:{
    //接受父组件传过来的路径
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  data(){
    return{
      // isActive:true
    }
  },

  methods:{
    itemClick(){
      //获取整个路由 给路由增加当前路径
      this.$router.replace(this.path)
      console.log("enen.");
    }
  }
}
</script>