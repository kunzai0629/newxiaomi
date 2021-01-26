<template>
  <div class="openLlb">
    <div class="van-form">
      <div class="form-item">
        <div class="item-lf"><span>权益归属：</span></div>
        <div class="item-rf">
          <div class="rf-box">
            <div class="rf-name">
              <input
                type="text"
                placeholder="公司名称"
                readonly="true"
                value="深圳迷失岛科技有限公司"
              />
            </div>
            <div class="rf-update"><span>更换</span><span>></span></div>
          </div>
        </div>
      </div>
      <div class="form-item">
        <div class="item-lf"><span>企业全称：</span></div>
        <div class="item-rf">
          <div class="rf-box">
            <div class="rf-name">
              <input type="text" placeholder="请输入需要开通的企业全称" />
            </div>
          </div>
        </div>
      </div>
      <div class="info-title">联系信息</div>
      <div class="form-item">
        <div class="item-lf"><span>姓名：</span></div>
        <div class="item-rf">
          <div class="rf-box">
            <div class="rf-name">
              <input type="text" placeholder="请输入需要开通的企业全称" value="郑志泓" readonly="true"/>
            </div>
          </div>
        </div>
      </div>
      <div class="form-item">
        <div class="item-lf"><span>手机号：</span></div>
        <div class="item-rf">
          <div class="rf-box">
            <div class="rf-name">
              <input type="text" placeholder="请输入需要开通的企业全称" value="1234567895" readonly="true"/>
            </div>
          </div>
        </div>
      </div>
      <div class="check-box" @click="consent">
          <div class="check-icon" ></div>
          <span class="check-txt">开通表示同意<a>《服务协议》</a>请点击阅读</span>
      </div>
      <div class="open-button">
          <span>￥2000.00/年</span><span>立即开通</span>
      </div>
    </div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
@import "./homeChild.less";
</style>