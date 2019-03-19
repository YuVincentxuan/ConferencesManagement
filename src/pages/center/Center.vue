<template>
    <div >
        <home-header></home-header>
        <div class="content">
            <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="个人中心">
                    <center-person :list="list"></center-person>
                </el-tab-pane>
                <el-tab-pane label="预定进程">
                    <center-process :list="processList"></center-process>
                </el-tab-pane>
                <el-tab-pane label="取消预定">
                    <center-cancel :list="cancelList"></center-cancel>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import HomeHeader from '../home/components/Header'
import CenterPerson from './components/Person'
import CenterProcess from './components/Process'
import CenterCancel from './components/Cancel'
import axios from 'axios'
export default {
    name: 'Center',
    components:{
        HomeHeader,
        CenterPerson,
        CenterProcess,
        CenterCancel
    },
    data() {
      return {
        tabPosition: 'left',
        list:[],
        processList:[],
        cancelList:[]
      };
    },
    methods:{
        getCenterInfo(){
            axios.get('static/mock/center.json')
            .then(this.getCenterInfoSucc)
        },
        getCenterInfoSucc(res){
            res = res.data
            const data= res.data
            this.list = data.list
            this.processList = data.processList
            this.cancelList = data.cancle.tableData
            console.log(this.processList)
        }
    },
    mounted(){
        this.getCenterInfo()
    },
}
</script>
<style lang="stylus" scoped>
    .content
        padding 100px 200px
</style>
