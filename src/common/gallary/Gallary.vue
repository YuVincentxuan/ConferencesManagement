<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
           <swiper :options="swiperOptions" ref="mySwiper">
                <swiper-slide v-for="(item, index) of list" :key="index">
                    <img class="gallary-img" :src="item.img"/>
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props:{
    list:Array
  },
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
      console.log(this.list)
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
        width 100vw
        height  100vh
      .swiper-pagination
        font-size 28px
        color #fff
        bottom 1rem
</style>
