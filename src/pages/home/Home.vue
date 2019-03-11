<template>
    <div class="content">
        <home-header></home-header>
        <home-Time></home-Time>
        <keep-alive>
            <home-number></home-number>
        </keep-alive>
        <home-detail></home-detail>
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
