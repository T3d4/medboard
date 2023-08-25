<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col my-1">
    <router-link
      to=""
      class="p-4 mt-4 hover:bg-blue-600 w-full flex no-underline text-white"
      @click.prevent="active = !active"
    >
      <span class="material-symbols-outlined text-base ml-2 mr-4"> dashboard </span>
      <p>{{ title }} Dashboard</p>
      <span class="down-Arrow ml-[80px] border-none" v-show="!active">&#9660;</span>
      <span class="up-Arrow ml-[80px] border-none" v-show="active">&#9650;</span>
    </router-link>
    <div class="bg-slate-100 text-black p-2 hover:text-dashboard-primary" v-show="active">Hey</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(true)
</script>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
    'FILL' 1,
    'wght' 300,
    'GRAD' 0,
    'opsz' 24;
}
</style>
