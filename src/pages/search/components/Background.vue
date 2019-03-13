<template>
    <div class="content">
        <div v-show="!showInput" class="center">
            <img class="logo" src="../../../assets/images/logo2.png">
            <span class="title">会议室搜索</span>
            <el-input
                
                placeholder="请输入会议室名称或者时间"
                prefix-icon="el-icon-search"
                v-model="search"
                @input="handClick"
            >
            </el-input>
        </div>
        <div v-show="showInput">
            <el-table
            :data="list.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase())||data.date.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"> 
            <el-table-column
            label="会议室名称"
            prop="name">
            </el-table-column>
            <el-table-column
            label="时间"
            prop="date">
            </el-table-column>
            <el-table-column
            align="right">
                <template slot="header" slot-scope="scope">
                    <el-input
                    autofocus
                    v-model="search"
                    size="mini"
                    placeholder="输入关键字搜索"/>
                </template>
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleDelete(scope.$index, scope.row)">预定</el-button>
                </template>
            </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchBackground',
    props:{
      list:Object
    },
    data() {
      return {
        search: '',
        showInput: false
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handClick(){
          this.showInput = true
      }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .content
        height 100vh
        padding 61px 0 0 0
        background-image url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551430326755&di=3f967519fb0d84a2d4959ebce99bb997&imgtype=0&src=http%3A%2F%2Fac-q.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F975%2F97582115.jpg')
        background-size 100% 100%
        background-attachment fixed
        .center
          position absolute
          width 410px
          height 140px
          left 0
          right 0
          top 0
          bottom 0
          margin auto 
          .logo 
            width 200px
            height 100px
          .title
            display inline-block
            position relative
            top 30px
            textStyle()
            font-size 40px
            color #000
        .el-button
              background-color rgb(159,15,19)
              color #fff
              float left
              textStyle()
</style>
