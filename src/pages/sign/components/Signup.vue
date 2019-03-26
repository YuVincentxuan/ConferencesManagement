<template>
    <div class="content">
        <div class="container">
            <el-steps :active="active" finish-status="success">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>
            <div class="basicInfo" v-if="active === 0 ">
                <el-form ref="form" :model="form" :rules="rules"  label-width="80px" class="demo-ruleForm">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="工号" prop="jobId">
                        <el-input v-model="form.jobId"></el-input>
                    </el-form-item>                   
                    <el-form-item label="联系方式" prop="contact">
                        <el-input v-model="form.contact"></el-input>
                    </el-form-item>
                    <el-form-item label="职位" prop="position">
                        <el-select v-model="form.position" placeholder="职位">
                            <el-option label="董事" value="董事"></el-option>
                            <el-option label="总裁" value="总裁"></el-option>
                            <el-option label="经理" value="经理"></el-option>
                            <el-option label="总监" value="总监"></el-option>
                            <el-option label="主任" value="主任"></el-option>
                            <el-option label="普通员工" value="普通员工"></el-option>
                            <el-option label="其他" value="其他"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item  label="部门" prop="department">
                        <el-select v-model="form.department" placeholder="部门">
                            <el-option label="财务部" value="财务部"></el-option>
                            <el-option label="技术部" value="技术部"></el-option>
                            <el-option label="营销部" value="营销部"></el-option>
                            <el-option label="行政部" value="行政部"></el-option>
                            <el-option label="人力资源" value="人力资源"></el-option>
                            <el-option label="其他" value="其他"></el-option>
                        </el-select>
                    </el-form-item>
                     <el-form-item label="性别" prop="sex">
                        <el-radio-group v-model="form.sex">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass"  autocomplete="off">
                        <el-input type="password" v-model="form.pass"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass"  autocomplete="off">
                        <el-input type="password" v-model="form.checkPass"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="basicInfo" v-if="active === 1 ">
                <sign-camera></sign-camera>
            </div>
            <div class="basicInfo" v-if="active === 2 ">
                信息填完了！快提交吧😀
            </div>
            <!-- <el-button style="margin-top: 12px;" @click="prev" v-if="active === 1|| active === 2">上一步</el-button> -->
            <el-button style="margin-top: 12px;" @click="next('form')" v-if="active === 0 || active === 1">下一步</el-button>
            <el-button style="margin-top: 12px;" v-if="active === 2" @click="register('form')">提交</el-button>
        </div>
    </div>
</template>
<script>
import SignCamera from './Camera'
import axios from 'axios'
export default {
    name: 'SignSignup',
    components:{
        SignCamera
    },
    created(){
        this.img = this.$store.state.img
    },
     data() {
        var checkContact = (rule, value, callback) => {
             if(!value) {
                 return callback(new Error('联系方式不能为空'))
             }
              setTimeout(() => {
                if (!value.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)) {
                    callback(new Error('请输入正确的手机号'));
                } else {
                    callback()
                }
            }, 1000);
        }
        var checkName = (rule, value, callback) => {
            if(!value){
                return callback(new Error('名字不能为空'))
            }
            setTimeout(() => {
                if(value.length<=1 || value.length>4){
                    callback(new Error('请输入正确的名字'))
                }else{
                    callback();
                }
            })
        }
        var checkId = (rule, value, callback) => {
            if(!value){
                return callback(new Error('工号不能为空'))
            }else{
                // callback()
                   setTimeout(() => {
                        axios.post('/loginCheck',{
                            jobId:value
                        }).then(res => {
                            if(res.data.msg == 'exist'){
                                callback(new Error('该工号已被注册，请更改'))
                            }
                            else{
                                callback()
                            }
                        })
                    },1000)
            }
          
        }
        var checkPassword = (rule, value, callback) => {
            if(!value){
                return callback(new Error('密码不能为空'))
            }
            setTimeout(() => {
                if(!value.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/)){
                    callback(new Error('密码至少包含英文和数字两种字符'))
                }else {
                    if(value.length < 8){
                        callback(new Error('密码至少8位'))
                    }else{
                        callback()
                    }
                }
            },1000)
        }
        var checkPass = (rule, value, callback) => {
            if(!value){
                return callback(new Error('请再次输入密码'))
            }
             setTimeout(() => {
                if(value !== this.form.pass){
                    callback(new Error('该密码与上面密码不一致'))
                }else{
                    callback()
                }
            },1000)
        }
        var checkSex = (rule, value, callback) =>{
            if(!value){
                return callback(new Error('请勾选性别'))
            }
        }
        var checkPosition = (rule, value, callback) =>{
            if(!value){
                return callback(new Error('请选择职位'))
            }
        }
        var checkDepartment = (rule, value, callback) =>{
            if(!value){
                return callback(new Error('请选择部门'))
            }
        }
      return {
        active: 0,
        img:'',
        form: {
          name: '',
          jobId: '',
          contact: '',
          pass: '',
          checkPass: '',
          sex:'',
          position:'',
          department:''
        },
        rules: {
            contact:[
                {validator: checkContact, trigger: 'blur' }
            ],
            name:[
                {validator: checkName, trigger: 'blur' }
            ],
            jobId:[
                {validator:checkId, trigger:'blur'}
            ],
            pass:[
                {validator:checkPassword, trigger:'blur'}
            ],
            checkPass:[
                {validator:checkPass, trigger:'blur'}
            ],
            sex:[
                {validator:checkSex, trigger:'change'}
            ],
            position:[
                {validator:checkPosition, trigger:'change'}
            ],
            department:[
                {validator:checkDepartment, trigger:'change'}
            ]
        }
        
      };
    },
    methods: {
        // prev(){
        //     --this.active;
        //     if(this.active<0) this.active=0
        // },
      next(form) {
        if(this.active === 0)
          {
            this.$refs[form].validate((valid) => {
            if(valid){
                if (this.active++ > 2) this.active = 0;
            }
                else{
                    this.$message({
                        message:'请填写完表格',
                        type:'warning'
                    })
                }
            })
          }
        else {
            console.log(this.img)
           if(this.img){
               if (this.active++ > 2) this.active = 0;
           }
        }
           
      },
      register(form){
        if (this.active++ > 2) this.active = 0;
        let myData = this.form
        var params = new URLSearchParams();
        params.append('name',myData.name );
        params.append('jobId', myData.jobId);
        params.append('password', myData.pass);
        params.append('sex', myData.sex);
        params.append('position', myData.position);
        params.append('department', myData.department);
        params.append('phone', myData.phone);
        params.append('img', this.img);
          this.$refs[form].validate((valid) => {
              if(valid) {
                  axios.post('/registerSuccess',params)
                  .then(res => {
                      if(res.data.msg === 'success'){
                          Message({
                              message:'注册成功，赶快去登录吧',
                              type:'success'
                          })
                      }else{
                          Message({
                              message:'注册失败',
                              type:'danger'
                          })
                      }
                  }).catch(error => {
                      Message({
                          message:'注册异常',
                          type:'danger'
                      })
                      console.log(error)
                  })
              }else{
                  console.log('error submit!')
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
        .container
            position absolute
            width 600px
            left 0
            right 0
            top 0
            bottom 0
            margin auto 
            padding 50px
            background-color rgba(255,255,255,.7)
            border-radius 4px
            .basicInfo
                padding 50px
                height 420px
</style>
