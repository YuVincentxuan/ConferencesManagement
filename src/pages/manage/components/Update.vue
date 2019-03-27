<template>
    <div>
        <div class="header">
            <span >添加会议室信息</span>
        </div>
        <hr/>
        <div class="content">
            <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
                <el-form-item label="会议室名称" prop="name">
                    <el-input type="text" v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="会议室id" prop="id">
                    <el-input v-model.number="form.id"></el-input>
                </el-form-item>
                 <el-form-item  label="会议室容量" prop="department">
                        <el-select v-model="form.capacity" placeholder="部门">
                            <el-option label="5" value="5"></el-option>
                            <el-option label="10" value="10"></el-option>
                            <el-option label="15" value="15"></el-option>
                            <el-option label="20" value="20"></el-option>
                            <el-option label="25" value="25"></el-option>
                            <el-option label="30" value="30"></el-option>
                        </el-select>
                    </el-form-item>
                <el-form-item>
                  <el-upload
                  class="upload-demo"
                  drag
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-success="saveImg"
                  :on-preview="handlePreview"
                  :on-remove="handleRemove"
                  :before-upload="beforeUpload"
                  ref="formUpload"
                  :auto-upload="false"
                  :on-exceed="alertLimit"
                  list-type="picture"
                  limit="1"
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">提交</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
var params = new URLSearchParams();
export default {
    name: 'ManageUpdate',
    data() {
      var chackId = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('会议室id不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
              callback();
          }
        }, 1000);
      };
      var checkName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入名字'));
        } else {
          if (this.form.checkPass !== '') {
            this.$refs.form.validateField('checkPass');
          }
          callback();
        }
      };
      var chackCapacity = (rule, value, callback) =>{
            if(!value){
                return callback(new Error('请选择会议室容量'))
            }
        }
      return {
        boardroomImg:'',
        form: {
          name: '',
          id: '',
          capacity: ''
        },
        rules: {
          name: [
            { validator: checkName, trigger: 'blur' }
          ],
          id: [
            { validator: chackId, trigger: 'blur' }
          ],
          capacity: [
            { validator: chackCapacity, trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        let form = this.form
        params.append('boardroomName',form.name );
        params.append('capacity', form.capacity);
        // params.append('boardroomImg', this.img);
        params.append('boardroomId', form.id);
        this.$refs.formUpload.submit()
        this.$refs[formName].validate((valid) => {
        if (valid) {
            axios.post('/insertBoardroom',params)
            .then(res => {
              if(res.data.msg == 'success')
              {
                this.$message({
                  message:'上传成功',
                  type:'success'
                })
              }else{
                this.$message({
                  message:'上传失败',
                  type:'warning'
                })
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      alertLimit(file, fileList){
        this.$message({
          message:'只能同时上传一张照片',
          type:'warning'
        })
      },
      saveImg(response,file, fileList){
        console.log(response)
      },
      beforeUpload(file){
        var reader = new FileReader();
        reader.readAsDataURL(video);
        reader.onload=function(e){
          var dataBase64 = e.target.result;
          var videoNum = dataBase64.split(";base64,")
        }
        params.append('boardroomImg', videoNum);
        return false;
      }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    textStyle()
    font-size 24px
    font-weight 700
    margin-bottom 10px
.content
    position relative
    width 500px
    left 0 
    right 0
    top 20px
    margin 0 auto 
</style>
