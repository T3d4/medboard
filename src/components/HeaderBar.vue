<template>
  <div class="w-full bg-dashboard-secondary flex flex-row justify-between">
    <div class="flex justify-between items-center h-[70px] text-white">
      <BurgerButton @burger="toggle" />
    </div>
    <div class="my-auto mr-4">
      <ul  class="my-auto mr-4 items-center text-white flex mx-auto">
        
        <li class="ml-6">
          <span class="material-symbols-outlined">
            notifications
            </span>
          <router-link to="">
            
            Make an Appointment
          </router-link>
        </li>
        <li class="ml-6">
          <span class="material-symbols-outlined ">
            notifications
            </span>
          <router-link to="">
            Write a prescribtion
          </router-link>
        </li>
        <li class="ml-6 inline-block relative">
          <router-link class="" to="">
            <i class="material-symbols-outlined">
              note_alt
            </i>
            Generate Report
          </router-link>
        </li>
        <li class="ml-6 justify-center"> <router-link to="">
          <span class="material-symbols-outlined">
            notifications
            </span>
        </router-link></li>
        <li class="ml-6"> <router-link to="">
          <img
          src="https://slidesigma.nyc/templatemonster/angular/medboard/assets/img/dashboard/doctor-3.jpg"
          class="rounded-full block w-[40px] float-right"
        />
        </router-link></li>
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
