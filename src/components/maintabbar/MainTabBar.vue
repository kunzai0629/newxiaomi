<template>
        <TabBar>
      <tab-bar-item path="home" activeColor="blue">
        <template #item-icon >
          <i class="iconfont iconhtmal5icon06"></i>
        </template>
         <template #item-icon-active>
          <i class="iconfont iconzhuye"></i>
        </template>
        <template #item-text>
          <div>主页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="admin" activeColor="blue">
        <template #item-icon>
          <img src="../../assets/img/tabbar/class.png" alt="加载失败" />
        </template>
        <template #item-icon-active>
          <img src="../../assets/img/tabbar/class_active.png" alt="加载失败" />
        </template>
        <template #item-text>
          <div>管理</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="my" activeColor="blue">
        <template #item-icon>
          <img src="../../assets/img/tabbar/my.png" alt="加载失败" />
        </template>
        <template #item-icon-active>
          <img src="../../assets/img/tabbar/my_active.png" alt="加载失败" />
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </TabBar>
</template>
<style>

</style>
<script>
import TabBar from "../tabbar/TabBar.vue";
import TabBarItem from "../tabbar/TabBarItem.vue";
export default {
  components: { 
      TabBar, 
    TabBarItem },
};
</script>
