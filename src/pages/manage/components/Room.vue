<template>
<div>
    <div class="header">
          <span >会议室信息管理</span>
    </div>
    <hr/>
    <div>
        <el-table
            :data="list"
            style="width: 100%">
            <el-table-column
            label="会议室id"
            prop="boardroomId">
            </el-table-column>
            <el-table-column
            label="会议室名称"
            prop="boardroomName">
            </el-table-column>
            <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                size="mini"
                type="danger"
                @click.native.prevent="deleteRow(scope.$index,scope.row, list)"
               >删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1">
        </el-pagination>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ManageRoom',
    props:{
      list:Array
    },
    methods: {
        deleteRow(index, rows, data) {
            let params = new URLSearchParams();
            params.append('boardroomId',rows.boardroomId,);
            axios.post('/deleteBoardroom',params)
                .then((res) => {
                    if(res.data.msg == 'success'){
                        data.splice(index, 1);
                    }else{
                        this.message({
                            message:'删除失败',
                            type:'warning'
                        })
                    }
                }).catch((error) => {
                    console.log(error)
                }) 
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    textStyle()
    font-size 24px
    font-weight 700
    margin-bottom 10px
.el-submenu .el-menu-item
    min-width 0px !important 
.el-menu
    height  100vh
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .el-form-item{
      display block
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
