<template>
  <transition>
      <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'HoverAnimaltion'
}
</script>

<style lang="stylus" scoped>
  .v-enter, .v-leave-to
    color red
  .v-enter-active, .v-leave-active
    transition  color 
</style>
