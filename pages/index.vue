<template>
  <div class="background-image p-6 bg-gray-50 min-h-screen flex flex-col items-center">
    <div class=" bg-white p-8 rounded-lg w-1/2 overflow-auto h-3/4 my-auto">
      <p class="text-2xl font-bold text-gray-600 mb-4 text-center">Welcome to Mapii</p>
      <h1 class="text-2xl font-bold text-yellow-600 mb-4 pl-2">Hi, I'm Adharsh N Jose <br /><span
          class="text-black text-lg">
          Software Engineer 2
        </span></h1>
      <span class=" text-lg font-medium">Skills:
      </span>
      <div class=" flex flex-wrap mb-4">
        <span v-for="(item, index) in skills" :key="index" class=" m-1 p-4 border rounded-lg"> {{ item }}</span>
      </div>
      <span class=" text-lg font-medium">project structure:
      </span>

      <div class="flex flex-col gap-2 bg-white p-4 rounded">
        <span class="text-lg text-gray-700 p-2 rounded-lg shadow-lg  border-2 text-center">Nuxt 3</span>
        <span class="text-lg text-gray-700 p-2 rounded-lg shadow-lg border-2 text-center">Typescript</span>
        <span class="text-lg text-gray-700 p-2 rounded-lg shadow-lg border-2 text-center">Tailwind</span>
        <span class="text-lg text-gray-700 p-2 rounded-lg shadow-lg border-2 text-center">Leaflet (nuxt-leaflet)</span>
        <span class="text-lg text-gray-700 p-2 rounded-lg shadow-lg border-2 text-center">git</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const skills = ref(["Nuxt", "three.js", "vue", "next.js", "framer.motion", "Tailwind", "ReactNative", "Expo", "typescript", "Team leading"]) 
</script>
<style scoped>
.background-image {
  background-image: url('/images/earth.jpg');
  background-size: cover;
  background-position: center;
}
</style>