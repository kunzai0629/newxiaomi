<template>
  <div id="nav">
    <tab></tab>
    dade dede de de de 
  </div>
  <router-view />
</template>
<script>
import tab from "./components/tab/index.vue";
export default {
  name: "App",
  components: {
    tab,
  },
  created(){
    console.log(window.$)
  }
};
</script>
<style>
@import'//at.alicdn.com/t/font_2334020_0jlpe5ad2qx8.css';
@import'//at.alicdn.com/t/font_2334020_fzahmfb3miw.css';
@import'//at.alicdn.com/t/font_2334020_ablonsz3uik.css';
@import '~@/less/common.less' 
</style>
