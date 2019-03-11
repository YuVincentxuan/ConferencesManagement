<template>
    <div class="content">
        <home-header></home-header>
        <step-confirm></step-confirm>
    </div>
</template>
<script>
import HomeHeader from '../home/components/Header'
import StepConfirm from './components/Confirm'
export default {
    name: 'Step',
    components:{
        HomeHeader,
        StepConfirm
    }
}
</script>
<style lang="stylus" scoped>
</style>
