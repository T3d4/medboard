<template>
  <div class="px-2 py-6 h-full">
  <!-- Doctors -->
    <div class="flex flex-row pl-2 pr-5">
      <div class="basis-1/4 max-w-[25%] px-3">
        <router-link to="">
          <div class="flex card relative rounded-lg">
            <div class=" text-white font-Lato font-bold text-lg pl-5 py-3">
              <h6 class="pb-4">DOCTORS</h6>
              <p class="text-2xl">4567</p>
            </div>
            <div class="bg-dashboard-primary rounded-l-[80px] rounded-r-lg absolute right-0 flex items-center h-full w-[112px]">
            <font-awesome-icon icon="stethoscope" size="2xl" style="color: #ffffff;" class="mx-auto"/>
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
            <div class="bg-dashboard-primary rounded-l-[80px] rounded-r-lg absolute right-0 flex items-center h-full w-[112px]">
            <font-awesome-icon icon="user-plus" size="2xl" style="color: #ffffff;" class="mx-auto"/>
            </div>
          </div>
        </router-link>
      </div>
      <!-- Patients -->
      <div class="basis-1/4 max-w-[25%] px-3">
        <router-link to="">
          <div class="flex card relative rounded-lg">
            <div class=" text-white font-Lato font-bold text-lg pl-5 py-3">
              <h6 class="pb-4">PATIENTS</h6>
              <p class="text-2xl">4567</p>
            </div>
            <div class="bg-dashboard-primary rounded-l-[80px] rounded-r-lg absolute right-0 flex items-center h-full w-[112px]">
            <font-awesome-icon icon="wheelchair" size="2xl" style="color: #ffffff;" class="mx-auto"/>
            </div>
          </div>
        </router-link>
      </div>
      <!-- Pharmacists -->
      <div class="basis-1/4 max-w-[25%] px-3">
        <router-link to="">
          <div class="flex card relative rounded-lg">
            <div class=" text-white font-Lato font-bold text-lg pl-5 py-3">
              <h6 class="pb-4">PHARMACISTS</h6>
              <p class="text-2xl">4567</p>
            </div>
            <div class="bg-dashboard-primary rounded-l-[80px] rounded-r-lg absolute right-0 flex items-center h-full w-[112px]">
            <font-awesome-icon icon="briefcase-medical" size="2xl" style="color: #ffffff;" class="mx-auto"/>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="flex flex-row px-4 py-6">
      <div class="basis-1/3">
        <div class="flex flex-col">
          <div class="basis-1/3 mb-8 max-w-[33.333%]">card 1</div>
          <div class="basis-1/3 mb-8 max-w-[33.333%]">card 2</div>
          <div class="basis-1/3 mb-8 max-w-[33.333%]">card 3</div>
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

<style scoped>
.card{
  background-image: linear-gradient(90deg,rgba(0,158,251,.8),#fff);
}
</style>