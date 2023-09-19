<template>
  <main>
    <div
      class="w-screen h-screen body bg-cover"
      style="background-image: url('/src/assets/images/signup.gif')"
    >
      <HeaderView />
      <div
        class="flex flex-col justify-center items-center h-[70%] w-full text-xl font-medium text-slate-700"
      >
        <div class="w-[30%] font-bold text-[40px] my-3">
          <h3 class="text-center">Account Login</h3>
        </div>
        <form
          class="flex items-center justify-center bg-slate-500/40 rounded-lg min-w-[300px] px-8 py-4 w-[30%]"
          method="post"
        >
          <div class="flex flex-col">
            <div class="flex flex-col">
              <div class="my-3 mx-4">
                <div class="pb-3"><label for="email">Email</label><br /></div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  class="pl-4 py-2 rounded-lg outline-none shadow focus:outline-cyan-700 focus:outline-4"
                  required
                  autocomplete="on"
                />
              </div>
              <div class="flex flex-row w-full">
                <div class="my-3 mx-4 w-full">
                  <div class="pb-3"><label for="password">Password</label><br /></div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    class="pl-4 py-2 rounded-lg outline-none shadow focus:outline-cyan-700 focus:outline-4 w-full"
                    required
                    autocomplete="on"
                  />
                </div>
              </div>
              <div class="w-full text-center py-2 text-white mx-2">
                <button
                  type="submit"
                  class="w-full py-2 rounded-full bg-cyan-700 hover:bg-cyan-900"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script setup>
import HeaderView from './HeaderView.vue'
</script>

<style scoped>
input {
  width: 100%;
}
</style>
