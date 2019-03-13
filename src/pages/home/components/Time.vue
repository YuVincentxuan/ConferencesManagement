<template>
    <div class="content">
        <div class="title">
            <h2>当前会议室使用情况</h2>
            <span class="border-bottom"></span>
        </div>
        <div
            class="content-item"
            @mouseover="hoverIndex = index"
            @mouseout="hoverIndex = -1"
            v-for="(item, index) of list"
            :key="item.id"
        >
                <div class="item">
                   
                    <img class="item-img"  :src="item.img">
                </div>
                <div class="item item-black"></div>
                 
                <div class="item item-face">
                    <span class="iconfont iconfont-item">&#xe60a;</span><br>
                    <span class="item-desc">{{item.title}}</span>
                    <span class="ifUse">
                        <span :class="{'points':1,'green':item.useable,'red':!item.useable}"></span>
                        {{ifUseable(item.useable)}}
                    </span>
                    <div class="item item-face">
                        <router-link to='/room'>
                            <input class="showBtn" v-show="index==hoverIndex" type="button" :value="showValue(item.useable)">
                        </router-link>
                    </div>
                    
                </div>
                
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
export default {
    name: 'HomeDetail',
    props:{
        list: Array
    },
    data() {
        return {
             hoverIndex: -1,
        }
    },
        methods: {
            showValue(el){
                if(el==0){return "查看详情"}
                else return "预定"
            },
            ifUseable(el){
                if(el==0){return "使用中"}
                else return "空闲中"
            }
        }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .content
        padding 100px 100px 50px 100px
        .title
            text-align  center
         h2
            font-size 28px
            font-weight 600
            margin-bottom 10px
         .border-bottom
            position relative
            display block
            width 100px
            left 0
            right 0
            margin auto 
            margin-bottom 50px
            border-bottom 1px solid #000
        .content-item
            position relative
            float left
            height 200px
            width 46%
            margin 10px 20px
            text-align center
            background-color #eee
            border-radius 4px
            overflow hidden
            display flex
            align-items  center
            .item
                position absolute
                .item-img
                    width 100%
                .iconfont-item
                    display block
                    font-size 50px
                    color $bgColor
                .item-desc
                    display block
                    top 5px
                    font-size 22px
                .ifUse
                    position relative
                    float right
                    top -120px
                    margin-right 10px
                    .points
                        display inline-block
                        height 10px
                        width 10px
                        border-radius 5px
                        margin-right 10px
                    .green
                        background-color green
                    .red
                        background-color red
                .showBtn
                    margin-top 10px
                    height 25px
                    width 100px
                    border-radius 5px
                    color #fff
                    font-weight bold
                    cursor pointer  
                    background-color $bgColor
            .item-face
                width 100%
                color white
            .item-black
                height 200px
                width 100%
                background-color rgba(0,0,0,.4)
        .clear
            clear both
        .hoverBg  
            cursor pointer
</style>
