<template>
  <div class="text-center">Dashboard</div>
  <GenereateReport />
  <PrescriptionModal />
  <AppointmentModal />
</template>

<script setup>
import AppointmentModal from '../components/AppointmentModal.vue'
import GenereateReport from '../components/GenereateReport.vue'
import PrescriptionModal from '../components/PrescriptionModal.vue'
</script>

<style lang="scss" scoped></style>
