<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
           <swiper :options="swiperOptions" ref="mySwiper">
                <swiper-slide>
                    <img class="gallary-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551430326755&di=3f967519fb0d84a2d4959ebce99bb997&imgtype=0&src=http%3A%2F%2Fac-q.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F975%2F97582115.jpg"/>
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        paginationClickable: true,
        observer: true,
        mousewheelControl : true,
        observeParents: true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next'
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    justify-content center
    z-index 99
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    margin auto 
    background rgba(0,0,0,.8)
    .wrapper
      height 0
      width 100%
      padding-bottom 100%
      .gallary-img
        width 100%
      .swiper-pagination
        font-size 28px
        color #fff
        bottom 1rem
</style>
