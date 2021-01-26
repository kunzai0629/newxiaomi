<template>
    <div id="tab-bar">
        <!-- <div class="tabar-item">
            <img src="../../assets/img/tabbar/home.png" alt="">
            <div>首页</div>
        </div>
        <div class="tabar-item">
            <img src="../../assets/img/tabbar/class.png" alt="">
            <div>分类</div>
        </div>
                <div class="tabar-item">
            <img src="../../assets/img/tabbar/cart.png" alt="">
            <div>购物车</div>
        </div>
            <div class="tabar-item">
            <img src="../../assets/img/tabbar/my.png" alt="">
            <div>我的</div>
        </div> -->
        <slot></slot>
    </div>
</template>
<style>
#tab-bar{
    display: flex;
     background-color: #f6f6f6;
     position: fixed;
     bottom: 0;
     left: 0;
     right: 0;
     z-index: 999;
     box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}
</style>
<script>

// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'TabBar',
  components: {
      
  }
}
</script>