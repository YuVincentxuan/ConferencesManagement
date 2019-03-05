<template>
    <div class="content">
        <div >
            <div class="box">
                
            </div>
            <ul class="list">
                <div class="top-nav">
                    <div class="nav-item">
                        <span class="nav-title nav-item-title">筛选会议室</span>
                    </div>
                    <div class="nav-item">
                        <span class="nav-item-title">选择时间:</span>
                         <el-time-select
                            placeholder="起始时间"
                            v-model="startTime"
                            :picker-options="{
                            start: '00:00',
                            step: '01:00',
                            end: '23:30'
                            }">
                        </el-time-select>
                        <el-time-select
                            placeholder="结束时间"
                            v-model="endTime"
                            :picker-options="{
                            start: '00:00',
                            step: '01:00',
                            end: '23:00',
                            minTime: startTime
                            }">
                        </el-time-select>
                    </div>
                    <div class="nav-item">
                        <span class="nav-item-title" >选择会议室:</span>
                        <el-checkbox-group fill="rgb(159,15,19)" v-model="checkboxGroup1">
                            <el-checkbox-button  v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
                        </el-checkbox-group>
                    </div>
                    <div class="nav-item">
                        <span class="nav-item-title"></span>
                        <input class="showBtn" type="button" value="确定">
                    </div>
                  
                </div>
                <li 
                    v-for="(item,index) of list" 
                    :key="item.id" 
                    :class="{'list-item':1,'hover-style':index == hoverIndex}"
                    @mouseover="hoverIndex = index"
                    @mouseout="hoverIndex = -1"
                >
                    <div class="list-img">
                        <img class="list-item-img" :src="item.img"> 
                    </div>
                    <div class="list-text">
                        <div class="title">{{item.title}}</div>
                        <div class="room-desc">
                            一号会议室可以容纳30人左右，适用于小组开会
                        </div>
                    </div>
                    <div class="time-gray">
                        <span class="pos-ver">
                            <span class="pos-left">
                                <span class="iconfont iconfont-item">&#xeba2;</span>1月3日 15:00
                            </span>
                            <input class="showBtn" type="button" value="预定">
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
 const cityOptions = ['一号会议室', '二号会议室', '三号会议室', '四号会议室'];
export default {
    name: 'BookList',
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
            checkboxGroup1: ['一号会议室'],
            cities: cityOptions
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .content
        padding 61px 0 50px 0
        .box
            background-image linear-gradient(top, rgba(159,15,19,1) 5%, rgba(245, 245, 245, 0))
            height 350px
            width 100%
        .list
            position relative
            width 80%
            margin auto
            top -300px
            padding 0 7%
            .top-nav
                height 240px
                background-image linear-gradient(top, rgba(255,255,255,1) 20%, rgba(245, 245, 245, 0))
                border-top 3px solid #fff
                margin 0 1.2%
                .nav-item
                    height 50px
                    width 100%
                    margin 10px
                    line-height 50px
                    .nav-title
                        textStyle()
                        font-size 20px
                        width 100px !important 
                    .nav-item-title
                        display inline-block
                        width 80px
                    .el-checkbox-group
                        display inline-block
                        position relative
                        top -5px  
                .showBtn
                    line-height 25px
                    margin-right 20px
                    height 25px
                    width 75px
                    border-radius 5px
                    color #fff
                    font-weight bold
                    cursor pointer  
                    background-color $bgColor
            .list-item
                display inline-block
                position relative
                height 400px
                width 30.7%
                margin 1.2%
                border 1px solid #bbb
                background-color #fff
                box-shadow 3px 3px 10px #bbb
                .list-img
                    height 200px
                    width 100%
                    .list-item-img
                        width 100%
                        height 200px
                .list-text
                    height 150px
                    width 100%
                    .title
                        padding 20px
                        textStyle()
                        font-size 25px
                    .room-desc
                        padding 0 20px
                        textStyle()
                .time-gray
                    display flex
                    flex-direction column
                    justify-content center
                    height 50px
                    width 100%
                    background-color #eee
                    textStyle()
                    .pos-ver
                        .pos-left
                            height 25px
                            line-height 25px
                            text-align center
                            margin-left 10px
                            font-weight 500
                            font-size 14px
                            color #aaa
                            .iconfont-item
                                margin-right 5px
                        .showBtn
                            display inline-block
                            float right
                            line-height 25px
                            margin-right 10px
                            height 25px
                            width 75px
                            border-radius 5px
                            color #fff
                            font-weight bold
                            cursor pointer  
                            background-color $bgColor
            .hover-style
                box-shadow 5px 5px 10px #aaa 
</style>
