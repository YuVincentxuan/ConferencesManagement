<template>
    <div class="container">
        <div v-for="item of list" :key="item.id" class="list">
            <span class="list-item"><span class="iconfont pos-cneter">&#xeb9c;</span>{{item.item}}</span>
            <span class="list-item">{{item.infor}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CenterPerson',
    props:{
      list:Array
    }
    // data () {
    //     return{
    //         // list:[{
    //         //     'id':'1',
    //         //     'item':'姓名',
    //         //     'infor':'余文轩' 
    //         // },{
    //         //     'id':'2',
    //         //     'item':'工号',
    //         //     'infor':'123456',
    //         // },{
    //         //     'id':'3',
    //         //     'item':'部门',
    //         //     'infor':'网页开发'
    //         // },{  
    //         //     'id':'4',
    //         //     'item':'组别',
    //         //     'infor':'前端一组'
    //         // }]
    //     }
    // }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .container
        padding 0 20px
        .list
            height 50px
            line-height 50px
            padding-left 100px
            .list-item
                display inline-block
                width 150px
                height 50px
                line-height 50px 
                textStyle()
                color #ADADAD
                .pos-cneter
                    height 50px
                    line-height 50px
                    margin-right 5px
</style>
