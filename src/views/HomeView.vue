<template>
  <div class="flex h-screen">
    <SideBar
      :class="{ 'navbar-open': isNavbarOpen, 'navbar-closed': !isNavbarOpen }"
      class="navbar"
    />
    <div class="w-screen">
      <HeaderBar @toggle="toggleSidebar" />
      <div>
        <ContentView />
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from '../components/SideBar.vue'
import HeaderBar from '../components/HeaderBar.vue'
import ContentView from '../views/ContentView.vue'
import { ref } from 'vue'

const isNavbarOpen = ref(false)

const toggleSidebar = () => {
  isNavbarOpen.value = !isNavbarOpen.value
  console.log('toggled')
}
</script>

<style scoped>
.navbar {
  transition: width 0.3s ease-in-out;
}

.navbar-open {
  width: 300px; /* Adjust the width to your desired value */
}

.navbar-closed {
  width: 0;
  padding: 0; /* Reset padding for closed state */
}
</style>
