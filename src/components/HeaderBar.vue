<template>
  <div class="w-full bg-dashboard-secondary">
    <div class="flex justify-between items-center h-[70px] text-white">
      <BurgerButton @burger="toggle" />
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
import BurgerButton from './BurgerButton.vue'
const emit = defineEmits(['toggle'])
const toggle = () => {
  emit('toggle')
  console.log('not working', emit)
}
</script>

<style scoped>
#app {
  text-align: center;
}
</style>
