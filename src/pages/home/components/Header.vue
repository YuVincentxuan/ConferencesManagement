<template>
    <div class="header">
       <div class="header-logo">
           <img class="logo-img" src="../../../assets/images/logo.jpg">
       </div>
       <div class="header-list">
           <ul class="list">
               <li class="list-item">首页</li>
               <li class="list-item">信息查询</li>
               <li class="list-item">会议室预定</li>
           </ul>
       </div>
       <div class="header-login">
           <span>登录</span>
           <span>|</span>
           <span>注册</span>
       </div>
    </div>
</template>
<script>
export default {
    name: 'HomeHeader',   
}
</script>
<style lang="stylus" scoped>
    .header
        z-index 2 
        position fixed
        display flex
        height 60px
        width 100%
        padding 0 50px
        line-height 60px
        background-color #fff
        border-bottom 1px solid #ccc
        text-align  center 

    .header-logo
        width 200px
        float left
        .logo-img
            height 55px
    .header-list
        flex .8
        .list
            position relative
            .list-item
                float left
                width 20%
                margin-right 20px
                cursor pointer
                font-size 16px  
    .header-login
        width 100px
</style>
