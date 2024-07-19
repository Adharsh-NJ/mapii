<template>
  <div class="background-image p-6 bg-gray-50 min-h-screen flex flex-col items-center">
    <h1 class="text-4xl font-bold text-yellow-600 mb-4">Hi, I'm Adharsh N Jose</h1>
    <p class="text-xl text-gray-400 mb-8">Welcome to Mapii</p>
    <h1 class="text-3xl font-semibold text-gray-50 mb-4">Project Structure:</h1>
    <div class="flex flex-col gap-2 bg-white p-4 rounded">
      <span class="text-lg text-gray-700 p-2 rounded-lg shadow-lg text-center">Nuxt 3 (for refreshing on
        concepts)</span>
      <span class="text-lg text-gray-700 p-2 rounded-lg shadow-lg text-center">Typescript</span>
      <span class="text-lg text-gray-700 p-2 rounded-lg shadow-lg text-center">Tailwind</span>
      <span class="text-lg text-gray-700 p-2 rounded-lg shadow-lg text-center">Leaflet (nuxt-leaflet)</span>
      <span class="text-lg text-gray-700 p-2 rounded-lg shadow-lg text-center">git</span>
    </div>
  </div>
</template>

<style scoped>
.background-image {
  background-image: url('/images/earth.jpg');
  background-size: cover;
  background-position: center;
}
</style>