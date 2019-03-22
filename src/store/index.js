import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        job_id :'12',
        img: ''
    },
    mutations:{
        changeJob_id(state, job_id){
            state.job_id = job_id
        },
        submitImg(state, img){
            state.img = img
        }
    }
})