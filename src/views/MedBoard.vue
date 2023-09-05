<template>
  <div class="px-4 py-8 h-full font-Lato">
    <!-- First Row -->
    <!-- Doctors -->
    <div class="flex flex-row pl-1 pr-2">
      <div class="basis-1/4 max-w-[25%] px-3">
        <router-link to="">
          <div class="flex card relative rounded-lg">
            <div class="text-white font-Lato font-bold text-lg pl-5 py-3">
              <h6 class="pb-4">DOCTORS</h6>
              <p class="text-2xl">4567</p>
            </div>
            <div
              class="bg-dashboard-primary rounded-l-[80px] rounded-r-lg absolute right-0 flex items-center h-full w-[112px]"
            >
              <font-awesome-icon
                icon="stethoscope"
                size="2xl"
                style="color: #ffffff"
                class="mx-auto"
              />
            </div>
          </div>
        </router-link>
      </div>
      <!-- Nurses -->
      <div class="basis-1/4 max-w-[25%] px-3">
        <router-link to="">
          <div class="flex card relative rounded-lg">
            <div class="text-white font-Lato font-bold text-lg pl-5 py-3">
              <h6 class="pb-4">NURSES</h6>
              <p class="text-2xl">4567</p>
            </div>
            <div
              class="bg-dashboard-primary rounded-l-[80px] rounded-r-lg absolute right-0 flex items-center h-full w-[112px]"
            >
              <font-awesome-icon
                icon="user-plus"
                size="2xl"
                style="color: #ffffff"
                class="mx-auto"
              />
            </div>
          </div>
        </router-link>
      </div>
      <!-- Patients -->
      <div class="basis-1/4 max-w-[25%] px-3">
        <router-link to="">
          <div class="flex card relative rounded-lg">
            <div class="text-white font-Lato font-bold text-lg pl-5 py-3">
              <h6 class="pb-4">PATIENTS</h6>
              <p class="text-2xl">4567</p>
            </div>
            <div
              class="bg-dashboard-primary rounded-l-[80px] rounded-r-lg absolute right-0 flex items-center h-full w-[112px]"
            >
              <font-awesome-icon
                icon="wheelchair"
                size="2xl"
                style="color: #ffffff"
                class="mx-auto"
              />
            </div>
          </div>
        </router-link>
      </div>
      <!-- Pharmacists -->
      <div class="basis-1/4 max-w-[25%] px-3">
        <router-link to="">
          <div class="flex card relative rounded-lg">
            <div class="text-white font-Lato font-bold text-lg pl-5 py-3">
              <h6 class="pb-4">PHARMACISTS</h6>
              <p class="text-2xl">4567</p>
            </div>
            <div
              class="bg-dashboard-primary rounded-l-[80px] rounded-r-lg absolute right-0 flex items-center h-full w-[112px]"
            >
              <font-awesome-icon
                icon="briefcase-medical"
                size="2xl"
                style="color: #ffffff"
                class="mx-auto"
              />
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <!-- Second Row -->
    <div class="flex flex-row px-4 py-6">
      <div class="max-w-[33.333%] basis-1/3 pr-6 py-2 ">
        <div class="flex flex-col">
          <div class="mb-6 bg-white">
            <div class="text-lg font-bold pl-5">
              <h6 class="py-4">APPOINTMENTS</h6>
              <p class="text-3xl pb-2">4,973</p>
            </div>
            <div>
              <Chart type="line" :data="chartAppointment" :options="chartOptions" class="h-[100px]"/>
            </div>
          </div>
          <div class="mb-6 bg-white">
            <div class="text-lg font-bold pl-5">
              <h6 class="py-4">PATIENTS</h6>
              <p class="text-3xl pb-2">650</p>
            </div>
            <div>
              <Chart type="line" :data="chartPatient" :options="chartOptions" class="h-[100px]"/>
            </div>
          </div>
          <div class=" bg-white">
            <div class="text-lg font-bold pl-5">
              <h6 class="py-4">HOSPITAL EARNING</h6>
              <p class="text-3xl pb-2">3,473</p>
            </div>
            <div class="h-fit">
              <Chart type="line" :data="chartEarning" :options="chartOptions" class="h-[100px]"/>
            </div>
          </div>
        </div>
      </div>
      <div class="basis-1/3 max-w-[33.333%]">Hola Comrade</div>
      <div class="basis-1/3 max-w-[33.333%]">Hola Comrade</div>
    </div>
    <div class="flex flex-row px-4 py-6">
      <div class="basis-1/2 max-w-[50%]">3Rd Row</div>
      <div class="basis-1/2 max-w-[50%]">3Rd Row</div>
    </div>
    <div class="flex flex-row px-4 py-6">
      <div class="basis-1/2 max-w-[50%]">4th Row</div>
      <div class="basis-1/2 max-w-[50%]">4th Row</div>
    </div>
    <div class="flex flex-row px-4 py-6">
      <div class="basis-3/4 max-w-[75%]">5th Row</div>
      <div class="basis-1/4 max-w-[25%]">5th Row</div>
    </div>
    <div class="flex flex-row px-4 py-6">
      <div class="basis-1/2 max-w-[50%]">6th Row</div>
      <div class="basis-1/2 max-w-[50%]">6th Row</div>
    </div>
    <div class="flex flex-row px-4 py-6">
      <div class="basis-3/4 max-w-[75%]">7th Row</div>
      <div class="basis-1/4 max-w-[25%]">7th Row</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {setAppointment, setPatient, setEarning} from '../data/chartData'

onMounted(() => {
  chartAppointment.value = setAppointment()
  chartPatient.value = setPatient()
  chartEarning.value = setEarning()
  chartOptions.value = setChartOptions()
})

const chartAppointment = ref()
const chartPatient = ref()
const chartEarning = ref()
const chartOptions = ref()



const setChartOptions = () => {
  return {
    maintainAspectRatio: false,
    aspectRatio: 0.7,
    pointRadius: 0,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  }
}
</script>

<style scoped>
.card {
  background-image: linear-gradient(90deg, rgba(0, 158, 251, 0.8), #fff);
}
</style>
