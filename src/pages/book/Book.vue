<template>
    <div class="content">
        <home-header></home-header>
        <book-list :list="list"></book-list>
    </div>
</template>
<script>
import HomeHeader from '../home/components/Header'
import BookList from './components/List'
import axios from 'axios'
export default {
    name: 'Book',
    components: {
        HomeHeader,
        BookList
    },
    data(){
        return{
            list:[]
        }
    },
    methods:{
        getBookInfor(){
            // axios.get('static/mock/seven.json')
            axios.post('/getReservationOfSevenDay')
            .then(this.getBookInfoSucc)
        },
        getBookInfoSucc (res) {
            res = res.data
            if(res.code == 200)
            {
                const data= res.data
                this.list = data.list
            }
           
        }
    },
    mounted(){
        this.getBookInfor()
    }   
}
</script>
<style lang="stylus" scoped>
</style>
