<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col whitespace-nowrap justify-between w-full">
    <router-link
      to=""
      class="p-4 mt-3 hover:bg-blue-600 w-full flex no-underline text-white"
      @click.prevent="active = !active"
    >
    <span class="material-symbols-outlined text-base ml-2 mr-4">
      {{ props.label.icon }}
    </span>
      <p>{{ props.label.title }}</p>
      <span class="down-Arrow ml-auto border-none" v-show="!active">&#9660;</span>
      <span class="up-Arrow ml-auto border-none " v-show="active">&#9650;</span>
    </router-link>
    <div
      class="bg-slate-100 text-[#4E4E4E] py-4 font-[14px] text-left pl-[55px] hover:text-dashboard-primary text-sm"
      v-show="active"
      v-for="label in props.label.label"
      :key="label.id"
    >
      {{ label }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  label: Object
})

console.log(props.label)

const active = ref(false)
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 0,
    'wght' 500,
    'GRAD' 0,
    'opsz' 48;
}
</style>
