<template>
    <div class="content">
        <home-header></home-header>
        <room-infor></room-infor>
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
    methods:{
        getRoomInfo(){
            axios.get('static/mock/index.json')
                .then(this.getRoomInfoSucc)
        },
        getRoomInfoSucc(res){
            res = res.data
            this.list = res.list
        }
    },
    mounted() {
        this.getRoomInfo()   
    },
}
</script>
<style lang="stylus" scoped>
</style>
