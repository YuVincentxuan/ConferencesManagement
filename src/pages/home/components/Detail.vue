<template>
    <div class="content">
        <div class="title">
            <h2>功能选择</h2>
            <span class="border-bottom"></span>
        </div>
        <div
            :class="{'hoverBg':index==hoverIndex,'content-item':1}"
            @mouseover="hoverIndex = index"
            @mouseout="hoverIndex = -1"
            v-for="(item, index) of list"
            :key="item.id"
        >
            <div class="item">
                <span class="iconfont iconfont-item" v-html="item.font">{{item.font}}</span><br>
                <span class="item-desc">{{item.title}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HomeDetail',
    data () {
        return {
            list: [{
                'id':'1',
                'font':'&#xeb9c;',
                'title':'会议室查询'
            },{
                'id':'2',
                'font':'&#xeba2;',
                'title':'会议室预定'
            },{
                'id':'3',
                'font':'&#xeb99;',
                'title':'会议室修改'
            }],
            hoverIndex: -1
        }
    } 
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .content
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
            float left
            height 200px
            width 33.33%
            text-align center
            .item
                position relative
                top 50px
                .iconfont-item
                    font-size 50px
                    color $bgColor
                .item-desc
                    position relative
                    top 5px
                    font-size 22px
        .hoverBg
            background #eee
            border-bottom 3px solid $bgColor
            cursor pointer
</style>
