<template>
    <div class="container">
         <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="会议室"
      width="180">
      <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
      </template>
    </el-table-column>
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">取消预定</el-button>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
export default {
    name: 'CenterCancel',
     data() {
      return {
        tableData: [{
          date: '2016-05-02 16:00',
          name: '一号会议室'
        }, {
          date: '2016-05-04 16:00',
          name: '王小虎'
        }, {
          date: '2016-05-01 16:00',
          name: '王小虎'
        }, {
          date: '2016-05-03 16:00',
          name: '王小虎'
        }]
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
        padding 0 100px
</style>
