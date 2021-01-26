<template>
  <div class="productAndJoin">
  <slot></slot>
  </div>
</template>
<script>
export default {
  name: "homecom",
  components: {},
  data() {
    return {
      
    };
  },
};
</script>
<style >
.productAndJoin {
  display: flex;
  justify-content: space-around;
  width:375px ;
  height: 44px;
}
/* .productAndJoin-slider{
    position: absolute;
    content: " ";
    width: 40px;
    height: 3px;
    background-color: rgb(2, 74, 230);
    transform: translateX(94px);
    bottom: 4px;  
} */
</style>

