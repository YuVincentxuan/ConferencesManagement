<template>
    <div class="content">
        <home-header></home-header>
        <room-infor :list="list" :listData="listData"></room-infor>
    </div>
</template>
<script>
import HomeHeader from '../home/components/Header'
import RoomInfor from './components/Infor'
import axios from 'axios'
export default {
    name: 'Room',
    components: {
        HomeHeader,
        RoomInfor
    }, 
    data(){
        return{
            list:[],
            listData:{},
            boardroomId:''
        }
    },
    created(){
        this.boardroomId = this.$route.params.boardroomId
        console.log(this.boardroomId)
    },
    methods:{
        getRoomInfo(){
            axios.get('static/mock/book.json')
                .then(this.getRoomInfoSucc)
        },
        getRoomInfoSucc(res){
            res = res.data
            this.list = res.img
            this.listData = res.listData
        }
    },
    mounted() {
        this.getRoomInfo()   
    }
}
</script>
<style lang="stylus" scoped>
</style>
