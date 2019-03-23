<template>
  <el-container>
            <el-aside style="width:none">
                <el-row class="tac">
                    <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    :collapse="isCollapse"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1" @click="handleFirstCilck">
                        <i class="el-icon-edit"></i>
                        <span slot="title">添加会议室信息</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="handleSecondCilck">
                        <i class="el-icon-menu"></i>
                        <span slot="title">人员信息管理</span>
                    </el-menu-item>
                    <div class="iconBtn">
                    <i :class="{'el-icon-caret-right':isCollapse,'el-icon-caret-left':!isCollapse}" @click="handleClick"></i>
                    </div>
                    </el-menu>
                </el-row>
            </el-aside>
            <el-container>
                <el-main>
                    <div class="content" v-if="active===1">
                        123
                    </div>
                    <div class="content" v-if="active===2">
                        <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column type="expand">
                            <template slot-scope="props">
                                <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item label="姓名" prop="name">
                                    <span>{{ props.row.name }}</span>
                                </el-form-item>
                                <el-form-item label="所属部门" prop="shop">
                                    <span>{{ props.row.shop }}</span>
                                </el-form-item>
                                <el-form-item label="工号 ID" prop="id">
                                    <span>{{ props.row.id }}</span>
                                </el-form-item>
                                <el-form-item label="联系方式" prop="showId">
                                    <span>{{ props.row.shopId }}</span>
                                </el-form-item>
                                <el-form-item label="职位" prop="category">
                                    <span>{{ props.row.category }}</span>
                                </el-form-item>
                                </el-form>
                            </template>
                            </el-table-column>
                            <el-table-column
                            label="工号"
                            prop="id">
                            </el-table-column>
                            <el-table-column
                            label="姓名"
                            prop="name">
                            </el-table-column>
                              <el-table-column
                                prop="tag"
                                label="是否注册"
                                width="100"
                                :filters="[{ text: '是', value: '是' }, { text: '否', value: '否' }]"
                                :filter-method="filterTag"
                                filter-placement="bottom-end">
                                <template slot-scope="scope">
                                    <el-tag
                                    :type="scope.row.tag === '是' ? 'success' : 'danger'"
                                    disable-transitions>{{scope.row.tag}}</el-tag>
                                </template>
                                </el-table-column>
                                 <el-table-column label="操作">
                                    <template slot-scope="scope">
                                        <el-button
                                        size="mini"
                                        type="danger"
                                        @click.native.prevent="deleteRow(scope.$index, tableData)"
                                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                    </template>
                                    </el-table-column>
                        </el-table>
                        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                            <el-form :model="form">
                                <el-form-item label="活动名称" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off"></el-input>
                                </el-form-item>
                                <el-form-item label="活动id" :label-width="formLabelWidth">
                                <el-input v-model="form.id" autocomplete="off"></el-input>
                                </el-form-item>
                            </el-form>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogFormVisible = false,addRow(form)">确 定</el-button>
                            </div>
                            </el-dialog>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="dialogFormVisible = true"
                        >添加</el-button>
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1">
                        </el-pagination>
                    </div>
                </el-main>
            </el-container>
        </el-container>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ManageNav',
    data() {
      return {
        isCollapse: false,
        dialogFormVisible: false,
        active:1,
        form: {
          name: '',
            id:''
        },
        tableData: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          tag:'是'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          tag:'否'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          tag:'否'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333',
          tag:'否'
        }]
      };
    },
    methods: {
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    handleClick(){
        this.isCollapse = (this.isCollapse == true ? !this.isCollapse : !this.isCollapse)
      },
    handleFirstCilck(){
        this.active = 1;
      },
    handleSecondCilck(){
        this.active = 2
    },
    filterTag(value, row) {
        return row.tag === value;
    },
    handleDelete(index, row) {
        
        console.log(index, row);
    },
      addRow (value) {
        var list = {
          rowNum: '',
          name:value.name,
          id:value.id,
          tag:'否'
        }
        this.tableData.push(list)
    },
    deleteRow(index, rows) {
        rows.splice(index, 1);
    }
    },
    
}
</script>
<style lang="stylus" scoped>
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
.iconBtn
    position relative
    width 20px
    height 20px
    color #fff
    left 0
    right 0
    top 100px
    margin  0 auto
.content
    padding  0 40px
</style>
