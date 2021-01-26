<template>
  <div class="admin">
    <div class="admin-box">
      <div
        class="adminItem"
        :class="{ adminactive: adminactive == 0 }"
        @click="toggleTable(0)"
      >
        部署管理
      </div>
      <div
        class="adminItem"
        :class="{ adminactive: adminactive == 1 }"
        @click="toggleTable(1)"
      >
        推荐管理
      </div>
    </div>
    <div class="deploy" v-if="adminactive == 0">
      <div class="header">
        <div class="header-content">
          <div class="title">操作教程</div>
          <div class="item-box">
            <div class="depItem">
              <img
                src="http://static.jdip.cn/allowance/images/admin/menu1.png"
              />
              <div>部署教程</div>
            </div>
            <div class="depItem">
              <img
                src="http://static.jdip.cn/allowance/images/admin/shiping.png"
              />
              <div>操作视频</div>
            </div>
            <div class="depItem">
              <img
                src="http://static.jdip.cn/allowance/images/admin/shouce.png"
              />
              <div>操作手册</div>
            </div>
          </div>
        </div>
      </div>
      <div class="set-content">
        <div class="qiye-box">
          <div class="shoping">我购买部署过的企业</div>
          <div class="add" @click="openLlb">+新开企业</div>
        </div>
        <div class="conmany-box" v-for="(item, index) in company" :key="index">
          <div class="top">
            <div class="lf">
              <img
                src="http://static.jdip.cn/allowance/images/admin/corp-demo.png"
                alt=""
              />
            </div>
            <div class="rf">
              <div class="company-content">
                <div class="company-name">{{ item.company_name }}</div>
                <div>
                  <span>系统状态：</span
                  ><span>{{ item.deploy_state.text }}</span>
                </div>
                <div>
                  <span>套餐到期时间：</span
                  ><span>{{ item.service_time }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="bottomtext">{{ item.deploy_state.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend" v-if="adminactive == 1">
      <div class="header">
        <div class="top">
          <div class="company-title">团队名称</div>
          <div class="conpany-describe">
            <div class="company-name">{{ teamName }}</div>
            <div class="update">修改</div>
          </div>
        </div>
        <div class="bottom">
          <div class="lf">
            <div class="money-top">
              <div class="pay">佣金（元）</div>
              <div class="addUp" @click="OpenAppUp">
                <span
                  ><div class="addUp-title">{{ optionName }}</div></span
                >
              </div>
            </div>
            <div class="money-bottom">{{ commission }}</div>
          </div>
          <div class="rf">
            <div class="money-top">余额（元）</div>
            <div class="money-bottom">{{ balance }}</div>
          </div>
        </div>
      </div>
      <div class="recommend-menu-box">
        <div class="item">
          <div class="itemImg">
            <img
              src="http://static.jdip.cn/allowance/images/admin/menu4.png"
              alt=""
            />
          </div>
          <div class="itemText">成员管理</div>
        </div>
      </div>
      <div class="recommend-content">
        <div class="recommend-data-box">
          <div class="dataItem">
            <img
              src="http://static.jdip.cn/allowance/images/admin/nav1.png"
              alt=""
            />
          </div>
          <div class="dataItem">
            <img
              src="http://static.jdip.cn/allowance/images/admin/nav2.png"
              alt=""
            />
          </div>
        </div>
        <div class="data-form">
          <div class="data-form-tr">
            <div class="one">客户类型</div>
            <div class="two">奖励标准</div>
            <div class="three">推荐数量</div>
            <div class="four">获得佣金</div>
          </div>
          <div
            class="data-form-td"
            v-for="(item, index) in cumulative"
            :key="index"
          >
            <div class="one">{{ item.title }}</div>
            <div class="two">{{ item.reward_amount }}</div>
            <div class="three">{{ item.total_count }}</div>
            <div class="four">{{ item.total_commission }}</div>
          </div>
        </div>
        <button class="van-bottom" @click="inviteCilck">
          <span>邀</span>
          <span>请</span>
        </button>
        <div class="recommend-hint">
          通过任一页面分享均可邀请，以推荐对象付款为准
        </div>
      </div>
    </div>
    <div v-if="shareShow" class="sharepage" @click="inviteCilck">
      <img
        src="http://static.jdip.cn/h5-redpacket/images/share-hint.jpg"
        alt=""
      />
    </div>
    <div class="appUp-pop" v-if="AppUpShow" @click="AppUpShow = false"></div>
    <div
      class="AppUpShow"
      :class="{ AppUpShowActive: AppUpShow }"
    >
      <div
        class="item"
        v-for="item in timeOption"
        :key="item.val"
        @click="optionSelect(item)"
        :class="{ optionSelectActive: optionSelectActive == item.val }"
      >
        <div>{{ item.name }}</div>
        <i class="iconfont icongou"></i>
      </div>
    </div>
  </div>
</template>
<script >
import https_ajax from "../../request/index";

export default {
  data() {
    return {
      adminactive: 0,
      teamName: "",
      deloy: false,
      shareShow: false,
      AppUpShow: false, // 时间浮层
      optionSelectActive: 0,
      optionName: "累计",
      type: 0,
      commission: "", //佣金
      balance: "", //余额
      cumulative: [],
      company: [],
      timeOption: [
        {
          name: "累计",
          val: 0,
        },
        {
          name: "今日",
          val: 1,
        },
        {
          name: "昨日",
          val: 2,
        },
        {
          name: "当月",
          val: 3,
        },
        {
          name: "今年",
          val: 4,
        },
      ],
    };
  },
  created() {
    // 获取企业列表
    this.getCorpList();
  },
  methods: {
    // 获取企业列表
    getCorpList() {
      https_ajax({
        url: "/api/agent.company/index",
        methods: "get",
        data: {},
        success: (data) => {
          if (data.code == 1) {
            this.company = data.data;
          } else {
            alert("数据——异常");
          }
        },
        error: function () {},
      });
    },
    // 获取团队信息
    getSteamInfo() {
      https_ajax({
        url: "/api/agent.service_team/info",
        methods: "get",
        data: {},
        success: (data) => {
          if (data.code == 1) {
            this.teamName = data.data.team_name;
          } else {
            alert("数据异常");
          }
        },
        error() {},
      });
    },
    // 获取团队佣金
    getSteamMoneyInfo() {
      https_ajax({
        url: "/api/agent.statistics/index",
        methods: "get",
        data: {
          field: ["balance", "commission", "cumulative"],
          time_type: this.optionSelectActive,
        },
        success:(data) => {
          if (data.code == 1) {
            this.commission = data.data.commission;
            this.balance = data.data.balance;
          } else {
            alert("数据异常");
          }
        },
        error() {},
      });
    },
    // 切换table
    toggleTable(val){
      this.adminactive = val
      // 部署管理
      if(val === 0){
        this.getCorpList()
      }
      // 推荐管理
      else{
        this.getSteamInfo()
        this.getSteamMoneyInfo()
      }
    },
    // 选择时间
    optionSelect(item){
      this.optionSelectActive = item.val;
      this.optionName = item.name;
      this.getSteamMoneyInfo()
      setTimeout(function () {
        this.AppUpShow = false;
      }, 300);
    },
    // 显示分享
    inviteCilck() {
      this.shareShow = !this.shareShow;
    },
    // 打开时间浮层
    OpenAppUp() {
      this.AppUpShow = !this.AppUpShow;
    },
    // 跳转加入留量宝
    openLlb() {
      this.$router.push("/homeChild");
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../less/admin.less";
</style>
