<template>
    <div class="content">
        <home-header></home-header>
        <home-Time :list="list"></home-Time>
        <keep-alive>
            <home-number :list="number"></home-number>
        </keep-alive>
        <home-detail></home-detail>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeDetail from './components/Detail'
import HomeNumber from './components/Number'
import HomeTime from './components/Time'
import HomeFooter from './components/Footer'
import axios from 'axios'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeDetail,
        HomeNumber,
        HomeTime,
        HomeFooter
    },
    data () {
        return{
            list:[],
            number:{},
        }
    },
    methods:{
        getHomeInfo(){
            axios.get('static/mock/index.json')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            this.list = res.list
            this.number = res.number
        }
    },
    mounted(){
        this.getHomeInfo()
    }    
}
</script>
<style lang="stylus" scoped>
</style>
