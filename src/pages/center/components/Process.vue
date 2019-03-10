<template>
    <div  class="container">
        <div class="list">
            <span class="title">一号会议室预定进程</span>
            <el-timeline :reverse="reverse">
                <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp">
                {{activity.content}}
                </el-timeline-item>
            </el-timeline>
        </div>
        <div class="list">
            <span class="title">一号会议室预定进程</span>
            <el-timeline :reverse="reverse">
                <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp">
                {{activity.content}}
                </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CenterProcess',
    data() {
      return {
        reverse: true,
        activities: [{
          content: '预定成功',
          timestamp: '2018-04-15'
        }, {
          content: '通过审核',
          timestamp: '2018-04-13'
        }, {
          content: '请求发送',
          timestamp: '2018-04-11'
        }]
      };
    }
}
</script>
<style lang="stylus" scoped>
     @import '~styles/varibles.styl'
    .container
        padding 0 20px
        .list
            padding 0 100px
            textStyle()
            .title
                color $bgColor
                font-size 15px
            .el-timeline
                margin-top 10px
</style>
