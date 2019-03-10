<template>
    <div >
        <home-header></home-header>
        <div class="content">
            <el-tabs :tab-position="tabPosition" style="height: 200px;">
                <el-tab-pane label="个人中心">
                    <center-person></center-person>
                </el-tab-pane>
                <el-tab-pane label="预定进程">配置管理</el-tab-pane>
                <el-tab-pane label="取消预定">角色管理</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
import HomeHeader from '../home/components/Header'
import CenterPerson from './components/Person'
import CenterProcess from './components/Process'
export default {
    name: 'Center',
    components:{
        HomeHeader,
        CenterPerson,
        CenterProcess
    },
    data() {
      return {
        tabPosition: 'left'
      };
    }
}
</script>
<style lang="stylus" scoped>
    .content
        padding 100px 200px
</style>
