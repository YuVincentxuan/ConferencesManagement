<template>
    <div class="content">
        <home-header></home-header>
        <home-Time :list="list"></home-Time>
        <keep-alive>
            <home-number></home-number>
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
            // number:{},
        }
    },
    methods:{
        getHomeInfo(){
            axios.get('static/mock/room.json')
            // axios.post('/getBoardroom')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if(res.code == 200)
            {
                const data= res.data
                this.list = data
            }
        }
        // getNumInfo(){
        //     axios.get('static/mock/number.json')
        //     .then(this.getNumInfoSucc)
        // },
        // getNumInfoSucc(res){
        //      res = res.data
        //      console.log(res)
        //     if(res.code == 200)
        //     {
        //         this.number = res
        //     }
        // }
    },
    mounted(){
        this.getHomeInfo()
        // this.getNumInfo()
    }    
}
</script>
<style lang="stylus" scoped>
</style>
