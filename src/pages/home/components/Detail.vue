<template>
    <div class="content">
        <div class="title">
            <h2>功能选择</h2>
            <span></span>
        </div>
        <div class="content-item" v-for="item of list" :key="item.id">
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
            }]
        }
    } 
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .content
        padding 100px
        .title
            text-align  center
         h2
            font-size 28px
            font-weight 600
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
</style>
