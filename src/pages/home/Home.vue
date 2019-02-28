<template>
    <div class="content">
        <home-header></home-header>
        <home-Time></home-Time>
        <home-number></home-number>
        <home-detail></home-detail>
        <home-footer></home-footer>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeDetail from './components/Detail'
import HomeNumber from './components/Number'
import HomeTime from './components/Time'
import HomeFooter from './components/Footer'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeDetail,
        HomeNumber,
        HomeTime,
        HomeFooter
    }    
}
</script>
<style lang="stylus" scoped>
</style>
