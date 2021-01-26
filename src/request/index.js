const app_base_url = "https://uat-saas.jdip.cn";
const getToken = () => window.localStorage.token
/**
 * @description 请求方法
 * @param { Object } params
 */
const https_ajax = function (params = {
    url: "", // /api/agent.statistics/index
    methods: "", // post
    data: {},// { field: ['balance', 'commission', 'cumulative', time_type: 0],  }
    success: function () {},
    error: function () {},
}) {
    const token = getToken() // 30b816c83d66ab6f55761e82430f2a7d
    window.$.ajax({
        url: app_base_url + params.url, // 请求地址 'https://uat-saas.jdip.cn' + '/api/agent.statistics/index'
        type: params.methods, // 请求类型 post
        headers: {
            token, // 令牌 30b816c83d66ab6f55761e82430f2a7d
        },
        data: params.data, // 请求参数 { field: ['balance', 'commission', 'cumulative', time_type: 0],  }
        success: function (data) {
            params.success && params.success(data)
        },
        error: function (err) {
            params.error && params.error(err);
        },
    });
}

export default https_ajax