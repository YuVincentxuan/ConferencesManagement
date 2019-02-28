<template>
    <div class="header">
       <div class="header-logo">
           <img class="logo-img" src="../../../assets/images/logo.jpg">
       </div>
       <div class="header-list">
           <ul v-for="(item, index) of list" :key="item.id" class="list">
               <li class="list-item">
                <span 
                    :class="{'hoverBtm':index==hoverIndex}"
                    @mouseover="hoverIndex = index"
                    @mouseout="hoverIndex = -1"
                >
                    {{item.title}}
                </span>
                </li>
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
    data () {
        return {
            list: [{
                'id':'1',
                'title': '首页'
            },{
                'id':'2',
                'title': '功能'
            },{
                'id':'3',
                'title': '使用情况'
            }],
            hoverIndex: -1
        }
    }   
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
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
            .hoverBtm
                color #000
                border-bottom 1px solid $bgColor
                padding 10px 0
    .header-login
        width 100px
            
</style>
