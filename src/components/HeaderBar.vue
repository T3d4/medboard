<template>
  <div class="w-full bg-dashboard-secondary flex flex-row justify-between">
    <div class="flex justify-between items-center h-[70px] text-white">
      <BurgerButton @burger="toggle" />
    </div>
    <div class="my-auto mr-4">
      <ul class="my-auto mr-4 items-center text-white flex mx-auto list-none">
        <li class="ml-6">
          <router-link to="">
            <span class="material-symbols-outlined align-middle text-[30px]"> calendar_month </span>
            Make an appointment
          </router-link>
        </li>
        <li class="ml-6">
          <router-link to="">
            <span class="material-symbols-outlined align-middle text-[30px]"> edit </span>
            Write a prescribtion
          </router-link>
        </li>
        <li class="ml-6">
          <router-link class="" to="">
            <span class="material-symbols-outlined align-middle text-[30px]"> note_alt </span>
            Generate Report
          </router-link>
        </li>
        <li class="ml-6 justify-center">
          <router-link to="">
            <span class="material-symbols-outlined text-[30px]"> notifications </span>
          </router-link>
        </li>
        <li class="ml-6">
          <router-link to="">
            <img
              src="https://slidesigma.nyc/templatemonster/angular/medboard/assets/img/dashboard/doctor-3.jpg"
              class="rounded-full w-[40px] align-middle float-right"
            />
          </router-link>
        </li>
      </ul>
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
