<template>
  <div class="my">
    <div class="conent">
      <div class="user-box">
        <div class="user-info">
          <div class="user-head">
            <img
              :src="userheard"
              alt=""
            />
          </div>
          <div class="rf">
            <div class="name">{{userName}}</div>
            <div class="dec">
              <span>{{teamName}}</span>
              <span class="cut">切换</span>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="cell-title">
          <div class="cell-ico">
            <img
              src="http://static.jdip.cn/allowance/images/my/nav1.png"
              alt=""
            />
          </div>
          <div class="titles">我的推荐</div>
        </div>
        <div class="item-jiantou">></div>
      </div>
      <div class="item">
        <div class="cell-title">
          <div class="cell-ico">
            <img
              src="http://static.jdip.cn/allowance/images/my/nav3.png"
              alt=""
            />
          </div>
          <div class="titles">升级公告</div>
        </div>
        <div class="item-jiantou">></div>
      </div>
      <div class="item">
        <div class="cell-title">
          <div class="cell-ico">
            <img
              src="http://static.jdip.cn/allowance/images/my/nav4.png"
              alt=""
            />
          </div>
          <div class="titles">关于流量宝</div>
        </div>
        <div class="item-jiantou">></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userheard: "",
      userName:" ",
      teamName:" ",
    };
  },
  created() {
    let that = this;
    console.log("66");
    window.$.ajax({
      url: "https://uat-saas.jdip.cn/api/agent.user/info?_t=1611222898",
      type: "GET",
      headers: {
        Token: "30b816c83d66ab6f55761e82430f2a7d", //这里是Token
      },
      success: function (data) {
        console.log(data.data.avatar);
        that.userheard = data.data.avatar;
        that.userName=data.data.name
        that.teamName=data.data.service_team.team_name
      },
      error: function (e) {
        console.log(e);
      },
    });
  },
};
</script>
<style lang="less" scoped>
@import "./my.less";
</style>
