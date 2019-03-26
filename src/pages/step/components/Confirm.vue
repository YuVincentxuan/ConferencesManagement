<template>
    <div class="content">
        <div class="container">
            <div class="title">
              发起人信息
            </div>
            <div v-for="item in list" :key="item.id" class="list">
                <span class="list-item"><span class="iconfont pos-cneter">&#xeb9c;</span>{{item.item}}</span>
                <span class="list-item">{{item.infor}}</span>
            </div>
            <div class="title">
              添加开会人员
            </div>
            <div style="text-align: center">
                <el-transfer
                style="text-align: left; display: inline-block"
                v-model="value"
                filterable
                :render-content="renderFunc"
                :titles="['联系人', '参会人员']"
                :button-texts="['删除', '添加']"
                :format="{
                    noChecked: '${total}',
                    hasChecked: '${checked}/${total}'
                }"
                @change="handleChange"
                :data="data">
                </el-transfer>
            </div>
            <el-button class="showBtn" type="text" @click="open2">预定</el-button>
            <div class="clear">

            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'StepConfirm',
    props:{
      list:Array,
      date:String,
      time:String,
      boardroomId:String
      // peopleList:Array
    },
     data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <=15; i++) {
          data.push({
            key: i,
            label: '备选项 ${i}'
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [],
        dataList:[],
        peopleList:'',
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        },
      };
    },
  mounted(){
    this.getUserInfo();
  },
    methods: {
      handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      },
      getUserInfo(){
        this.data = [];
        this.value= [];
        // axios.get('static/mock/step.json',{
        axios.post('/getReservationEmployee',{
        }).then(res=>{
          res = res.data
          if(res.code == 200){
              const data= res.data
              data.peopleList.forEach(c =>{
              this.data.push({
                key: c.id,
                label: c.name
              })
          })
          }
        })
      },
       open2() {
        this.$confirm('是否确定提交预定?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.value.forEach(c => {
            this.peopleList = this.peopleList + c.id +','
          })
          var params = new URLSearchParams();
          params.append('date',date );
          params.append('time',time );
          params.append('boardroomId',boardroomId );
           params.append('peopleList',this.boardroomId );
          axios.post('/reservationBoardroom',params)
          .then(res =>{
            if(res.data.msg === 'success')
            {
              this.$message({
                type: 'success',
                message: '预定成功!'
              });
            }else{
              this.$message({
                type: 'warning',
                message: '预定失败!'
              });
            }
              
          }).catch(error => {
            console.log(error)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消预定'
          });          
        });
      }
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .content
        padding 100px 200px
        background-color #f4f5f5
        .container
            background-color #fff
            padding 10px
            .title
                position relative
                height 40px
                width 200px
                margin 10px
                line-height 40px
                text-align center
                textStyle()
                color #fff
                font-size 20px
                background: linear-gradient(left,rgba(255, 255, 255,0),rgba(159,15,19,1) 40%,rgba(159,15,19,1) 60%, rgba(255, 255, 255,0) );
            .list
                position relative
                height 50px
                width 350px
                line-height 50px
                text-align center
                left 0
                right 0
                margin auto 
                .list-item
                    display inline-block
                    width 150px
                    height 50px
                    line-height 50px 
                    textStyle()
                    .pos-cneter
                        height 50px
                        line-height 50px
                        margin-right 5px   
            .showBtn
                float right
                line-height 25px
                margin-right 20px
                height 25px
                width 75px
                border-radius 5px
                color #fff
                font-weight bold
                cursor pointer  
                background-color $bgColor
            .clear
                clear both
            .el-button
                padding 0 !important
</style>
