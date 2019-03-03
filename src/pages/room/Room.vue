<template>
    <div class="content">
        <home-header></home-header>
        <home-infor></home-infor>
    </div>
</template>
<script>
import HomeHeader from '../home/components/Header'
import HomeInfor from './components/Infor'
export default {
    name: 'Room',
    components: {
        HomeHeader,
        HomeInfor
    }    
}
</script>
<style lang="stylus" scoped>
    .header
        background-color transparent
</style>
