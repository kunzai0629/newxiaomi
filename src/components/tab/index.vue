<template>
    <div class="tab">
        <div class="list" :class="{'active': $route.path == item.path }" v-for="(item,index) in tablist" :key="index" @click="toPath(item.path)">
            <i class="iconfont" :class="item.icon"></i>
            <div>{{item.name}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tablist:[
                {
                    name:'首页',
                    icon:'iconhtmal5icon06',
                    path:'/home',
                },
                {
                    name:'管理',
                    icon:'iconhtmal5icon06',
                    path:'/admin',
                },
                {
                    name:'我的',
                    icon:'iconhtmal5icon06',
                    path:'/my',
                }
            ]
        }
    },
    created(){
        console.log(this.$route)
    },
    methods:{
        toPath(path){
            this.$router.replace(path)
        }
    }
}
</script>
<style lang="less" scoped>
.tab{
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    text-align: center;
    background: #fff;
    width: 100%;
    .list{
        flex: 1;
    }
    .active{
        color: red;
    }
}
</style>