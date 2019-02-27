<template>
    <div>
        <home-header></home-header>
        <home-detail></home-detail>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeDetail from './components/Detail'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeDetail
    }    
}
</script>
<style scoped>
    
</style>
