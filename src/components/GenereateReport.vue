<template>
  <div>
    <Dialog v-model:visible="visible" modal header="Generate report" :style="{ width: '50vw' }">
      <h6 class="font-semibold">Patient Information</h6>
      <Divider />
      <div>
        <form @submit="onSubmit">
          <div class="flex justify-between">
            <div class="flex flex-col">
              <label for="name" class="mb-2">Patient Name</label>
              <InputText id="name" v-model="name" type="text" placeholder="Enter name" />
            </div>
            <div class="flex flex-col">
              <label for="date" class="mb-2">Date of Birth</label>
              <Calendar
                id="date"
                v-model="value"
                show-icon
                :class="{ 'p-invalid': errorMessage }"
                placeholder="dd / mm / yyyy"
              />
              <small class="p-error" id="date-error">{{ errorMessage || '&nbsp;' }}</small>
            </div>
            <div class="flex flex-col">
              <label for="address" class="mb-2">Address</label>
              <InputText id="address" type="text" placeholder="Enter Address" />
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex flex-col">
              <label class="mb-2" for="number">Phone no.</label>
              <InputText id="number" type="number" placeholder="Enter Phone no." />
            </div>
            <div class="flex flex-col">
              <label class="mb-2" for="report">Report Type</label>
              <InputText id="report" type="text" placeholder="Diseases Report" />
            </div>
            <div class="flex flex-col">
              <label class="mb-2" for="report-period"> Report Period </label>
              <InputText id="report-period" type="text" placeholder="Report Period" />
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex flex-col">
              <label class="mb-2 mt-5" for="appointment">Appointment With</label>
              <InputText id="appointment" type="text" placeholder="Enter Doctor's Name" />
            </div>
          </div>
        </form>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'

const visible = ref(true)
const { handleSubmit, resetForm } = useForm()
const { value, errorMessage } = useField('date', validateField)

function validateField(date) {
  if (!date) {
    return 'Date is required'
  }
  return true
}

const onSubmit = handleSubmit((values) => {
  if (values.value) {
    console.log('submitted')
    resetForm()
  }
})
</script>
