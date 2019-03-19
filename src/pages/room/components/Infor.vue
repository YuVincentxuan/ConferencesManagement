<template>
    <div class="content">
        <div class="back" @click="handleBannerClick">
            <img class="pos-ab back-img" :src="list">
            <div class="pos-ab black">   
            </div>
            <div class="room-infor text-white">
                <span class="room-name">一号会议室</span>
                <div class="ifUsePo">
                    <span class="ifUse">
                        <span class="points green"></span>可使用
                    </span>
                    <div class="img-number text-white">
                        <span class="iconfont icon-img">&#xe692;</span>1
                    </div>
                </div>
            </div>
            
        </div>
        <common-gallary
            v-show="showGallary"
            @close="handleGallaryClose"
            :list="list"
        >
        </common-gallary>
        <room-reservation :list="listData"></room-reservation>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import RoomReservation from './Reservation'
export default {
    name: 'RoomInfor',
    props:{
        list:'',
        listData:Object
    },
    data () {
        return{
            showGallary: false,
        }
},
    components: {
        CommonGallary,
        RoomReservation
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
    },
        handleGallaryClose () {
            this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .content
        padding 61px 100px 0px 100px
        .back
            position fixed
            z-index 20
            left 10%
            right 10%
            .back-img
                width 100%
                height 600px
            .black
                display flex
                position absolute
                width 100%
                height 500px
                bottom 0
                top 100px      
                background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))  
            .text-white
                color white
            .room-infor
                position absolute
                width 100%;
                top 530px
                .room-name
                    padding 0 25px
                    font-size 50px
                .ifUsePo
                    float right
                    padding 0 25px
                    font-size 20px
                    line-height 30px
                    text-align center
                    .ifUse
                        height 30px
                        width 100px
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
                    .img-number
                        margin-top 5px
                        height 30px
                        width 100px
                        line-height 30px
                        text-align center
                        color $bgColor
                        background-color rgba(255,255,255,.8)
                        border-radius 10px
                        .icon-img
                            margin-right 10px
                            font-size 20px
</style>
