<template>
  <div
    class="w-full p-2 mb-0 bg-dashboard-primary border-x-[20px] border-s-dashboard-primary border-r-dashboard-primary flex flex-wrap items-center relative justify-between header-shadow"
  >
    <div class="flex justify-between items-center h-[70px] text-white">
      <BurgerButton @burger="toggle" />
    </div>
    <div>
      <ul class="flex flex-wrap items-center text-white h-full list-none">
        <li class="p-3">
          <router-link to="">
            <span class="material-symbols-outlined align-sub px-1 text-[28px]">
              calendar_month
            </span>
            Make an appointment
          </router-link>
        </li>
        <li class="p-3">
          <router-link to="">
            <span class="material-symbols-outlined align-sub px-1 text-[28px]"> edit </span>
            Write a prescribtion
          </router-link>
        </li>
        <li class=" p-3">
          <router-link class="" to="">
            <span class="material-symbols-outlined align-sub px-1 text-[28px]"> note_alt </span>
            Generate Report
          </router-link>
        </li>
        <li class="p-3">
          <router-link to="" class="relative">
            <span class="material-symbols-outlined align-middle text-[28px]"> notifications </span>
            <span class="notification-badge"></span>
          </router-link>
        </li>
        <li class="p-3">
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

.header-shadow {
  box-shadow: -5px 0px 18px #0579bdd5;
}

.notification-badge{
content: "";
position: absolute;
top: 2px;
right: 1px;
width: 10px;
height: 10px;
border: 1px solid white;
border-radius: 50%;
background-color: red;
color: red;
}
</style>
