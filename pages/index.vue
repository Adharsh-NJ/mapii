<template>
  <div class="bg-gray-50 min-h-screen flex flex-col items-center">
    <NuxtImg src="/images/earth.jpg" class=" fixed h-full w-full" preload />
    <div class=" bg-white p-8 rounded-lg md:w-1/2 w-3/4 mx-4 overflow-auto h-[350px] md:h-[600px] my-auto z-10">
      <p class="text-2xl font-bold text-gray-600 mb-4 text-center">Welcome to MapD</p>
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
        <span class="text-lg text-gray-700 p-2 rounded-lg shadow-lg  border-2 text-center"
          v-for="(item, index) in projectStructure" :key="index">{{ item }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { projectStructure, skills } from '~/constants/home';
</script>