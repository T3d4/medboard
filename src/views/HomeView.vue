<template>
  <div>
    <div class="flex h-screen">
      <SideBar />
      <div class="w-screen h-[50px]">
        <HeaderBar />
        <div>
          <ContentView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SideBar from '../components/SideBar.vue'
import HeaderBar from '../components/HeaderBar.vue'
import ContentView from '../views/ContentView.vue'
</script>

<style lang="scss" scoped></style>
