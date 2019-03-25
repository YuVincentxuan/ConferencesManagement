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
            list:[],
            date:" ", 
            boardroomID:" ",
            time:" "
        }
    },
    methods:{
        getBookInfor(){
            // axios.get('static/mock/seven.json',{
            axios.post('/getReservationOfSevenDay',{
                date:'',
                boardroomID:'',
                time:''
            }).then(this.getBookInfoSucc)
        },
        getBookInfoSucc (res) {
            res = res.data
            if(res.code == 200)
            {
                const data= res.data
                this.list = data.list
            }
           
        },
         timeNow () {
            var moment = require('moment');
            let rightNow = moment().hour()
            this.time = rightNow +':00'+'-'+(rightNow+1)+':00'
            this.date = (moment().month()+1)+'月'+moment().date()
            return this.date
        }
    },
    mounted(){
        this.getBookInfor()
        console.log(this.timeNow())
    }   
}
</script>
<style lang="stylus" scoped>
</style>
