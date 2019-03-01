<template>
    <div class="content">
        <div class="title">
            <h2>当前会议室使用情况</h2>
            <span class="border-bottom"></span>
        </div>
        <div
            class="content-item"
            @mouseover="hoverIndex = index, handleMouserover"
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
                    <span class="ifUse"><span :class="{'points':1,'green':item.useable,'red':!item.useable}"></span>{{ifUseable(item.useable)}}</span>
                    <div class="item item-face">
                        <input class="showBtn" v-show="index==hoverIndex" type="button" :value="showValue(item.useable)">
                    </div>
                    
                </div>
                
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
export default {
    name: 'HomeDetail',
    data () {
        return {
            list: [{
                'id':'1',
                'title':'一号会议室',
                'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551368481865&di=3c1e7743fb46b83eadc571874829a7d6&imgtype=0&src=http%3A%2F%2Fac-q.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F753%2F75366210.jpg',
                'useable':1,
            },{
                'id':'2',
                'title':'二号会议室',
                'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551429207286&di=5d5b1b69a6a591bfae8c549a9146debb&imgtype=0&src=http%3A%2F%2Fp.zhuna.cn%2FHotel_Images%2F39208%2F538387a8-272a-4830-b378-8ddfefefeb38.png',
                'useable':1
            },{
                'id':'3',
                'title':'三号会议室',
                'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551430326758&di=9616b73c74fef90cc26d60468dd12203&imgtype=0&src=http%3A%2F%2Fac-r.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F265%2F26559484.jpg',
                'useable':0

            },{
                'id':'4',
                'title':'四号会议室',
                'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551430326755&di=3f967519fb0d84a2d4959ebce99bb997&imgtype=0&src=http%3A%2F%2Fac-q.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F975%2F97582115.jpg',
                'useable':1

            },{
                'id':'5',
                'title':'五号会议室',
                'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551429003243&di=bce6ea2bdd560b0e4842c695832c3445&imgtype=0&src=http%3A%2F%2Fbig5.eastu.com%2Fhotelpic%2F9580_07.jpg',
                'useable':1

            },{
                'id':'6',
                'title':'六号会议室',
                'img':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551429137571&di=a7f30118a89c574ead52ea4ec1afce0f&imgtype=0&src=http%3A%2F%2Fwww.kecc.com.tw%2Fimages%2Fvenue%2Flargeimages%2FConference%2F302e%2F1.jpg',
                'useable':1

            }],
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
            border 1px solid $bgColor
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
