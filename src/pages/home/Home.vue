<template>
    <div>
        <home-header></home-header>
        <home-number></home-number>
        <home-detail></home-detail>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeDetail from './components/Detail'
import HomeNumber from './components/Number'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeDetail,
        HomeNumber
    }    
}
</script>
<style scoped>
    
</style>
