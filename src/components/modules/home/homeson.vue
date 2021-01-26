<template>
  <div class="homeson">
    <slot name="text"></slot>
  </div>
</template>
<script>
export default {
  name: "homeson",
  components: {},
  data() {
    return {
      userId: "zhuokun",
    };
  },
};
</script>
<style >
.homeson {
  width: 180px;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  color: #646566;
  text-align: center;
}
</style>
