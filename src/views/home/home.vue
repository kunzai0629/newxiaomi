<template>
  <div class="home">
    <div class="add-window" :class="{ windowactive: addWindow }">
      <div class="other">其它操作</div>
      <div class="tabars-conent">
        <div class="conent-items">
          <div class="item-box" @click="deploy">
            <div class="item-img"><img src="http://static.jdip.cn/allowance/images/index/tab/bushu.png" alt=""></div>
            <div class="item-txt" >部署管理</div>
          </div>
        </div>
        <div class="conent-items">
          <div class="item-box">
            <div class="item-img"><img src="http://static.jdip.cn/allowance/images/index/tab/tuij.png" alt=""></div>
            <div class="item-txt">推荐管理</div>
          </div>
        </div>
        <div class="conent-items">
          <div class="item-box">
            <div class="item-img"><img src="http://static.jdip.cn/allowance/images/index/tab/my.png" alt=""></div>
            <div class="item-txt">个人中心</div>
          </div>
        </div>
      </div>
    </div>
    <div class="add-null" v-if="addNull" @click="nullHide"></div>
    <div class="header">
      <!-- 菜单栏 - 后台管理 -->
      <div class="home-top">
        <img
          class="home-top-company"
          src="http://static.jdip.cn/allowance/images/index/corpname.png"
        />
        <img
          class="home-top-tabint"
          @click="addwindow"
          src="http://static.jdip.cn/allowance/images/index/tabhint.png"
        />
      </div>
      <!-- 视频 -->
      <div class="homeitem-v">
        <video
          data-v-1a577d9e=""
          id="home-video"
          controls="controls"
          webkit-playsinline="true"
          playsinline="true"
          x-webkit-airplay="allow"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="true"
          x5-video-orientation="portraint"
          poster="http://static.jdip.cn/allowance/images/index/banner.png"
          src="http://static.jdip.cn/allowance/video/liuliangbaoVideo.mp4?a=1"
          class="menu1"
          style="object-fit: fill"
        ></video>
      </div>
    </div>

    <div class="conclass">
      <homecom>
        <homeson>
          <template #text>
            <div @click="activeCilck1" :class="{ active: active }">产品介绍</div>
          </template>
        </homeson>
        <homeson>
          <template #text>
            <div @click="activeCilck2" :class="{ active: !active }">
              成为合伙人
            </div>
          </template>
        </homeson>
      </homecom>
    </div>
    <router-view />
    <div class="pruImg" v-if="active">
      <div v-for="(item, index) in introduceImg" :key="index">
        <img :src="item" alt="" class="pruImg-img" />
      </div>
    </div>
    <div class="joinImg" v-if="!active">
      <div v-for="(item, index) in partnerImg" :key="index">
        <img :src="item" alt="" class="joinImg-img" />
      </div>
    </div>

    <div class="liuliangbao" @click="openLlb" v-if="openButton"><span>开通流量宝</span></div>
    <div class="liuliangbao"  v-if="joinButton"><span>成为合伙人</span></div> 
  </div>
</template>
<script>
import homecom from "../../components/modules/home/home";
import homeson from "../../components/modules/home/homeson";

export default {
  components: {
    homecom,
    homeson,
  },
  data() {
    return {
      introduceImg: [
        "http://static.jdip.cn/allowance/images/index/1.png?v=1",
        "http://static.jdip.cn/allowance/images/index/2.png?v=1",
        "http://static.jdip.cn/allowance/images/index/3.png?v=2",
        "http://static.jdip.cn/allowance/images/index/4.png?v=1",
        "http://static.jdip.cn/allowance/images/index/5.png?v=1",
        "http://static.jdip.cn/allowance/images/index/6.png?v=1",
        "http://static.jdip.cn/allowance/images/index/7.png?v=1",
      ],
      partnerImg: [
        "http://static.jdip.cn/allowance/images/index/tow_menu/menu1.png?v=1",
        "http://static.jdip.cn/allowance/images/index/tow_menu/menu2.png?v=1",
        "http://static.jdip.cn/allowance/images/index/tow_menu/menu3.png?v=1",
      ],
      active: true,
      addWindow: false,
      addNull: false,
      openButton:true,
      joinButton:false
    };
  },
  methods: {
    activeCilck1() {
      this.active = !this.active;
      this.openButton=true,
      this.joinButton=false
    },
        activeCilck2() {
      this.active = !this.active;
 this.openButton=false,
      this.joinButton=true
    },
    openLlb() {
      this.$router.push("/homeChild");
    },
    addwindow() {
      this.addWindow = !this.addWindow;
      this.addNull = !this.addNull;
    },
    nullHide() {
      this.addWindow = !this.addWindow;
      this.addNull = !this.addNull;
    },
    deploy(){
      this.$router.push("/admin")
    }
  },
};
</script>
<style lang="less" scoped>
@import "./home.less";
</style>