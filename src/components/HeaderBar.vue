<template>
  <div
    class="w-full p-2 mb-0 bg-dashboard-primary border-x-[20px] border-s-dashboard-primary border-r-dashboard-primary flex flex-wrap items-center relative justify-between header-shadow"
  >
    <div class="flex justify-between items-center h-[70px] text-white">
      <BurgerButton />
    </div>
    <div>
      <ul class="flex flex-wrap items-center text-white h-full list-none">
        <!-- Appointment Button -->
        <li class="p-3" @click="appointment">
          <router-link to="">
            <span class="material-symbols-outlined align-sub px-1 text-[28px]">
              calendar_month
            </span>
            Make an appointment
          </router-link>
        </li>
        <!-- Prescription Button -->
        <li class="p-3" @click="prescribe">
          <router-link to="">
            <span class="material-symbols-outlined align-sub px-1 text-[28px]"> edit </span>
            Write a prescribtion
          </router-link>
        </li>
        <!-- Report Button -->
        <li class="p-3" @click="report">
          <router-link class="" to="">
            <span class="material-symbols-outlined align-sub px-1 text-[28px]"> note_alt </span>
            Generate Report
          </router-link>
        </li>
        <!-- Notification Button -->
        <li class="p-3" @click="notify">
          <router-link to="" class="relative">
            <span class="material-symbols-outlined align-middle text-[28px]"> notifications </span>
            <span class="notification-badge" />
          </router-link>
          <Menu
            ref="notification"
            :popup="true"
            id="overlay_menu"
            :pt="{ root: { style: { width: '300px' } } }"
          >
            <template #start>
              <ul>
                <li>
                  <div class="flex items-center justify-center text-center h-[40px] ml-2">
                    <span>Notifications</span>
                    <Chip
                      class="pl-0 pr-3 ml-2 mx-auto flex items-center justify-content-center"
                      :pt="{
                        root: { style: { background: '#009efb' } }
                      }"
                    >
                      <div class="text-white">
                        <span class="border-circle">4</span>
                        <span class="ml-1 font-medium">New</span>
                      </div>
                    </Chip>
                  </div>
                </li>
                <Divider :pt="{ root: { style: { 'margin-top': '0' } } }" />
                <router-link to="">
                  <li>
                    <div class="flex flex-col w-full">
                      <span>Hello World</span>
                      <span>45mins</span>
                    </div>
                  </li>
                </router-link>
              </ul>
            </template>
          </Menu>
        </li>
        <!-- PROFILE MENU -->
        <li class="p-3" @click="show">
          <router-link to="">
            <img
              src="https://slidesigma.nyc/templatemonster/angular/medboard/assets/img/dashboard/doctor-3.jpg"
              class="rounded-full w-[40px] float-right"
            />
          </router-link>
          <Menu
            :model="profileMenu"
            ref="menu"
            id="overlay_menu"
            :popup="true"
            class="overlay_menu"
          >
            <template #start>
              <span class="w-full mx-auto text-center p-2 text-slate-500 font-Lato my-2 flex"
                >Welcome Dr.Samuel Deo</span
              >
            </template>
          </Menu>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'
import BurgerButton from './BurgerButton.vue'
import profileDropdown from '../data/profileDropdown.json'
import { showModal } from '../showModal'

const profileMenu = ref(profileDropdown)
const menu = ref()
const notification = ref()

const show = (event) => {
  menu.value.toggle(event)
}

const notify = (event) => {
  notification.value.toggle(event)
}

const appointment = () => {
  showModal.appointment = !showModal.appointment
}

const prescribe = () => {
  showModal.prescribe = !showModal.prescribe
}

const report = () => {
  showModal.report = !showModal.report
}
</script>

<style scoped>
.header-shadow {
  box-shadow: -5px 0px 18px #0579bdd5;
}

.notification-badge {
  content: '';
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
