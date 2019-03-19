<template>
    <div class="content">
        <home-header></home-header>
        <step-confirm :list='list' :peopleList='peopleList'></step-confirm>
    </div>
</template>
<script>
import HomeHeader from '../home/components/Header'
import StepConfirm from './components/Confirm'
import axios from 'axios'
export default {
    name: 'Step',
    components:{
        HomeHeader,
        StepConfirm
    },
    data(){
        return{
            jobId:'',
            list:[],
            peopleList:[]
        }
    },
    created(){
        this.jobId = this.$route.params.jobId
        axios.post('/getReservationEmployee',{
            jobId:this.jobId
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
    },
    methods:{
        getStepInfo(){
            axios.get('static/mock/step.json')
            .then(this.getStepInfoSucc)
        },
        getStepInfoSucc(res){
            res = res.data
            const data= res.data
            this.list = data.list
            this.peopleList = data.peopleList
        }

    },
    mounted(){
        this.getStepInfo()
    }
}
</script>
<style lang="stylus" scoped>
</style>
