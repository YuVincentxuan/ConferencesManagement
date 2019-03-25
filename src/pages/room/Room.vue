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
            list:'',
            listData:{},
            boardroomId:''
        }
    },
    created(){
        this.boardroomId = this.$route.params.boardroomId
        var params = new URLSearchParams();
        params.append('boardroomId',this.boardroomId)
        axios.post('/getCurrentDateReservation',params)
        // axios.get('static/mock/reservation.json')
         .then(this.getRoomInfoSucc)
        .catch(function(error){
            console.log(this.boardroomId)
        })
    },
    methods:{
        // getRoomInfo(){
        //     // axios.get('static/mock/book.json')
        //     axios.get('/getCurrentDateReservation')
        //         .then(this.getRoomInfoSucc)
        // },
        getRoomInfoSucc(res){
            res = res.data
            if(res.code == 200){
                const data= res.data
                this.list = data.img
                this.listData = data.listData
                console.log(this.listData)
            }
          
        }
    },
    mounted() {
        // this.getRoomInfo()   
    }
}
</script>
<style lang="stylus" scoped>
</style>
