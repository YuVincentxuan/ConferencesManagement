<template>
  <div class="container">
    <div class="top-nav">
        <div class="list-item">
            <div class="title">
              当前使用情况
            </div>
            <div class="list-detail">
              <el-table
                :data="list.tableData"
                style="width: 100%">
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                      <el-form-item label="参会人员">
                        <span v-for="(item,index) in props.row.people" :key="index">{{item + ' '}}</span><br>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column
                  label="会议发起者"
                  prop="name">
                </el-table-column>
                <el-table-column
                  label="参会人数"
                  prop="num">
                </el-table-column>
                
                <el-table-column
                  label="会议时间"
                  prop="time">   
                </el-table-column>
             </el-table>
            </div>
        </div>
        <div class="list-item">
            <div class="title">
              立即预定
            </div>
            <div class="list-detail">
              <el-table
              :data="list.RoomData"
              style="width: 100%">
              <el-table-column
                label="时间"
                prop="date">
              </el-table-column>
              <el-table-column
                label="会议室名称"
                prop="name">
              </el-table-column>
              <el-table-column
                align="right">
                <template slot="header" slot-scope="">
                </template>
                <template slot-scope="scope">
                  <router-link to="/step">
                    <el-button
                      size="mini"
                      @click="handleDelete(scope.$index, scope.row)">预定</el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
            </div>
        </div>
        <div class="list-item">
            <div class="title">
              预定当天其他时段
            </div>
            <div class="list-detail">
              <el-table
              :data="list.RoomData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%">
              <el-table-column
                label="时间"
                prop="date">
              </el-table-column>
              <el-table-column
                label="会议室名称"
                prop="name">
              </el-table-column>
              <el-table-column
                align="right">
                <template slot-scope="scope">
                  <router-link to="/step">
                  <el-button
                    size="mini"
                    @click="handleDelete(scope.$index, scope.row)">预定</el-button>
                  </router-link>
                </template>
              </el-table-column>
            </el-table>
            </div>
        </div>
    </div>
  </div>
</template>
<script>

export default {
    name: 'HomeReservation',
    props:{
      list:Object
    },
    data() {
      return {
        search: ''
      }
    },
    methods: {
        handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
 
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .container
        position absolute
        z-index 30
        top 661px
        left 10%
        right 10%
        .top-nav
            width 100%
            background-color #fff
            padding 10px 0
            .list-item
              margin-top  10px
              .title
                height 40px
                width 200px
                line-height 40px
                text-align center
                textStyle()
                color #fff
                font-size 20px
                background: linear-gradient(left,rgba(255, 255, 255,0),rgba(159,15,19,1) 40%,rgba(159,15,19,1) 60%, rgba(255, 255, 255,0) );
              .list-detail
                textStyle()
              .el-button
                background-color rgb(159,15,19)
                color #fff
                float left
                textStyle()
</style>
