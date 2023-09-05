<template>
  <div class="px-4 py-8 h-full font-Lato">
    <!-- First Row -->
    <!-- Doctors -->
    <div class="flex flex-row pl-1 pr-2">
      <div class="basis-1/4 max-w-[25%] px-3">
        <router-link to="">
          <div class="flex card relative rounded-lg">
            <div class="text-white font-Lato font-bold text-base pl-4 py-3">
              <h6 class="pb-4">DOCTORS</h6>
              <p class="text-2xl">4567</p>
            </div>
            <div
              class="bg-dashboard-primary rounded-l-[80px] rounded-r-lg absolute right-0 flex items-center h-full w-[30%]"
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
            <div class="text-white font-Lato font-bold text-base pl-4 py-3">
              <h6 class="pb-4">NURSES</h6>
              <p class="text-2xl">4567</p>
            </div>
            <div
              class="bg-dashboard-primary rounded-l-[80px] rounded-r-lg absolute right-0 flex items-center h-full w-[30%]"
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
            <div class="text-white font-Lato font-bold text-base pl-4 py-3">
              <h6 class="pb-4">PATIENTS</h6>
              <p class="text-2xl">4567</p>
            </div>
            <div
              class="bg-dashboard-primary rounded-l-[80px] rounded-r-lg absolute right-0 flex items-center h-full w-[30%]"
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
            <div class="text-white font-Lato font-bold text-base pl-4 py-3">
              <h6 class="pb-4">PHARMACISTS</h6>
              <p class="text-2xl">4567</p>
            </div>
            <div
              class="bg-dashboard-primary rounded-l-[80px] rounded-r-lg absolute right-0 flex items-center h-full w-[30%]"
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
    <!-- Second Row / First-->
    <div class="flex flex-row px-4 py-6">
      <div class="max-w-[33.333%] basis-1/3 py-2">
        <div class="flex flex-col">
          <div class="mb-6 bg-white rounded-md">
            <div class="text-lg font-bold pl-5">
              <h6 class="py-4">APPOINTMENTS</h6>
              <p class="text-3xl pb-2">4,973</p>
            </div>
            <div>
              <Chart
                type="line"
                :data="chartAppointment"
                :options="chartOptions"
                class="h-[80px]"
              />
            </div>
          </div>
          <div class="mb-6 bg-white rounded-md">
            <div class="text-lg font-bold pl-5">
              <h6 class="py-4">NEW PATIENTS</h6>
              <p class="text-3xl pb-2">650</p>
            </div>
            <div>
              <Chart type="line" :data="chartPatient" :options="chartOptions" class="h-[80px]" />
            </div>
          </div>
          <div class="bg-white rounded-md">
            <div class="text-lg font-bold pl-5">
              <h6 class="py-4">HOSPITAL EARNING</h6>
              <p class="text-3xl pb-2">3,473</p>
            </div>
            <div class="h-fit">
              <Chart type="line" :data="chartEarning" :options="chartOptions" class="h-[80px]" />
            </div>
          </div>
        </div>
      </div>
      <!-- Second Row / Second -->
      <div class="basis-1/3 max-w-[33.333%] py-2 px-6">
        <div class="bg-slate-300 flex justify-center">
          <Calendar v-model="date" inline showWeek class="h-[600px] w-full" />
        </div>
      </div>
      <!-- Second Row / Third -->
      <div class="basis-1/3 max-w-[33.333%] bg-white my-2 w-full rounded-md">
        <div class="flex flex-col items-center justify-center w-full">
          <div class="relative">
            <img
              src="https://slidesigma.nyc/templatemonster/angular/medboard/assets/img/portfolio/gallery-4-760x260.jpg"
              alt="doctors"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-dashboard-primary/[0.5]"></div>
          </div>
          <div class="flex justify-center max-w-[50%] h-auto">
            <img
              src="https://slidesigma.nyc/templatemonster/angular/medboard/assets/img/dashboard/doctor-1.jpg"
              alt="doctor"
              class="rounded-full ring-4 ring-sky-500 mt-[-20%] h-auto max-w-[38%] z-50"
            />
          </div>
        </div>
        <div class="pt-[40px] text-center">
          <h2 class="text-2xl text-black font-semibold">Anny Farisha</h2>
          <p class="font-normal pt-2 text-base text-black">Doctor</p>
          <p class="pt-5 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc
          </p>
        </div>
        <div class="flex justify-center pt-4 h-[50px]">
          <Button label="Assign" style="background-color: #009efb">
            <span class="material-symbols-outlined pr-2"> person_add </span>
            <p>Assign</p>
          </Button>
        </div>
        <div class="w-[95%] mx-auto">
          <Divider />
        </div>
        <div class="flex flex-row items-center">
          <div class="text-center pb-8 mx-auto">
            <h6 class="font-bold text-2xl">5790</h6>
            <p class="font-normal text-sm">Operations</p>
          </div>
          <div class="h-[80px] pb-4">
            <Divider layout="vertical" />
          </div>
          <div class="mx-auto text-center pb-8">
            <h6 class="font-bold text-2xl">4.5</h6>
            <p class="font-normal text-sm">Medical Rating</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Third Row -->
    <div class="flex">
      <div class="basis-1/2 max-w-[50%] px-4 py-2">
      <div class="bg-white px-4 py-4">
        <div>
          <h3 class="text-black font-bold">HOSPITAL BIRTH & DEATH ANALYTICS</h3>
        </div>
        <Divider />
        <div class="mb-4">
          <div class="flex flex-row mb-4">
            <div class="max-w-[33.333%] basis-1/3 px-4">
              <div
                class="w-[50px] h-[50px] rounded-lg flex items-center justify-center bg-dashboard-primary mb-3"
              >
                <span class="material-symbols-outlined text-white"> airline_seat_flat </span>
              </div>

              <div>
                <h6 class="pb-2 text-left">Births</h6>
                <p class="text-dashboard-primary font-bold text-lg">53.07%</p>
                <p class="text-dashboard-primary">201,434</p>
              </div>
            </div>

            <div class="max-w-[33.333%] basis-1/3 px-4">
              <div
                class="w-[50px] h-[50px] rounded-lg flex items-center justify-center bg-dashboard-primary mb-3 ml-4"
              >
                <span class="material-symbols-outlined text-white"> airline_seat_individual_suite </span>
              </div>

              <div class="px-4">
                <h6 class="pb-2 text-left">Deaths</h6>
                <p class="text-red-600 font-bold text-lg">29.05%</p>
                <p class="text-red-600">134,693</p>
              </div>
            </div>

            <div class="max-w-[33.333%] basis-1/3 px-4">
              <div
                class="w-[50px] h-[50px] rounded-lg flex items-center justify-center bg-dashboard-primary mb-3 ml-4"
              >
                <span class="material-symbols-outlined text-white"> accessible </span>
              </div>

              <div class="max-w-[33.333%] basis-1/3 px-4">
                <h6 class="pb-2 text-left">Accidents</h6>
                <p class="text-orange-700 font-bold text-lg">18.43%</p>
                <p class="text-orange-600">81,525</p>
              </div>
            </div>
          </div>

          <div class="flex flex-row">
            <div class="w-[53.07%]">
              <ProgressBar
                :value="100"
                :showValue="false"
                :pt="{
                  value: { style: { background: '#007bff' } },
                  root: { style: { 'border-width': '0', 'border-radius': '0' } }
                }"
              />
            </div>
            <div class="w-[29.05%]">
              <ProgressBar
                :value="100"
                :showValue="false"
                :pt="{
                  value: { style: { background: 'red' } },
                  root: { style: { 'border-width': '0', 'border-radius': '0' } }
                }"
              />
            </div>
            <div class="w-[18.43%]">
              <ProgressBar
                :value="100"
                :showValue="false"
                :pt="{
                  value: { style: { background: 'orange' } },
                  root: { style: { 'border-width': '0', 'border-radius': '0' } }
                }"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
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
import { setAppointment, setPatient, setEarning } from '../data/chartData'

onMounted(() => {
  chartAppointment.value = setAppointment()
  chartPatient.value = setPatient()
  chartEarning.value = setEarning()
  chartOptions.value = setChartOptions()
})

const date = ref(Date())
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

.color-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 158, 251, 0.5); /* Adjust the color and opacity here */
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 20;
}
</style>
