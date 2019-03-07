<template>
    <div class="content">
        <home-header></home-header>
        <search-background></search-background>
    </div>
</template>
<script>
import HomeHeader from '../home/components/Header'
import SearchBackground from './components/Background'
export default {
    name: 'Search',
    components: {
        HomeHeader,
        SearchBackground
    }    
}
</script>
<style lang="stylus" scoped>
</style>
