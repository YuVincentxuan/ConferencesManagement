<template>
    <div class="content">
        <home-header></home-header>
        <room-infor></room-infor>
    </div>
</template>
<script>
import HomeHeader from '../home/components/Header'
import RoomInfor from './components/Infor'
export default {
    name: 'Room',
    components: {
        HomeHeader,
        RoomInfor
    }    
}
</script>
<style lang="stylus" scoped>
    .header
        background-color transparent
</style>
