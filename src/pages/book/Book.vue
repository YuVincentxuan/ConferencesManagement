<template>
    <div class="content">
        <home-header></home-header>
        <book-list></book-list>
    </div>
</template>
<script>
import HomeHeader from '../home/components/Header'
import BookList from './components/List'
export default {
    name: 'Book',
    components: {
        HomeHeader,
        BookList
    }    
}
</script>
<style lang="stylus" scoped>
</style>
