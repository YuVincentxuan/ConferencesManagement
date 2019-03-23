<template>
    <div class="content">
        <div class="bgBlack"></div>
        <div class="container">
            <span class="title">登录</span>
            <div style="margin: 20px;"></div>
            <el-form class="demo-ruleForm" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="工号" prop="job_id">
                    <el-input v-model="formLabelAlign.job_id"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="formLabelAlign.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                    <router-link class="infor" to="/sign" tag="span">没有账号？立即注册</router-link>
                </el-form-item>
                
            </el-form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'LogLogin',
     data() {
      return {
        labelPosition: 'left',
        formLabelAlign: {
          job_id: '',
          password: '',
          type: ''
        }
      };
    },
    methods:{
        login(){
            let myData = this.formLabelAlign
            this.$refs.loginForm.validate((vaild) => {
                if(vaild){
                    axios.post('',{
                        data:myData
                    }).then(res => {
                        if(res.data.name){
                            this.$message({
                                message:'登录成功',
                                type: 'success'
                            })
                            this.$store.commit('changeJob_id', res.data.job_id)
                            this.$store.commit('changeShowBtn','false')
                            this.$router.push('/')
                        }else{
                            this.$message({
                                message:'密码错误',
                                type:'warning'
                            })
                        }
                    }).catch(error => {
                        this.$message({
                            message:'登录异常',
                            type:'warning'
                        })
                        console.log(error)
                    })
                }else {
                    console.log('error submit!');
                    return false;
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .content
        position relative
        height 100vh
        width 100vw
        background-image url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551368481865&di=3c1e7743fb46b83eadc571874829a7d6&imgtype=0&src=http%3A%2F%2Fac-q.static.booking.cn%2Fimages%2Fhotel%2Fmax1024x768%2F753%2F75366210.jpg')
        background-size 100% 100%
        background-attachment fixed
        .bgBlack
            height 100vh
            width 100vw
            background-color rgba(0,0,0,.4)
        .container
            position absolute
            height 200px
            width 400px
            left 0
            right 0
            top 0
            bottom 0
            margin auto 
            padding 50px
            background-color rgba(255,255,255,.7)
            border-radius 4px
            .title
                textStyle()
                font-size 28px
            .demo-ruleForm
                .infor
                    float right
                    display inline-block
                    cursor pointer

</style>
