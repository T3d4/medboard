<template>
  <div class="w-full bg-dashboard-primary border-x-[30px] border-s-dashboard-primary border-r-dashboard-primary flex flex-wrap items-center relative justify-between header-shadow">
    <div class="flex justify-between items-center h-[70px] text-white">
      <BurgerButton @burger="toggle" />
    </div>
    <div >
      <ul class="flex flex-wrap items-center text-white h-full list-none">
        <li class="ml-6">
          <router-link to="">
            <span class="material-symbols-outlined align-sub px-1 text-[25px]"> calendar_month </span>
            Make an appointment
          </router-link>
        </li>
        <li class="ml-6">
          <router-link to="">
            <span class="material-symbols-outlined align-sub px-1 text-[25px]"> edit </span>
              Write a prescribtion
          </router-link>
        </li>
        <li class="ml-6">
          <router-link class="" to="">
            <span class="material-symbols-outlined align-sub px-1 text-[25px]"> note_alt </span>
            Generate Report
          </router-link>
        </li>
        <li class="ml-6 justify-center">
          <router-link to="">
            <span class="material-symbols-outlined align-middle text-[30px]"> notifications </span>
          </router-link>
        </li>
        <li class="ml-6 px-1 ">
          <router-link to="">
            <img
              src="https://slidesigma.nyc/templatemonster/angular/medboard/assets/img/dashboard/doctor-3.jpg"
              class="rounded-full w-[40px] float-right"
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

.header-shadow{
  box-shadow: -5px 0px 18px #0579bdd5;
}
</style>
