<template>
    <div class="header">
       <div class="header-logo">
           <img class="logo-img" src="../../../assets/images/logo.jpg">
       </div>
       <div class="header-list">
           <ul   class="list">
               <router-link tag="li" :to='item.router' v-for="(item, index) of list" :key="item.id" class="list-item">
                    <span 
                        :class="{'hoverBtm':index==hoverIndex}"
                        @mouseover="hoverIndex = index"
                        @mouseout="hoverIndex = -1"
                    >
                        {{item.title}}
                    </span>
                <dl 
                    v-show="index==showList" 
                    v-if="exist(item)" 
                    class="hoverList"
                >
                    <div >
                        <dd 
                            v-for="(item, index) of item.list" 
                            :key="index" class="hoverList-item"
                        >{{item}}
                            </dd>
                    </div>
                </dl>
                </router-link>
                
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
                'title': '首页',
                'list':[],
                'router':'/'
                
            },{
                'id':'2',
                'title': '使用情况',
                'list':['当前使用情况','当日使用情况','当月使用用情况'],
                'router':'/#'
            },{
                'id':'3',
                'title': '功能',
                'list':['当前使用情况','当日使用情况','当月使用情况'],
                'router':'#function'
            },{
                'id':'4',
                'title': '个人中心',
                'list':['当前使用情况','当日使用情况','当月使用情况'],
                'router':'/center'
            }],
            hoverIndex: -1
        }
    },
    methods: {
        exist(el){
            if(el.list.length==0)
            {
                return false
            }
            else return true
        },
        showList(){
            if(hoverIndex!=-1){
                document.getElementById()
            }
        }
    }   
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        z-index 40
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
            .list-item
                position relative
                display inline-block
                float left
                width 20%
                margin-right 20px
                cursor pointer
                textStyle()
            .hoverList
                position absolute
                display inline
                z-index 99
                width 120px
                padding 15px 20px 20px 20px
                font-weight 300
                top 60px
                left -1px
                background-color rgba(255,255,255,0.90)
                .hoverList-item
                    height 25px
                    line-height 25px
                    text-align left
                    margin-bottom 10px
                    width 100%
                    textStyle()
            .hoverBtm
                color #000
                border-bottom 1px solid $bgColor
                padding 10px 0
    .header-login
        width 100px
            
</style>
