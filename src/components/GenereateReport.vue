<template>
  <div>
    <Dialog v-model:visible="visible" modal header="Generate report" :style="{ width: '50vw' }">
      <h6 class="font-semibold">Patient Information</h6>
      <Divider />
      <div>
          <form @submit="onSubmit" class="flex">
        <div class="flex flex-col">
            <label for="date" class="mb-2">Date of Birth</label>
            <Calendar id="date" v-model="value" show-icon :class="{'p-invalid':errorMessage}"/>
            <small class="p-error" id="date-error">{{ errorMessage || '&nbsp;' }}</small>
        </div>
          </form>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useField, useForm} from 'vee-validate'

const {handleSubmit, resetForm}= useForm();
const {value, errorMessage}=useField('value', validateField)
const visible = ref(true)

function validateField (value) {
    if(!value){
        return 'Date is required'
    }
    return true
}

const onSubmit = handleSubmit((values)=>{
    if(values.value){
        console.log("submitted");
        resetForm();
    }
})
</script>
