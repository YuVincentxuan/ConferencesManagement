<template>
    <div class="content">
        <div class="container">
            <el-steps :active="active" finish-status="success">
                <el-step title="步骤 1"></el-step>
                <el-step title="步骤 2"></el-step>
                <el-step title="步骤 3"></el-step>
            </el-steps>
            <div class="basicInfo" v-if="active === 0 ">
                <el-form ref="form" :model="form" label-width="80px" class="demo-ruleForm">
                    <el-form-item label="姓名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="工号">
                        <el-input v-model="form.id"></el-input>
                    </el-form-item>                   
                    <el-form-item label="联系方式">
                        <el-input v-model="form.contact"></el-input>
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
            <div class="basicInfo" v-if="active === 2 ">789</div>
            <!-- <el-button style="margin-top: 12px;" @click="prev" v-if="active === 1|| active === 2">上一步</el-button> -->
            <el-button style="margin-top: 12px;" @click="next" v-if="active === 0|| active === 1">下一步</el-button>
            <el-button style="margin-top: 12px;" v-if="active === 2" @click="next">提交</el-button>
        </div>
    </div>
</template>
<script>
import SignCamera from './Camera'
export default {
    name: 'SignSignup',
    components:{
        SignCamera
    },
     data() {
      return {
        active: 0,
        form: {
          name: '',
          id: '',
          contact: '',
          pass: '',
          checkPass: ''
        },
        
      };
    },
    methods: {
        prev(){
            --this.active;
            if(this.active<0) this.active=0
        },
      next() {
        if (this.active++ > 2) this.active = 0;
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
