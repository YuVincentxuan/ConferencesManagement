<template>
    <div >
        <home-header></home-header>
        <div class="content">
            <el-tabs :tab-position="tabPosition">
                <el-tab-pane label="个人中心">
                    <center-person :list="list"></center-person>
                </el-tab-pane>
                <el-tab-pane label="预定进程" v-show="false">
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
        cancelList:[],
        jobId:''
      };
    },
    methods:{
        getCenterInfo(){
            this.jobId = this.$store.state.job_id
            var params = new URLSearchParams();
            params.append('jobId',this.jobId);
            // axios.get('static/mock/center.json')
             axios.post('/privateCenter',params)
            .then(this.getCenterInfoSucc)
        },
        getCenterInfoSucc(res){
            res = res.data
            if(res.code == 200)
            {
                const data= res.data
                this.list = data.list
            }
        },
        getDeleteInfo(){
            //  axios.get('static/mock/delete.json')
             axios.post('/deleteReservation',params)
            .then(this.getDeleteInfoSucc)
        },
        getDeleteInfoSucc(res){
             res = res.data
            if(res.code == 200)
            {
                const data= res.data
                this.cancelList = data.tableData
            }
        }
    },
    mounted(){
        this.getCenterInfo()
        this.getDeleteInfo()
    },
}
</script>
<style lang="stylus" scoped>
    .content
        padding 100px 200px
</style>
