import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        job_id :'',
        img: '',
        showBtn:'true',
        boardroomId:''
    },
    mutations:{
        changeJob_id(state, job_id){
            state.job_id = job_id
            localStorage.setItem('job_id', state.job_id);
        },
        submitImg(state, img){
            state.img = img
        },
        changeShowBtn(state, showBtn){
            state.showBtn = showBtn
        },
        saveboardroomId(state, boardroomId){
            state.boardroomId = boardroomId
            localStorage.setItem('boardroomId', state.boardroomId);
        }
    }
})