<template>
    <div>
        <div class="header">
            <span>人员信息管理</span>
    </div>
    <hr/>
    <div>
        <el-table
            :data="list"
            style="width: 100%">
            <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="姓名" prop="name">
                    <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属部门" prop="department">
                    <span>{{ props.row.department }}</span>
                </el-form-item>
                <el-form-item label="工号 ID" prop="jobId">
                    <span>{{ props.row.jobId }}</span>
                </el-form-item>
                <el-form-item label="联系方式" prop="phone">
                    <span>{{ props.row.phone }}</span>
                </el-form-item>
                <el-form-item label="职位" prop="position">
                    <span>{{ props.row.position }}</span>
                </el-form-item>
                </el-form>
            </template>
            </el-table-column>
            <el-table-column
            label="工号"
            prop="jobId">
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
                        @click.native.prevent="deleteRow(scope.$index,scope.row ,tableData)"
                       >删除</el-button>
                    </template>
                    </el-table-column>
        </el-table>
        <el-dialog title="公司成员" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="工号" :label-width="formLabelWidth">
                <el-input v-model="form.jobId" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="addRow(form)">确 定</el-button>
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
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'ManagePeople',
    props:{
        list:Array
    },
    data() {
      return {
        formLabelWidth:'120px',
        dialogFormVisible: false,
        form: {
          name: '',
            jobId:''
        }
      };
    },
    methods: {
        filterTag(value, row) {
            return row.tag === value;
        },
        addRow (value) {
            var list = {
                rowNum: '',
                name:value.name,
                jobId:value.jobId,
                tag:'否'
            }
            if(list.name!='' &&list.jobId!='')
            {
                let params = new URLSearchParams();
                params.append('jobId',list.jobId,);
                params.append('name',list.name);
                axios.post('/insertEmployeeMsg',params)
                    .then((res) => {
                    if(res.msg == 200){
                        this.list.push(list)
                        this.dialogFormVisible = false
                        value.name = '',
                        value.jobId = ''
                    }
                    else{
                        this.$message({
                            message:'信息提交失败',
                            type:'warning'
                        })
                    }
                }).catch((error) => {
                    console.log(error)
                })
            }else{
                this.$message({
                    message:'请填写完表格',
                    type:'warning'
                })
            }
        },
        deleteRow(index, rows, data) {
            let params = new URLSearchParams();
            params.append('jobId',row.jobId,);
            axios.post('/deleteEmployee',params)
                .then((res) => {
                    if(msg === 'success'){
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
