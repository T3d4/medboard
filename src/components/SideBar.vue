<template>
  <div class="justify-center overflow-auto bg-dashboard-primary text-white text-center navbar sidebar">
    <div>
      <div class="flex font-Lato font-bold items-center justify-center">
        <router-link to="" class="h-[70%] w-[70%] align-middle cursor-pointer my-4">
          <img
            src="https://slidesigma.nyc/templatemonster/angular/medboard/assets/img/medboard-logo-216x62.png"
          />
        </router-link>
      </div>
      <div class="flex justify-center items-center">
        <router-link to="" class="h-[70%] w-[70%] cursor-pointer">
          <img
            src="https://slidesigma.nyc/templatemonster/angular/medboard/assets/img/dashboard/doctor-3.jpg"
            class="rounded-full w-[50%] h-[50%] ml-10 ring-2 ring-white"
          />
        </router-link>
      </div>
      <h5 class="text-center font-bold text-lg my-2">Dr.Samuel</h5>
      <h6 class="text-center">Admin</h6>
    </div>
    <div class="">
      <Accordion v-for="label in labels" :key="label.id" :label="label" />
    </div>
  </div>
</template>

<script setup>
import Accordion from './Accordion.vue'
import labels from '../data/label.json'
</script>

<style scoped>
.sidebar::-webkit-scrollbar {
  width: 14px;
}
.sidebar::-webkit-scrollbar-thumb {
  background-clip: content-box;
  border: 4px solid transparent;
  border-radius: 7px;
  box-shadow: inset 0 0 0 10px;
}
.sidebar::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}
.sidebar::-webkit-scrollbar-corner {
  background-color: transparent;
}
</style>
