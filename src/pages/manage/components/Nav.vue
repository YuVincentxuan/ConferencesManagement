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
                    <el-menu-item index="1" @click="handleActiveCilck(1)">
                        <i class="el-icon-menu"></i>
                        <span slot="title">会议室信息管理</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="handleActiveCilck(2)">
                        <i class="el-icon-edit"></i>
                        <span slot="title">添加会议室信息</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="handleActiveCilck(3)">
                        <i class="el-icon-view"></i>
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
                        <manage-room :list="list"></manage-room>
                    </div>
                     <div class="content" v-if="active===2">
                       <manage-update></manage-update>
                    </div>
                    <div class="content" v-if="active===3">
                       <manage-people :list="peopleList"></manage-people>
                    </div>
                </el-main>
            </el-container>
        </el-container>
</template>
<script>
import axios from 'axios'
import ManagePeople from './People'
import ManageRoom from './Room'
import ManageUpdate from './Update'
export default {
    name: 'ManageNav',
    components:{
        ManagePeople,
        ManageRoom,
        ManageUpdate
    },
    data() {
      return {
        isCollapse: false,
        dialogFormVisible: false,
        active:1,
        list:[],
        peopleList:[]
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
        handleActiveCilck(value){
            this.active = value;
        },
        getManageInfor(){
            // axios.get('static/mock/manage.json')
            axios.post('/getAllBoardroomMsg')
            .then(this.getManageInforSucc)
        },
        getManageInforSucc(res){
            res = res.data
            if(res.code == 200){
                const data = res.data
                this.list = data
            }
        },
        getPeopleInfor(){
            axios.get('static/mock/people.json')
            .then(this.getPeopleInforSucc)
        },
        getPeopleInforSucc(res){
            res = res.data
            if(res.code == 200){
                const data = res.data
                this.peopleList = data
            }
        }
    },
    mounted(){
        this.getManageInfor();
        this.getPeopleInfor();
    }
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
