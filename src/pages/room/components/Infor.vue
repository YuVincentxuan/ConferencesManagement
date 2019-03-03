<template>
    <div class="content">
        <div class="back" @click="handleBannerClick">
            <img class="pos-ab back-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551430326755&di=3f967519fb0d84a2d4959ebce99bb997&imgtype=0&src=http%3A%2F%2Fac-q.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F975%2F97582115.jpg">
            <div class="pos-ab black">

            </div>
        </div>
        <common-gallary
            v-show="showGallary"
            @close="handleGallaryClose"
        >
        </common-gallary>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'HomeInfor',
    data () {
        return{
            showGallary: true
        }
},
    components: {
        CommonGallary
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
        padding 61px 100px 150px 100px
        .back
            position relative
            width 100%
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
</style>
