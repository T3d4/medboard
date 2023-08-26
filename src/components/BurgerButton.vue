<template>
  <div>
    <button @click="toggle">
      <span class="material-symbols-outlined text-[35px]"> menu </span>
    </button>
  </div>
</template>

<script setup>
// const toggle = defineProps({
//     toggleSidebar: Function
// })

// const toggleSidebar = toggle.toggleSidebar;

const emit = defineEmits(['burger'])

const toggle = () => {
  emit('burger')
  console.log('burger button', emit)
}
</script>

<style lang="scss" scoped></style>
