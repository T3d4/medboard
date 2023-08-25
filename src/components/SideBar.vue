<template>
  <div class="h-full w-[255px] bg-dashboard-primary text-white text-center">
    <div class="h-[225px]">
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
            class="rounded-full w-[50%] h-[50%] ml-10 ring-white ring-4"
          />
        </router-link>
      </div>
      <h5 class="text-center font-bold text-lg my-2">Dr.Samuel</h5>
      <h6 class="text-center">Admin</h6>
    </div>
    <Accordion />
  </div>
</template>

<script setup>
import Accordion from './Accordion.vue'
</script>

<style lang="scss" scoped></style>
