<template>
    <div class="content">
        <home-header></home-header>
        <search-background :list="list"></search-background>
    </div>
</template>
<script>
import HomeHeader from '../home/components/Header'
import SearchBackground from './components/Background'
import axios from 'axios'
export default {
    name: 'Search',
    components: {
        HomeHeader,
        SearchBackground,
    },
    data(){
        return{
            list:{}
        }
    },
    methods:{
        getSearchInfo(){
            axios.get('static/mock/book.json')
            .then(this.getSearchInfoSucc)
        },
        getSearchInfoSucc(res){
            res = res.data
            this.list = res.listData.RoomData
        }
    },
    mounted(){
        this.getSearchInfo()
    }    
}
</script>
<style lang="stylus" scoped>
</style>
