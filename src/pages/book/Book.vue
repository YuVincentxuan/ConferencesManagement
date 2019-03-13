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
            axios.get('static/mock/index.json')
            .then(this.getBookInfoSucc)
        },
        getBookInfoSucc (res) {
            res = res.data
            this.list = res.list
        }
    },
    mounted(){
        this.getBookInfor()
    }   
}
</script>
<style lang="stylus" scoped>
</style>
