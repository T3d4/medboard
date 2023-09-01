<template>
  <div>
    <button @click="toggle">
      <span class="material-symbols-outlined my-auto mr-auto text-[35px]"> menu </span>
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['burger'])

const toggle = () => {
  emit('burger')
}
</script>

<style lang="scss" scoped></style>
